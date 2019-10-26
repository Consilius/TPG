const common = require('./common')

const devConfig = {
    ...common,
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        // poll: true,
    },
    devtool: 'source-map',
    output: {
        filename: `../build/dev/[name].js`,
    },
}

module.exports = devConfig
