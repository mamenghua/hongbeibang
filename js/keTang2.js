$(function() {
	
	// 从地址栏获取视频id值，保存到videoId中
	let videoId = window.location.search.split("=")[1];
	
	var section = document.querySelectorAll(".top")[0];
	var str = "";
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/findOneVideoMessageById.do?videoId="+videoId,
		success: function(data) {
			if(data.code == "1"){
					
				console.log(data);
				str += `
								<video controls="controls" autoplay="autoplay" controls poster="${data.info.imgHref}"  >
								<source src="${data.info.videoHref}" type="video/ogg" />
									your browser does not support the video tag
								</video>
								<h5>${data.info.content}</h5>
								<p>
									<span class="iconfont icon-wode"></span>
									<i>${data.info.cookNum}</i>
									<strong>人在学</strong>
									<a href="#"><span class="iconfont icon-icon-1"></span></a>
								</p>
								`;
				section.innerHTML = str;
				
		
			}
		}
	})
	
	// 收藏按钮点击事件
	$("#favorBtn").on("click",function(){
		$.post("http://47.240.68.134:8889/backinghelper/user/addCollectVideo.do",{
				"token":$.cookie("token"),
				"videoId":videoId
			},function(data){
				if(data.code == "1"){
					alert("收藏成功!");
				}else{
					alert("收藏失败!");
				}
				console.log(data);
			});
	});
	
	var zuopin = document.querySelectorAll(".lists")[0];
	var str1 = "";
	$.ajax({
		type: "get",
		url: "https://www.fastmock.site/mock/ed88bdd26c3e496c2fb458dc4eb2a2ed/api/zuopin",
		success: function(data) {
			//console.log(data);
			for(var i in data.zuopin) {

				str1 += `
							<dl>
								<dt><img src="${data.zuopin[i].tupian}" alt=""></dt>
								<dd>
									<span class="touxiang"><img src="${data.zuopin[i].touxiang}"></span>
									<i>${data.zuopin[i].con}</i>
								</dd>
							</dl>
							`;
			}
			zuopin.innerHTML = str1;
		}
	})
})