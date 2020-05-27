/*
 * @Author: Peak Xin 
 * @Date: 2020-05-27 16:26:00 
 * @Last Modified by:   Peak Xin 
 * @Last Modified time: 2020-05-27 16:26:00 
 */

'use strict';

var _xm = require('util/xm.js');
var _payment = {
    //获取支付信息
    getPaymentInfo: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取订单状态
    getPaymentStatus: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _payment;