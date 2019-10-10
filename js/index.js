$(function() {
	// 之前未登陆,跳转到first.html页面
	console.log($.cookie("token"));
	if($.cookie("token") == undefined) {
		alert("用户未登录，请登录!");
		location.href = "html/first.html";
	}
	
	// 视频部分列表
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/findHotVideo.do",
		success: function(data) {
			if(data.code=="1"){
				let str = "";
				for(var j in data.info){
					let videos = data.info[j];
					str += `
						<li>
							<a href="html/keTang2.html?videoId=${videos.videoId}">
								<img src = ${videos.imgHref}>
								<h4 class="tit">${videos.introduce}</h4>
								<span class="num">${videos.cookNum}在学</span>
							</a>
						</li>
						`;
				}
				
				$("#tuijianLists").html(str);
			
			}
		}
	});
	
	
	// banner图模块
	var bannerSwiper = new Swiper('#banner', {
		// 回路
		loop: true,
		// 设置autoplay属性
	    autoplay: {
	       	// 每次播放间隔时间
	       	delay : 3000,
	       	// 手动切换之后，仍然能够自动播放
	       	disableOnInteraction : false
	    }
	});
	
	
	$guanzhuLists = $("#guanzhuLists");

	$index_second_lists = $("#index_second_lists");
	$contentLists = $("#contentLists");

	var str = "";
	$.ajax({
		type: "get",
		url: "https://www.fastmock.site/mock/ed88bdd26c3e496c2fb458dc4eb2a2ed/api/lists",
		success: function(data) {
			for(var i in data.list) {
				str += `
					<li>
						<a href="html/xiaoBai2.html?${data.list[i].id}">
							<img src = ${data.list[i].image}>
							<div class="listsR">
								<h4 class="tit">${data.list[i].title}</h4>
								<span class="author">${data.list[i].author}</span>
								<p class="num">${data.list[i].number1}人收藏  ${data.list[i].number2}人做过</p>
											</div>
						</a>
					</li>
					`;
			}
			$guanzhuLists.html(str);
		}
	});

	$index_second_lists.children().on("click", function() {
		$index_second_lists.children().eq($(this).index()).addClass("current").siblings().removeClass("current");
		$contentLists.children().eq($(this).index()).css("display", "block").siblings().css("display", "none");
		let index = $(this).index();
		let str = "";
		// 如果当前的列表块没有子元素,即之前没有加载过,进行加载
		if(!$contentLists.children().eq(index).children().length) {
			$.ajax({
				type: "get",
				url: "https://www.fastmock.site/mock/ed88bdd26c3e496c2fb458dc4eb2a2ed/api/lists",
				success: function(data) {
					for(var i in data.list) {
						str += `
									<li>
										<a href="#">
											<img src = ${data.list[i].image}>
											<div class="listsR">
												<h4 class="tit">${data.list[i].title}</h4>
												<span class="author">${data.list[i].author}</span>
												<p class="num">${data.list[i].number1}人收藏  ${data.list[i].number2}人做过</p>
											</div>
										</a>
									</li>
									`;
					}
					$contentLists.children().eq(index).html(str);
				}
			});
		}

	});

});