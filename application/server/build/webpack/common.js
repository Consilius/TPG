const { resolve } = require("path");
const { existsSync, mkdirSync } = require("fs");
const nodeExternals = require("webpack-node-externals");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");

const common = {
    entry: [
        "./src/main/server.ts"
    ],
    target: "node",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
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
    externals: [nodeExternals()], //makes Webpack not bundle anything in node_modules ???
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
