const nodeExternals = require("webpack-node-externals");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");

const common = {
    entry: [
        "./src/server.tsx"
    ],
    mode: "development",
    watch: true,
    target: "node",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
      filename: "server.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.NamedModulesPlugin(),
        new CheckerPlugin()
    ],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true
    }
};

module.exports = common;
