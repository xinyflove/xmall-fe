/*
 * @Author: Peak Xin 
 * @Date: 2020-03-07 21:11:27 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-29 23:08:04
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, title) {
        return {
            template: './src/view/' + name + '.html',
            filename: 'view/' + name + '.html',
            title: title,
            inject: true,
            hash: true,
            chunks: ['common', name]
        };
    }
    // webpack config
var config = {
    entry: {
        'common': ['./src/page/common/index.js'], // 通用模块js
        'index': ['./src/page/index/index.js'], // 首页
        'list': ['./src/page/list/index.js'], // 商品列表页
        'detail': ['./src/page/detail/index.js'], // 商品详情页
        'cart': ['./src/page/cart/index.js'], // 购物车
        'order-confirm': ['./src/page/order-confirm/index.js'], // 订单确认
        'order-detail': ['./src/page/order-detail/index.js'], // 订单详情
        'order-list': ['./src/page/order-list/index.js'], // 订单列表
        'payment': ['./src/page/payment/index.js'], // 订单支付
        'user-login': ['./src/page/user-login/index.js'], // 用户登录
        'user-register': ['./src/page/user-register/index.js'], // 用户注册
        'user-pass-reset': ['./src/page/user-pass-reset/index.js'], // 找回密码
        'user-center': ['./src/page/user-center/index.js'], // 个人中心
        'user-center-update': ['./src/page/user-center-update/index.js'], // 修改个人信息
        'user-pass-update': ['./src/page/user-pass-update/index.js'], // 修改密码
        'result': ['./src/page/result/index.js'], // 操作结果
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    externals: { // 引入外部模块
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        alias: {
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
        }
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin('css/[name].css'),
        // html模版的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
        new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
        new HtmlWebpackPlugin(getHtmlConfig('order-confirm', '订单确认')),
        new HtmlWebpackPlugin(getHtmlConfig('order-detail', '订单详情')),
        new HtmlWebpackPlugin(getHtmlConfig('order-list', '订单列表')),
        new HtmlWebpackPlugin(getHtmlConfig('payment', '订单支付')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
    ]
};

if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;