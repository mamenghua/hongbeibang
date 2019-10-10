// 之前未登陆,跳转到first.html页面
if($.cookie("token") == undefined) {
	alert("用户未登录，请登录!");
	location.href = "../html/first.html";
}