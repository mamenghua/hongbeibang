$(function(){
	// 得到视频种类id值，保存
	let featureId = window.location.href.split("=")[1];

	$.ajax({
		type: "post",
		url:"http://47.240.68.134:8889/backinghelper/oneFeatureVideoList.do?featureId="+featureId,
		success: function(data) {
			console.log(data);
			$("#header").append(data.info[0].featureName);
			if(data.code=="1"){
				let str = "";
				for(var i in data.info){
					let info = data.info[i].videos;
					for(var j in info){
						let videos = info[j];
						console.log(videos);
						str += `
						<li>
							<a href="keTang2.html?videoId=${videos.videoId}">
								<img src = ${videos.imgHref}>
								<h4 class="tit">${videos.introduce}</h4>
								<span class="num">${videos.cookNum}参加</span>
							</a>
						</li>
						`;
					}
					
				}
				
				$("#tuijianLists").html(str);
			
			}
		}
	});
});
