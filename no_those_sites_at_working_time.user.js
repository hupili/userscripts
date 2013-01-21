// ==UserScript==
// @name           no_those_sites_at_working_time
// @namespace      http://hupili.github.com/
// @description    redirect blocked sites during working time
// @include        http://*.renren.com
// @include        http://*.weibo.com
// @version        1.0
// @grant          none
// ==/UserScript==

var REDIR_URL = 'http://hupili.github.com/pages/stop-time-leecher.html';

// Edit your logic for working time here
function is_working_time(){
	var currentTime = new Date();
	var hour = currentTime.getHours();
	var minute = currentTime.getMinutes();
	if ((hour >= 8 && hour < 12)
			|| (hour >= 14 && hour < 18)
			|| (hour >= 19 && hour < 21))
	{
		return true
	} else {
		return false
	}
}

function punish(){
	window.location.href = REDIR_URL;
}

if (is_working_time()){
	punish(); 
}
