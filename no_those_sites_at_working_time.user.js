// ==UserScript==
// @name           no_those_sites_at_working_time
// @namespace      http://hupili.github.com/
// @description    redirect blocked sites during working time
// @include        *
// @version        1.1
// @grant          none
// ==/UserScript==

var REDIR_URL = 'http://hupili.github.com/pages/stop-time-leecher.html';

// This is JS's RegEx. 
// If you do not mind they matched more sites, the following 
// simpple solution suffices. Or, you can learn JS's RegEx 
// first and write in more rigorous form, e.g. 
//     ^http://www\.renren\.com
var BLOCK_LIST = [
	"www.weibo.com",
	"www.renren.com"
];

function is_blocked()
{
	for (var i=0, len=BLOCK_LIST.length; i < len; i++) 
	{
		var patt = new RegExp(BLOCK_LIST[i]);
		if (patt.test(location.href)) {
			return true
		}
	}
	return false
}

// Edit your logic for working time here
function is_working_time()
{
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

function punish()
{
	location.href = REDIR_URL;
}

if (is_blocked() && is_working_time())
{
	punish(); 
}
