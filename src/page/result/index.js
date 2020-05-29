/*
 * @Author: Peak Xin 
 * @Date: 2020-03-15 20:27:14 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-29 15:23:08
 */
'use strict'
require('./index.css');
require('page/common/nav-simple/index.js');
var _xm = require('util/xm.js');
var templateIndex = require('./index.string');

$(function() {
    // 渲染html
    var params = _xm.getUrlParamAll();
    var resultInfoHtml = _xm.renderHtml(templateIndex, params);
    $('.page-wrap').html(resultInfoHtml);

    var type = _xm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
});