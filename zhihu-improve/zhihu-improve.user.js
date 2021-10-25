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
    const year = new Date().getFullYear()
    function formatDate(inputDate){
      const str = $.format.date(inputDate, "yyyy-MM-dd HH:mm");
      if (str.includes(year.toString())) {
        return str.slice(5)
      }
      return str
    }

   // optimise answers
    $('.Card.TopstoryItem').map(function(){
        var answewr = $(this);

        var dateModified = answewr.find('meta[itemprop="dateModified"]').attr('content');
        var dateCreated = answewr.find('meta[itemprop="dateCreated"]').attr('content');
        if (!dateModified && !dateCreated) return

        const createStr = dateCreated ? ` ${formatDate(dateCreated)}` : ''
        const modifyStr = dateModified === dateCreated ? '' : `编辑于 ${formatDate(dateModified)}`
        answewr.append($('<p style="color: #8590a6;margin-top: 5px;margin-bottom: -10px">').text(`${createStr} ${modifyStr}`));
    })

    var question = $('.QuestionPage');
    if (!question) return
    var dateModified = question.find('meta[itemprop="dateModified"]').attr('content');
    var dateCreated = question.find('meta[itemprop="dateCreated"]').attr('content');
    if (!dateModified && !dateCreated) return
    var h1 = question.find('h1');
    const createStr = dateCreated ? ` ${formatDate(dateCreated)}` : ''
    const modifyStr = dateModified === dateCreated ? '' : `编辑于 ${formatDate(dateModified)}`

    h1.after($('<p style="color: #8590a6;margin-top: 5px;">').text(`${createStr} ${modifyStr}`));

})();
