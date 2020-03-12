/*
 * @Author: Peak Xin 
 * @Date: 2020-03-12 21:44:32 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-12 22:01:26
 */

'use strict';

var _xm = require('util/xm.js');

var _user = {
    // 用户登录
    login: function (userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 检查用户名
    , checkUsername: function (username, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 用户注册
    , register: function (userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/register.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 检查登录状态
    , checkLogin: function (resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 获取用户密码提示问题
    , getQuestion:function (username, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/forget_get_question.do'),
            data: {
                username: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 检查密码提示问题答案
    , checkAnswer: function (userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/forget_check_answer.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 重置密码
    , resetPassword: function (userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/forget_reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 获取用户信息
    , getUserInfo: function (resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 更新个人信息
    , updateUserInfo: function (userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 登录状态下更新密码
    , updatePassword: function(userInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
    // 登出
    , logout: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
}
module.exports = _user;