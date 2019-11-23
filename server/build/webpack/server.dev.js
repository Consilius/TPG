const LiveReloadPlugin = require("webpack-livereload-plugin");
const common = require("./common");
const resolve = require('path').resolve;

const devConfig = {
    ...common,
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: "inline-source-map",
    output: {
        path: resolve(__dirname, "../dev"),
        filename: "server.js",
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        libraryTarget: "commonjs" // makes Webpack use commonjs for unbundled libs
    },
};

devConfig.plugins.push(
    new LiveReloadPlugin({ port: 35732 })
);

module.exports = devConfig;
