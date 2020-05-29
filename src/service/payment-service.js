/*
 * @Author: Peak Xin 
 * @Date: 2020-05-27 16:26:00 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-29 12:59:09
 */

'use strict';

var _xm = require('util/xm.js');
var _token = _xm.getLocalStorage('token');

var _payment = {
    //获取支付信息
    getPaymentInfo: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/order/pay'),
            data: {
                orderNo: orderNo,
                token: _token
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取订单状态
    getPaymentStatus: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/order/query_pay_status'),
            data: {
                orderNo: orderNo,
                token: _token
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _payment;