/*
 * @Author: Peak Xin 
 * @Date: 2020-05-17 23:18:15 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-22 23:33:06
 */

'use strict';

var _xm = require('util/xm.js');

var _product = {
    // 获取商品列表
    getProductList: function (listParam, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/product/list'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详细信息
    getProductDetail: function (productId, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/product/detail'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    }
}
module.exports = _product;