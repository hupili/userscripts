// ==UserScript==
// @name           no_renren_at_working_time
// @namespace      http://hupili.github.com/
// @description    update an embarassing status on renren if it is working time!!!
// @include        http://guide.renren.com/guide
// ==/UserScript==

function update_status(msg){
	var patt=new RegExp('http://shell.renren.com/[0-9]*/status');
	for (var i=0, len=document.forms.length; i < len; i++)
	{
		var f = document.forms[i];
		if (patt.test(f.action)){
			f.elements["content"].value = msg; 
			var channel = document.createElement("input");
			channel.name = 'channel';
			channel.value = 'renren';
			f.appendChild(channel);
			f.submit();
		}
	}
}

var msg = 'trigger a status update once visiting the guide page';
update_status(msg) ;

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
