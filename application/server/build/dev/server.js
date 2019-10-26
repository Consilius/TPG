(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../client/src/main/pages/App/App.tsx":
/*!********************************************!*\
  !*** ../client/src/main/pages/App/App.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "" }, "Hello World"));
    }
}
exports.default = App;


/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, scripts, author, license, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"simple\",\"version\":\"0.0.1\",\"description\":\"Simple playground project\",\"main\":\"index.js\",\"scripts\":{\"dev\":\"cross-env NODE_ENV=development A=a npm run dev:client && npm run dev:server\",\"dev:server\":\"cd server; npm run dev\",\"dev:client\":\"cd client; npm run dev\",\"tslint:server\":\"cd server; npm run tslint\",\"tslint:client\":\"cd client; npm run tslint\",\"tslint\":\"npm run tslint:server; npm run tslint:client\",\"setup\":\"npm i && cd client; npm i; cd ../server; npm i; cd ../shared; npm i\",\"clean:all\":\"rm -rf node_modules; rm -rf server/public/assets; cd client; npm run clean:all; cd ../server; npm run clean:all\"},\"author\":\"Evan Santa\",\"license\":\"ISC\",\"dependencies\":{\"cross-env\":\"^5.2.1\"}}");

/***/ }),

/***/ "./src/main/Document.tsx":
/*!*******************************!*\
  !*** ./src/main/Document.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
const version = __webpack_require__(/*! ../../../package.json */ "../package.json").version;
class Document extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    createMarkup(data) {
        return {
            __html: `
                //<![CDATA[
                    window['APP_STATE'] = ${serializeJavascript(data, { isJSON: true })};
                    window['VERSION'] = '${version}';
                //]]>`
        };
    }
    render() {
        const { bundle, title, meta, children, preloadedState, canonicalUrl, domain } = this.props;
        return (React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("link", { rel: "icon", type: "image/png", href: "/assets/images/common/favicon.png" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no" }),
                React.createElement("meta", { name: "version", content: version }),
                React.createElement("link", { href: "/assets/styles/app.css", rel: "stylesheet" }),
                canonicalUrl && React.createElement("link", { rel: "canonical", href: canonicalUrl }),
                React.createElement("title", null, title),
                React.createElement("meta", { name: "robots", content: "follow, all" }),
                React.createElement("meta", { name: "author", content: "Filmzie" }),
                React.createElement("meta", { name: "description", content: "FILMZIE - Meet New Films." }),
                React.createElement("meta", { property: "og:type", content: "website" }),
                React.createElement("meta", { property: "og:description", content: "Filmzie - Meet New Films" }),
                React.createElement("meta", { property: "og:site_name", content: "filmzie.com" }),
                meta),
            React.createElement("body", null,
                React.createElement("div", { id: "root" }, children),
                preloadedState && React.createElement("script", { dangerouslySetInnerHTML: this.createMarkup(preloadedState) }),
                React.createElement("script", { src: "/vendor.js" }),
                React.createElement("script", { src: `/${bundle}` }),
                 true && (React.createElement("script", { src: `http://localhost:35732/livereload.js` })))));
    }
}
exports.default = Document;


/***/ }),

/***/ "./src/main/routes/index.ts":
/*!**********************************!*\
  !*** ./src/main/routes/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rootRouter_1 = __webpack_require__(/*! ./rootRouter */ "./src/main/routes/rootRouter.tsx");
exports.rootRouter = rootRouter_1.default;


/***/ }),

/***/ "./src/main/routes/rootRouter.tsx":
/*!****************************************!*\
  !*** ./src/main/routes/rootRouter.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __webpack_require__(/*! express */ "express");
const React = __webpack_require__(/*! react */ "react");
const ReactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const Document_1 = __webpack_require__(/*! ../Document */ "./src/main/Document.tsx");
const react_router_1 = __webpack_require__(/*! react-router */ "react-router");
const App_1 = __webpack_require__(/*! ../../../../client/src/main/pages/App/App */ "../client/src/main/pages/App/App.tsx");
const router = express_1.Router();
router.use("/", (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(Document_1.default, { title: "Simple", bundle: "app.js", preloadedState: {}, domain: req.get("host") },
        React.createElement(react_router_1.StaticRouter, { location: req.originalUrl, context: { url: req.url } },
            React.createElement(App_1.default, null))));
    res.set("Content-Type", "text/html");
    res.send("<!doctype html>" + html);
});
exports.default = router;


/***/ }),

/***/ "./src/main/server.ts":
/*!****************************!*\
  !*** ./src/main/server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const express = __webpack_require__(/*! express */ "express");
const index_1 = __webpack_require__(/*! ./routes/index */ "./src/main/routes/index.ts");
const path_1 = __webpack_require__(/*! path */ "path");
const config = __webpack_require__(/*! dotenv */ "dotenv").config();
process.env.SECRET = "secret_key";
console.log("ARGS", config);
const app = express();
const host = 'http://localhost';
const port = Number(process.env.npm_config_port) || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(express.static(path_1.resolve(__dirname, "../../../client", `build/${ true ? "dev" : undefined}`)));
app.use("/", index_1.rootRouter);
app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});
/*****************************/
/***** Application logic *****/
/*****************************/

/* WEBPACK VAR INJECTION */}.call(this, "src/main"))

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main/server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main/server.ts */"./src/main/server.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzL2V2YW5zYW50YS9EZXNrdG9wL1NpbXBsZS9hcHBsaWNhdGlvbi9jbGllbnQvc3JjL21haW4vcGFnZXMvQXBwL0FwcC50c3giLCIvVXNlcnMvZXZhbnNhbnRhL0Rlc2t0b3AvU2ltcGxlL2FwcGxpY2F0aW9uL3NlcnZlci9zcmMvbWFpbi9Eb2N1bWVudC50c3giLCIvVXNlcnMvZXZhbnNhbnRhL0Rlc2t0b3AvU2ltcGxlL2FwcGxpY2F0aW9uL3NlcnZlci9zcmMvbWFpbi9yb3V0ZXMvaW5kZXgudHMiLCIvVXNlcnMvZXZhbnNhbnRhL0Rlc2t0b3AvU2ltcGxlL2FwcGxpY2F0aW9uL3NlcnZlci9zcmMvbWFpbi9yb3V0ZXMvcm9vdFJvdXRlci50c3giLCIvVXNlcnMvZXZhbnNhbnRhL0Rlc2t0b3AvU2ltcGxlL2FwcGxpY2F0aW9uL3NlcnZlci9zcmMvbWFpbi9zZXJ2ZXIudHMiLCJleHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJleHRlcm5hbCBcImRvdGVudlwiIiwiZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJleHRlcm5hbCBcInBhdGhcIiIsImV4dGVybmFsIFwicmVhY3RcIiIsImV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwiZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsImV4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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MkQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlGLENBQUMsQ0FBQyxDQUFDO0FBRUgsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qi9CLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG5cbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICBIZWxsbyBXb3JsZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIHNlcmlhbGl6ZUphdmFzY3JpcHQgZnJvbSBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCI7XG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZShcIi4uLy4uLy4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uO1xuXG5pbnRlcmZhY2UgRG9jdW1lbnRQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBidW5kbGU6IHN0cmluZztcbiAgICBwYXRoPzogc3RyaW5nO1xuICAgIHByZWxvYWRlZFN0YXRlPzogYW55O1xuICAgIG1ldGE/OiBKU1guRWxlbWVudFtdIHwgSlNYLkVsZW1lbnQ7XG4gICAgY2Fub25pY2FsVXJsPzogc3RyaW5nO1xuICAgIGRvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RG9jdW1lbnRQcm9wcz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEb2N1bWVudFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVNYXJrdXAoZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgLy88IVtDREFUQVtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydBUFBfU1RBVEUnXSA9ICR7c2VyaWFsaXplSmF2YXNjcmlwdChkYXRhLCB7IGlzSlNPTjogdHJ1ZSB9KX07XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snVkVSU0lPTiddID0gJyR7dmVyc2lvbn0nO1xuICAgICAgICAgICAgICAgIC8vXV0+YFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBidW5kbGUsIHRpdGxlLCBtZXRhLCBjaGlsZHJlbiwgcHJlbG9hZGVkU3RhdGUsIGNhbm9uaWNhbFVybCwgZG9tYWluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvY29tbW9uL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgc2hyaW5rLXRvLWZpdD1ubywgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmVyc2lvblwiIGNvbnRlbnQ9e3ZlcnNpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvYXNzZXRzL3N0eWxlcy9hcHAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjYW5vbmljYWxVcmwgJiYgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsVXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImZvbGxvdywgYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJGaWxtemllXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZJTE1aSUUgLSBNZWV0IE5ldyBGaWxtcy5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRmlsbXppZSAtIE1lZXQgTmV3IEZpbG1zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiZmlsbXppZS5jb21cIiAvPlxuICAgICAgICAgICAgICAgICAgICB7bWV0YX1cbiAgICAgICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cHJlbG9hZGVkU3RhdGUgJiYgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5jcmVhdGVNYXJrdXAocHJlbG9hZGVkU3RhdGUpfSAvPn1cblxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi92ZW5kb3IuanNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz17YC8ke2J1bmRsZX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozNTczMi9saXZlcmVsb2FkLmpzYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L2h0bWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHJvb3RSb3V0ZXIgZnJvbSBcIi4vcm9vdFJvdXRlclwiO1xuXG5leHBvcnQge1xuICAgIHJvb3RSb3V0ZXJcbn07XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IERvY3VtZW50IGZyb20gXCIuLi9Eb2N1bWVudFwiO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9tYWluL3BhZ2VzL0FwcC9BcHBcIjtcblxuY29uc3Qgcm91dGVyOiBSb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnVzZShcIi9cIiwgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaHRtbDogc3RyaW5nID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgICAgIDxEb2N1bWVudCB0aXRsZT1cIlNpbXBsZVwiIGJ1bmRsZT1cImFwcC5qc1wiIHByZWxvYWRlZFN0YXRlPXt7fX0gIGRvbWFpbj17cmVxLmdldChcImhvc3RcIil9PlxuICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLm9yaWdpbmFsVXJsfSBjb250ZXh0PXt7IHVybDogcmVxLnVybCB9fT5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgPC9Eb2N1bWVudD5cbiAgICApO1xuXG4gICAgcmVzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcbiAgICByZXMuc2VuZChcIjwhZG9jdHlwZSBodG1sPlwiICsgaHRtbCk7XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJpbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyByb290Um91dGVyIH0gZnJvbSBcIi4vcm91dGVzL2luZGV4XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5wcm9jZXNzLmVudi5TRUNSRVQgPSBcInNlY3JldF9rZXlcIjtcbmNvbnNvbGUubG9nKFwiQVJHU1wiLCBjb25maWcpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0JztcbmNvbnN0IHBvcnQgPSBOdW1iZXIocHJvY2Vzcy5lbnYubnBtX2NvbmZpZ19wb3J0KSB8fCAzMDAwO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcIi4vcHVibGljXCIpKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi4vLi4vY2xpZW50XCIsIGBidWlsZC8ke3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcImRldlwiIDogXCJwcm9kXCJ9YCkpKTtcblxuYXBwLnVzZShcIi9cIiwgcm9vdFJvdXRlcik7XG5cbmFwcC5saXN0ZW4ocG9ydCwgJ2xvY2FsaG9zdCcsIChlcnIpID0+IHtcbiAgaWYgKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUuaW5mbygnPT0+IExpc3RlbmluZyBvbiBwb3J0ICVzLiBPcGVuIHVwICVzOiVzLyBpbiB5b3VyIGJyb3dzZXIuJywgcG9ydCwgaG9zdCwgcG9ydCk7XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqIEFwcGxpY2F0aW9uIGxvZ2ljICoqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9