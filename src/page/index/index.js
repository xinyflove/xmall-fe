/*
 * @Author: Peak Xin 
 * @Date: 2020-03-07 21:16:24 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-17 22:47:28
 */

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner = require('./banner.string');
var _xm = require('util/xm.js');

$(function () {
    // 渲染banner的html
    var bannerHtml = _xm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function () {
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
