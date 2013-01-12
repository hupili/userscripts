// ==UserScript==
// @name           no_renren_at_working_time
// @namespace      http://hupili.github.com/
// @description    update an embarassing status on renren if it is working time!!!
// @include        http://guide.renren.com/guide
// ==/UserScript==

/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//name="content". 

//c = document.getElementsByName("content")
//alert(c[0].innerText)
//c[0].innerText = "sss"

//status-global-publisher
//alert(document.forms[0].action)

// http://shell.renren.com/505575862/status

function post_status(form, text){
    var myform = document.createElement('form');
    var content = document.createElement("input");
    content.name = 'content';
    content.value = text; 
    var channel = document.createElement("input");
    channel.name = 'channel';
    channel.value = 'renren';
    myform.appendChild(content);
    myform.appendChild(channel);
    myform.appendChild(form['requestToken']);
    myform.appendChild(form['_rtk']);
    myform.action = form.action;
    myform.method = 'post'; 
    // The line below seems essential, 
    // I realized it here: http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
    // That link contains a more genearl solution. 
    document.body.appendChild(myform); 
    myform.submit();
    //alert(form.innerHTML)
    //alert(myform['content'].value)
    //alert(myform.action)
}

msg = 'test update status from scratchpad again ... '

var patt=new RegExp('http://shell.renren.com/[0-9]*/status');
//var patt=new RegExp('.*');
for (var i=0, len=document.forms.length; i < len; i++)
{
    var f = document.forms[i];
    if (patt.test(f.action)){
        //alert(f.action)
        //alert(f)
        f.elements["content"].value = msg; 
        var channel = document.createElement("input");
        channel.name = 'channel';
        channel.value = 'renren';
        f.appendChild(channel);
        f.submit()
        //post_status(f, 'test update status from scratchpad');
    }
}




/*
Exception: myform is not defined
@Scratchpad:59
*/

