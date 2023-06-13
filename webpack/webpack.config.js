const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.js"),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",

                    }
                ]
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html')
        })
    ]
}