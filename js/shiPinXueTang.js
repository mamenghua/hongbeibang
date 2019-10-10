$(function() {
	var bannerSwiper = new Swiper('#banner', {
		// 回路
		loop: true,
		// 设置autoplay属性
		autoplay: {
			// 每次播放间隔时间
			delay: 3000,
			// 手动切换之后，仍然能够自动播放
			disableOnInteraction: false
		}
	});

	// 视频部分列表
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/findAllFeature.do",
		success: function(data) {
			if(data.code=="1"){
				for(var i in data.info){
					let info = data.info[i];
					console.log(info);
					let str = "";
					str += `<div class="title">
								<h3>
									${info.featureName}
									<a href="keTang1.html?featureId=${info.featureId}">
									<span class="fr">查看全部</span>
									</a>
								</h3>
							</div>`;
					str += `<ul class="lists">`;
					for(var j in info.videos){
						let videos = info.videos[j];
						str += `
							<li>
								<a href="../html/keTang2.html?videoId=${videos.videoId}">
									<img src = ${videos.imgHref}>
									<h4 class="tit">${videos.introduce}</h4>
									<span class="num">${videos.cookNum}在学</span>
								</a>
							</li>
							`;
					}
					str += `</ul>`;
					$(".xuetangArea").eq(i).html(str);
				}
			}
		}
	});

});