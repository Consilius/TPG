const common = require('./common')
const CopyPlugin = require('copy-webpack-plugin');

const devConfig = {
    ...common,
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'source-map',
    output: {
        filename: `../build/dev/[name].js`,
    },
}

devConfig.plugins.push(
    new CopyPlugin([
        { from: '../assets', to: '../build/dev' },
    ])
)

module.exports = devConfig
