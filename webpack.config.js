const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /.[js,jsx]$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
};
