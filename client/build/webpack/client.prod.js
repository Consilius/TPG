const common = require('./common')
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log(`${process.cwd()}/build/prod`)
const prodConfig = {
    ...common,
    mode: 'production',
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'source-map',
    output: {
        filename: `[name]-[hash].js`,
        path: `${process.cwd()}/build/prod`
    },
}

prodConfig.plugins.push(
    new WebpackAssetsManifest({
        output: "../../../manifest.json"
    }),
    new CopyPlugin([
        { from: '../assets', to: './' },
    ]),
    new CleanWebpackPlugin()
)

module.exports = prodConfig
