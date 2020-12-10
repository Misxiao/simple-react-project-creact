const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/'

module.exports = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, 'index.js'), // 入口文件
    },
    output: {
        publicPath: publicPath,
        path: path.join(__dirname, 'dist'), // 打包输出路径
        filename: '[name].js',  // 打包文件名字
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        publicPath: publicPath,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: -10
                }
            }
        }
    }
}