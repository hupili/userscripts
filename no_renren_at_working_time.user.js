// ==UserScript==
// @name           no_renren_at_working_time
// @namespace      http://hupili.github.com/
// @description    update an embarassing status on renren if it is working time!!!
// @include        http://guide.renren.com/guide
// @grant          none
// ==/UserScript==

// It is the URL of the current repository. By default, we don't use it. 
// However, you are encouraged to embed it in your message string. Thus 
// other curious people can find it and current users can trace updates.
var URL_REPO = 'http://rrurl.cn/knQmag'

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

// Edit the punish you want. We have several sample punish functions 
// below. Comment/Uncomment as you wish.

// ======== Sample 1 =========
// We recommend you to use this one. Being embarrassed in front of your 
// friends is a good idea. You'll remember it longer. 
// ===========================
//
//function punish(){
//	// Must wait all elements of the form is ready. 
//	// More precisely, the two hidden fields, 
//	// 'requestToken' and '_rtk'. 
//	setTimeout(function(){
//	var msg = '我次奥，工作时间又上人人了。。。(防手贱利器 '
//		+ URL_REPO + ' )'; 
//	update_status(msg) ;}, 
//	5000
//	)
//}

// ======== Sample 2 (default) =========
// Just an alert for yourself. This punishment is too weak... 
// =====================================
//
function punish(){
	alert("It's working time. Keep away from this site!!!"); 
}

function update_status(msg){
	var patt=new RegExp('http://shell.renren.com/[0-9]*/status');
	for (var i=0, len=document.forms.length; i < len; i++)
	{
		var f = document.forms[i];
		if (patt.test(f.action)){
			f.elements["content"].value = msg; 
			var channel = document.createElement("input");
			channel.type = 'hidden'; 
			channel.name = 'channel';
			channel.value = 'renren';
			f.appendChild(channel);
			f.submit();
			//alert(f.innerHTML); 
		}
	}
}

//alert('you are visiting renren');

if (is_working_time()){
	punish(); 
}

// It is here for my future reference. 
//function post_status(form, text){
//    var myform = document.createElement('form');
//    var content = document.createElement("input");
//    content.name = 'content';
//    content.value = text; 
//    var channel = document.createElement("input");
//    channel.name = 'channel';
//    channel.value = 'renren';
//    myform.appendChild(content);
//    myform.appendChild(channel);
//    myform.appendChild(form['requestToken']);
//    myform.appendChild(form['_rtk']);
//    myform.action = form.action;
//    myform.method = 'post'; 
//    // The line below seems essential, 
//    // I realized it here: http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
//    // That link contains a more genearl solution. 
//    document.body.appendChild(myform); 
//    myform.submit();
//    //alert(form.innerHTML)
//    //alert(myform['content'].value)
//    //alert(myform.action)
//}
