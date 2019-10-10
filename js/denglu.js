$(function() {
	// 得到登录按钮
	$login = $("#login");
	
	let token = $.cookie("token");
	
	if($.cookie("token") != undefined){
		// 免登录，只需传token值
		$.post("http://47.240.68.134:8889/backinghelper/user/login.do",{
				"token":token
			},function(data) {
				console.log(data,token);
				if(data.code == "1"){
					// 登录成功，把获取的token值放到cookie中
					/*$.cookie("token",data.info,{
						path:"/",
						expires:7
					});*/
					alert("登录成功");
					// 跳转到首页页面
					location.href = "../index.html";
				}
				
			});
		
	}
	
	// 给登录按钮注册点击事件
	$login.click(function() {
		if($.cookie("token") == undefined){
			
			// cookie中没有token值，手机号密码验证
			$.post("http://47.240.68.134:8889/backinghelper/user/login.do",{
					"password":$("#password").val(),
					"phone":$("#tel").val()
				},function(data) {
					console.log(data);
					
					if(data.code == "1"){
						// 登录成功，把获取的token值放到cookie中
						$.cookie("token",data.info,{
							path:"/",
							expires:7
						});
						alert("登录成功");
						// 跳转到首页页面
						location.href = "../index.html";
					}else{
						alert("登录失败");
					}
				});
			
		}
		
	});

});