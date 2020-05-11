/*
 * @Author: Peak Xin 
 * @Date: 2020-03-12 21:14:00 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-11 22:18:06
 */

'use strict'
require('./index.css');
var _xm = require('util/xm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
var token = _xm.getLocalStorage('token');
// 导航
var nav = {
    init: function () {
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    }
    , bindEvent: function () {
        // 登录点击事件
        $('.js-login').click(function () {
            _xm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function () {
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function () {
            _user.logout(function (res) {
                window.location.reload();
            }, function (errMsg) {
                _xm.errorTips(errMsg);
            });
        });
    }
    // 加载用户信息
    , loadUserInfo: function () {
        if (token) {
            _user.checkLogin(token, function (res) {
                $('.user.not-login').hide().siblings('.user.login').show()
                    .find('.username').text(res.name);
            }, function (errMsg) {
                // do nothing
                _xm.errorTips(errMsg);
                _xm.doLogin();
            });
        }
    }
    // 加载购物车数量
    , loadCartCount: function () {
        if (token) {
            _cart.getCartCount(token, function (res) {
                $('.nav .cart-count').text(res || 0);
            }, function (errMsg) {
                $('.nav .cart-count').text(0);
            });
        }
    }
};

module.exports = nav.init();