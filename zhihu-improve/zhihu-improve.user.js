// ==UserScript==
// @name         zhihu-improve
// @namespace    https://hupili.net/
// @version      0.1
// @description  Improve Zhihu presentation!
// @author       Pili Hu
// @match        https://www.zhihu.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-dateFormat/1.0/jquery.dateFormat.min.js
// ==/UserScript==

(function() {
    'use strict';

    function formatDate(inputDate){
        return $.format.date(inputDate, "yyyy-MM-dd, hh:mm:ss a");
    }

    var question = $('.QuestionPage');
    var dateModified = question.find('meta[itemprop="dateModified"]').attr('content');
    var dateCreated = question.find('meta[itemprop="dateCreated"]').attr('content');
    var h1 = question.find('h1');
    h1.after($('<p>').text(`Modified: ${formatDate(dateModified)}`));
    h1.after($('<p>').text(`Created: ${formatDate(dateCreated)}`));

    // optimise answers
    $('.List-item').map(function(){
        var answewr = $(this);
        console.log(answewr);
        var dateModified = answewr.find('meta[itemprop="dateModified"]').attr('content');
        var dateCreated = answewr.find('meta[itemprop="dateCreated"]').attr('content');
        answewr.prepend($('<p>').text(`Modified: ${formatDate(dateModified)}`));
        answewr.prepend($('<p>').text(`Created: ${formatDate(dateCreated)}`));
    })

})();
