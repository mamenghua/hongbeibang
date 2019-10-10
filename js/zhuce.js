$(function() {
	// 得到localStorage的电话号码
	let tel = localStorage.getItem("tel");
	if(tel!=null){
		$(".tel").text(tel);
	}
	//设置倒计时
	$('.duanxin').find('span').find('i').text("60");
	var i = 59;
	var timer = setInterval(function() {
		$('.duanxin').find('span').find('i').text(i);
		i--;
		if(i == -1) {
			clearInterval(timer);
			$('.duanxin').find('span').text("请重新获取验证码");

		}
	}, 1000);
	//验证密码格式
	$('#password').change(function() {
		var em = /[a-zA-Z0-9_-]{6,}$/;
		if(!em.test($('#password').val())) {
			$('.mima').find('span').text("格式错误！");
			return false;
		} else {
			$('.mima').find('span').text("格式正确！");
			console.log($('.wancheng'));
			$('.wancheng').click(function() {
				// 得到验证码
				let code = $("#code").val();
				// 得到密码
				let password = $("#password").val();
				console.log(code,password);
				$.ajax({
					type:"post",
					url:"http://47.240.68.134:8889/backinghelper/user/verifyCode.do",
					data:{
						"code":code,
						"password":password
					},
					success:function(data){
						if(data.code=="1"){
							// 验证成功，把获取的token值放到cookie中
							$.cookie("token",data.info,{
								path:"/",
								expires:7
							});
							// 跳转到登录页面
							document.location.href = "denglu.html";
						}
					},
					error:function(data){
						alert("验证码有误，注册失败");
					}
				});
				
			})

		}
	});

})

//   /^\w{6}$/