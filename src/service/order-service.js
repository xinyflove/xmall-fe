/*
 * @Author: Peak Xin 
 * @Date: 2020-05-27 16:23:19 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-28 16:04:19
 */

'use strict';

var _xm = require('util/xm.js');
var _token = _xm.getLocalStorage('token');

var _order = {
    //获取产品列表信息
    getProductList: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/order/get_cart_product'),
            data: { token: _token },
            success: resolve,
            error: reject,
        });
    },
    // 提交订单
    createOrder: function(orderInfo, resolve, reject) {
        orderInfo.token = _token;
        _xm.request({
            method: 'POST',
            url: _xm.getServerUrl('/v1/order/create'),
            data: orderInfo,
            success: resolve,
            error: reject,
        });
    },
    //获取订单列表
    getOrderList: function(listParam, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject,
        });
    },
    //获取订单详情
    getOrderDetail: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    },
    cancelOrder: function(orderNo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNo
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _order;