const { resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

const paths = {
    pages: "src/main/pages",
    components: "src/main/components"
}

const pagesDir = resolve(paths.pages)
const getPageEntry = pageName => [
    resolve(pagesDir, `${pageName}/index.tsx`),
]

const common = {
    entry: {
        app: getPageEntry("App")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: [
                    resolve(__dirname, '../src/test'),
                ]
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /node_modules/,
                    chunks: 'all',
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CheckerPlugin()
    ]
}

module.exports = common
