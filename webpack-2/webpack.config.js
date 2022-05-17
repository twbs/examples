const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/js/main.js',
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "./dist"),
        // publicPath: '/dist/'
    },
    devServer: {
        static: path.resolve(__dirname),
        port: 8080,
        hot: true
    },

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // plugins: ["dynamic-import-webpack","@babel/plugin-syntax-dynamic-import"],
                        presets: [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    // Define used plugins
    plugins: [
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin({
            verbose: true,
            dry: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
        }),
    ],
}
