const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        clientLogLevel: 'warning',
        quiet: true,
        port: 3000
    }
}