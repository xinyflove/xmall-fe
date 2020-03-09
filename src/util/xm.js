/*
 * @Author: Peak Xin 
 * @Date: 2020-03-08 16:14:59 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-09 22:09:31
 */

'use strict';

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
    // 统一登录处理
    , doLogin: function () {
        window.location.href = '.login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};

module.exports = _xm;