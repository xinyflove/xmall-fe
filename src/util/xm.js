/*
 * @Author: Peak Xin 
 * @Date: 2020-03-08 16:14:59 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-08 18:07:57
 */

 'use strict';

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
    // 统一登录处理
    , doLogin: function () {
        window.location.href = '.login.html?redirect=' + encodeURIComponent(window.location.href);
    }
 };

 module.exports = _xm;