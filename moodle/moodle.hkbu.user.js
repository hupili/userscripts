// ==UserScript==
// @name         Moodle Batch download
// @namespace    http://hupili.net/
// @version      0.1
// @description  Batch download resources from Moodle. You may want to add other Moodle domains.
// @author       Pili Hu
// @match        https://buelearning.hkbu.edu.hk/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function downloadAll(){
        $('div.activityinstance a').map(function(index, element){
            var me = $(this);
            var imgSrc = me.find('img').attr('src');
            //console.log(imgSrc)
            var fileTypes = [
                'pdf',
                'text',
                'spreadsheet',
                'powerpoint',
                'archive'
            ];
            for (var i in fileTypes){
                var ft = fileTypes[i];
                var re = new RegExp('.*' + ft);
                //console.log(re);
                if (re.test(imgSrc)){
                    // console.log(imgSrc);
                    me.attr('download', me.text() + '.' + ft);
                    setTimeout(function(){
                        console.log('Download: ' + me.attr('href'));
                        // Actually, the downloaded name does not follow this attribute.
                        // It seems to use the 'Content-Disposition' from HTTP response header.
                        console.log('To file: ' + me.attr('download'));
                        //console.log(me.trigger('cli'));
                        me.get(0).click();
                    }, index * 200)
                }
            }
        })
    }

    $('ul.nav.navbar-nav.ml-auto').prepend(
        $('<a>').text('DownloadAll').attr('id', 'download-all')
    );

    $('#download-all').click(downloadAll);
})();

