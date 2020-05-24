/*
 * @Author: Peak Xin 
 * @Date: 2020-03-12 22:00:14 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-24 22:00:56
 */

'use strict';

var _xm = require('util/xm.js');
var _token = _xm.getLocalStorage('token');

var _cart = {
    // 获取购物车数量
    getCartCount: function(token, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/product_count'),
            data: { token },
            success: resolve,
            error: reject
        });
    },
    // 添加到购物车
    addToCart: function(productInfo, resolve, reject) {
        productInfo.token = _token;
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/add'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取购物车列表
    getCartList: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/list'),
            data: { token: _token },
            success: resolve,
            error: reject
        });
    },
    // 选择购物车商品  
    selectProduct: function(productId, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/select'),
            data: {
                productId: productId,
                token: _token
            },
            success: resolve,
            error: reject
        });
    },
    // 取消选择购物车商品
    unselectProduct: function(productId, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/un_select'),
            data: {
                productId: productId,
                token: _token
            },
            success: resolve,
            error: reject
        });
    },
    // 选中全部商品
    selectAllProduct: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/select_all'),
            data: { token: _token },
            success: resolve,
            error: reject
        });
    },
    // 取消选中全部商品
    unselectAllProduct: function(resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/un_select_all'),
            data: { token: _token },
            success: resolve,
            error: reject
        });
    },
    // 更新购物车商品数量
    updateProduct: function(productInfo, resolve, reject) {
        productInfo.token = _token;
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/update'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    // 删除指定商品
    deleteProduct: function(productIds, resolve, reject) {
        _xm.request({
            url: _xm.getServerUrl('/v1/cart/delete_product'),
            data: {
                productIds: productIds,
                token: _token
            },
            success: resolve,
            error: reject
        });
    },
}
module.exports = _cart;