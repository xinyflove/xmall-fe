/*
 * @Author: Peak Xin 
 * @Date: 2020-05-29 12:25:44 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-29 12:49:13
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _xm = require('util/xm.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');

//page逻辑部分
var page = {
    data: {
        orderNo: _xm.getUrlParam('orderNo')
    },
    init: function() {
        this.onLoad();
    },
    onLoad: function() {
        this.loadPaymentInfo();
    },
    //加载订单详情
    loadPaymentInfo: function() {
        var _this = this,
            orderListHtml = '',
            $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNo, function(res) {
            // 渲染html 
            var paymentInfoHtml = _xm.renderHtml(templateIndex, res);
            $pageWrap.html(paymentInfoHtml);
            _this.listenOrderStatus();
        }, function(errMsg) {
            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    //监听订单状态
    listenOrderStatus: function() {
        var _this = this;
        this.paymentTimer = window.setInterval(function() {
            _payment.getPaymentStatus(_this.data.orderNo, function(res) {
                if (res === true) {
                    window.location.href = './result.html?type=payment&orderNo=' + _this.data.orderNo;
                }
            }, function(errMsg) {

            });
        }, 5e3);
    }
};
$(function() {
    page.init();
});