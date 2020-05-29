/*
 * @Author: Peak Xin 
 * @Date: 2020-05-29 14:22:41 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-29 22:10:12
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _xm = require('util/xm.js');
var _order = require('service/order-service.js');
var navSide = require('page/common/nav-side/index.js');
var templateIndex = require('./index.string');

//page逻辑部分
var page = {
    data: {
        orderNo: _xm.getUrlParam('orderNo')
    },
    init: function() {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function() {
        //初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        this.loadOrderDetail();
    },
    bindEvent: function() {
        var _this = this;
        $(document).on('click', '.order-cancel', function() {
            if (window.confirm('确认要取消该订单吗？')) {
                _order.cancelOrder(_this.data.orderNo, function(res) {
                    _xm.successTips('该订单取消成功');
                    _this.loadOrderDetail();
                }, function(errMsg) {
                    _xm.errorTips(errMsg);
                });
            }
        });
    },
    //加载订单详情
    loadOrderDetail: function() {
        var _this = this,
            orderListHtml = '',
            $content = $('.content');
        $content.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNo, function(res) {
            _this.dataFilter(res);
            // 渲染html 
            var orderDetailHtml = _xm.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
        }, function(errMsg) {
            $content.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 数据的适配
    dataFilter: function(data) {
        data.needPay = data.status == 10;
        data.isCancelable = data.status == 10;
    }
};
$(function() {
    page.init();
});