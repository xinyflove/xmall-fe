/*
 * @Author: Peak Xin 
 * @Date: 2020-03-08 16:14:59 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-10 22:21:54
 */

'use strict';
var Hogan = require('hogan.js');

var conf = {
    serverHost: ''
};
var _xm = {
    // 网络请求
    request: function (param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                if (0 === res.status) {// 请求成功
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                else if (10 === res.status) {// 没有登录状态，需要强制登录
                    _this.doLogin();
                }
                else if (1 === res.status) {// 请求数据错误
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    }
    // 获取服务器地址
    , getServerUrl: function (path) {
        return conf.serverHost + path;
    }
    // 获取url参数
    , getUrlParam: function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    // 渲染html模版
    , renderHtml: function (htmlTemplate, data) {
        var template = Hogan.compile(htmlTemplate),
            result = template.render(data);
        return result;
    }
    // 成功提示
    , successTips: function (msg) {
        alert(msg || '操作成功！');
    }
    // 错误提示
    , errorTips: function (msg) {
        alert(msg || '哎哟，错误咯~');
    }
    // 字段的验证，支持是非空、手机、邮箱的判断
    , validate: function (value, type) {
        var value = $.trim(value);// 转成字符串
        // 非空验证
        if ('require' === type) {
            return !!value;
        }
        // 手机号验证
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    }
    // 统一登录处理
    , doLogin: function () {
        window.
        location.href = '.login.html?redirect=' + encodeURIComponent(window.location.href);
    }
    // 跳转到首页
    , goHome : function() {
        window.location.href = './index.html';
    }
};

module.exports = _xm;