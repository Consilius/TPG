const common = require('./webpack.common')
const CopyPlugin = require('copy-webpack-plugin');

const devConfig = {
    ...common,
    mode: 'development',
    watch: true,
    output: {
        filename: "dev/[name].js"
    },
}

devConfig.plugins.push(
    new CopyPlugin([
        { from: '../assets', to: 'dev' },
    ])
)

module.exports = devConfig
