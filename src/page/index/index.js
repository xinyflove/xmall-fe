/*
 * @Author: Peak Xin 
 * @Date: 2020-03-07 21:16:24 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-10 22:11:17
 */

'use strict';
var _xm = require('util/xm.js');

var html = '<div>{{data}}</div>';
var data = {
    data: 'hello'
}
console.log(_xm.renderHtml(html, data));

//console.log(_xm.getUrlParam('test'));

/*
_xm.request({
    url: '/product/list.do?keyword=1',
    succsee: function (res) {
        console.log(res);
    },
    error: function (errMsg) {
        console.log(errMsg);
    }
});
*/