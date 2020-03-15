/*
 * @Author: Peak Xin 
 * @Date: 2020-03-15 20:27:14 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-15 22:50:46
 */
'use strict'
require('./index.css');
require('page/common/nav-simple/index.js');
var _xm = require('util/xm.js');

$(function () {
    var type = _xm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
});