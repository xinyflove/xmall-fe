/*
 * @Author: Peak Xin 
 * @Date: 2020-03-07 21:16:24 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-03-09 22:10:57
 */

'use strict';
var _xm = require('util/xm.js');

console.log(_xm.getUrlParam('test'));

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