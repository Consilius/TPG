const common = require('./webpack.common')
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
    ...common,
    mode: 'production',
    watch: false,
    output: {
        filename: `[name]-[hash].js`,
        path: `${process.cwd()}/dist/prod`
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
