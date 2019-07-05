// ==UserScript==
// @name         wcmp-webp-to-jpeg
// @namespace    https://hupili.net/
// @version      0.1
// @description  Change Wechat Media Platform article's webp image into jpeg
// @author       Pili Hu
// @match        https://mp.weixin.qq.com/*
// @match        http://mp.weixin.qq.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        console.log('test');
        console.log($('img'));
        $('img.img_loading').map(function(){
            var e = $(this);
            console.log(e.attr('data-src'));
            console.log(e.attr('src'));
            e.attr('src', e.attr('data-src'));
        });
    }, 1000);
})();
