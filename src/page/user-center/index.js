/*
 * @Author: Peak Xin
 * @Date: 2020-05-07 23:11:19 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-16 14:19:41
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _xm = require('util/xm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');
var token = _xm.getLocalStorage('token');

// page 逻辑部分
var page = {
    init: function () {
        this.onLoad();
    }
    , onLoad: function () {
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    }
    // 加载用户信息
    , loadUserInfo: function () {
        var userHtml = '';
        _user.getUserInfo(token, function (res) {
            userHtml = _xm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function (errMsg) {
            _xm.errorTips(errMsg);
        });
    }
};
$(function () {
    page.init();
});