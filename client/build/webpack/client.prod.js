const common = require('./common')
const WebpackAssetsManifest = require('webpack-assets-manifest');

const devConfig = {
    ...common,
    mode: 'production',
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'source-map',
    output: {
        filename: `../build/prod/[name]-[hash].js`,
    },
}

devConfig.plugins.push(
    new WebpackAssetsManifest({
        output: "../../manifest.json"
    })
)

module.exports = devConfig
