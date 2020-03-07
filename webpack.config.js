/*
 * @Author: Peak Xin 
 * @Date: 2020-03-07 21:11:27 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-07 22:26:48
 */
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],// 通用模块js
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals: {// 引入外部模块
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    plugins: [
        // 处理js的通用模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin('css/[name].css')
    ]
};

module.exports = config;