// ==UserScript==
// @name         wcmp-webp-to-jpeg
// @namespace    https://hupili.net/
// @version      0.1
// @description  Change Wechat Media Platform article's webp image into jpeg
// @author       Pili Hu
// @match        https://mp.weixin.qq.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $('p img.img_loading').map(function(){
        var e = $(this);
        e.attr('src', e.attr('data-src'));
    });
})();


