const vertexShader = 
`
    uniform float u_Distance;
    attribute vec2 a_Position;
    varying vec2 v_UV;

    float PI = 3.14159;
    float scale = 0.95;

    void main() {

    float x = a_Position.x;
    float y = a_Position.y;

    float amplitude = 1.0 - scale; // 振幅
    float period = 2.0;  // 周期
    float waveLength = 2.0 * scale;

    v_UV = (mat3(0.5,0,0, 0,0.5,0, 0.5,0.5,1) * vec3(x, y, 1.0)).xy;
    y += amplitude * ( (x - (-scale)) / waveLength) * sin(2.0 * PI * (x - u_Distance));

    float x2 = x - 0.001;
    float y2 = a_Position.y + amplitude * ( (x2 - (-scale)) / waveLength) * sin(2.0 * PI * (x2 - u_Distance));

    gl_Position = vec4(vec2(x, y), 0.0, 1.0);
    }
`

const fragmentShader = 
`
    precision mediump float;
    uniform sampler2D u_Sampler;
    varying vec2 v_UV;

    void main() {
    vec4 color = texture2D( u_Sampler, v_UV );

    if(v_UV.x < 0.0 || v_UV.x > 1.0 || v_UV.y < 0.0 || v_UV.y > 1.0) {
        color.a = 0.0;
    }
    gl_FragColor = color;
    }
`

var ShaderUtil = {

    createShader: function (gl, source, type) {
      var shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Compile shader source fail:\n\n' + source, '\n\n=====error log======\n\n', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
  
      return shader
  
    },
  
    createProgram: function (gl, vertexShader, fragmentShader, validate) {
      var program = gl.createProgram()
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Creating shader program fail:\n', gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
      }
  
      if (validate) {
        gl.validateProgram(program)
        if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
          console.error('Error validating shader program:\n', gl.getProgramInfoLog(program))
          gl.deleteProgram(program)
          return null
        }
      }
  
      gl.detachShader(program, vertexShader)
      gl.detachShader(program, fragmentShader)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
  
      return program
    },
  
  
    createProgramFromSrc: function (gl, vertexShaderSrc, fragmentShaderSrc, validate) {
      var vShader = ShaderUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER)
      var fShader = ShaderUtil.createShader(gl, fragmentShaderSrc, gl.FRAGMENT_SHADER)
      if (!vShader || !fShader) {
        gl.deleteShader(vShader)
        gl.deleteShader(fShader)
        return null
      }
      return ShaderUtil.createProgram(
        gl,
        vShader,
        fShader,
        validate
      )
    },
  
    getSrcFromUrl: function (url, callback) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            callback(xhr.responseText)
          }
        }
      }
      xhr.send()
    }
  }
  
  var Shaders = function (gl, vertexShader, fragmentShader) {
    var program = ShaderUtil.createProgramFromSrc(gl, vertexShader, fragmentShader, true)
  
    if (program) {
      this.program = program
      this.gl = gl
      gl.useProgram(this.program)
    }
  
    /**
     * @return {Shaders}
     */
    this.activate = function () {
      gl.useProgram(program)
      return this
    }
  
    /**
       * @return {Shaders}
       */
    this.deactivate = function () {
      gl.useProgram(null)
      return this
    }
  
    this.dispose = function () {
      if (gl.getParameter(gl.CURRENT_PROGRAM === program)) {
        this.deactivate()
      }
      gl.deleteProgram(program)
    }
  
  };
  
  (function () {
  
    var canvas = document.getElementById('flag-canvas')
    var gl
  
    var imgWidth, imgHeight
    var canvasWidth, canvasHeight
  
    var image = new Image()
  
    var eleSize = 0  
    var vertexCount = 0
  
    // ShaderUtil.getSrcFromUrl('vertexShader.vert', function (src) {
    //   vertexShader = src
    //   onAllLoaded()
    // })
    // ShaderUtil.getSrcFromUrl('fragmentShader.frag', function (src) {
    //   fragmentShader = src
    //   onAllLoaded()
    // })
  
    init()
  
    function init () {
      if (!vertexShader || !fragmentShader) {
        return false
      }
  
      image.crossOrigin = 'anonymous'
      image.src = '/bg_flag.jpg'
      image.onload = function () {
        imgWidth = window.innerWidth;
        imgHeight = window.innerHeight;
        canvasWidth = imgWidth
        canvasHeight = imgHeight
        canvas.width = canvasWidth
        canvas.height = canvasHeight
  
        gl = canvas.getContext('webgl')
        if (!gl) {
          throw Error('no support WebGL')
        }
  
        var shader = new Shaders(gl, vertexShader, fragmentShader)
  
        var aPosition = gl.getAttribLocation(shader.program, 'a_Position')
        var uDistance = gl.getUniformLocation(shader.program, 'u_Distance')
  
        createVerticesBuffer()
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, eleSize * 2, 0)
        gl.enableVertexAttribArray(aPosition)
  
        createTexture()
        var uSampler = gl.getUniformLocation(shader.program, 'u_Sampler')
        gl.uniform1i(uSampler, 0)
  
        draw()
        tick()
  
        function draw () {
          gl.clear(gl.COLOR_BUFFER_BIT)
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexCount)
        }
  
        var speed = .2
  
        var stop = false
        var timeLast = Date.now()
        var timeNow
        var delta
        var fps = 70
        var interval = 1000 / fps
  
        var distance = 0
  
        function tick () {
          if (stop) return false
          timeNow = Date.now()
          delta = timeNow - timeLast
          if (delta > interval) {
            timeLast = timeNow
            distance += delta * 0.001 * speed
            gl.uniform1f(uDistance, distance)
            draw()
          }
          requestAnimationFrame(tick)
        }
      }
  
    }
  
    function createVerticesBuffer () {
      var vertices = []
      var x
      for (var i = 0; i <= imgWidth; i++) {
        x = -1 + 2 * i / imgWidth
        // x = -1 + 2 * i / imgWidth
        vertices.push(x, -1, x, 1)
      }
      vertexCount = 2 * (imgWidth + 1)
      vertices = new Float32Array(vertices)
      eleSize = vertices.BYTES_PER_ELEMENT
  
      var buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
      return buffer
    }
  
    function createTexture () {
      var texture = gl.createTexture()
  
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
    }
  
  })()