/*
 * @Author: Peak Xin 
 * @Date: 2020-05-27 16:24:54 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-27 17:21:35
 */

'use strict';

var _xm = require('util/xm.js');
var _address = {
    //获取地址列表信息
    getAddressList: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/shipping/list'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject,
        });
    },
    //新建收件人收货信息
    save: function(addressInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //更新收件人收货信息
    update: function(addressInfo, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject,
        });
    },
    //删除收件人收货信息
    deleteAddress: function(shippingId, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject,
        });
    },
    // 获取要编辑的收货人收货信息
    getAddress: function(shippingId, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject,
        });
    }
};
module.exports = _address;