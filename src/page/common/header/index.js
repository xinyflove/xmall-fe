/*
 * @Author: Peak Xin 
 * @Date: 2020-03-12 21:41:28 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-15 17:37:09
 */

'use strict'
require('./index.css');

var _xm = require('util/xm.js');
// 通用页面头部
var header = {
    init: function () {
        this.bindEvent();
    }
    , onLoad: function () {
        var keyword = _xm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if (keyword) {
            $('#search-input').val(keyword);
        }
    }
    , bindEvent: function () {
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        // 输入回车后，做搜索提交
        $('#search-input').keyup(function (e) {
            // 13是回车键的keyCode
            if (e.keyCode === 13) {
                _this.searchSubmit();
            }
        });
    }
    // 搜索的提交
    , searchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        
        if (keyword) {// 如果提交的时候有keyword，正常跳转到list页
            window.location.href = './list.html?keyword=' + keyword;
        } else {// 如果keyword为空，直接返回首页
            _xm.goHome();
        }
    }
};

header.init();