$(function() {
	var user = document.querySelectorAll(".shitang-l")[0];
	var tupian = document.getElementById("tupian");
	var str = "";
	var str1 = "";
	/*$.ajax({
					
					type:"post",
					url:"http://47.240.68.134:8889/backinghelper/bakecircle/add.do",
					success:function(data){
//						console.log(data);
						if(data.code=="1"){
							for(var i in data.info){
								str += `
								<img src="${data[i].touxiang}" alt="" />
								<i>
									<h2>${data[i].fenfangshitang}</h2>
									<p>${data[i].shijian}</p>
								</i>
								`;
								str1+=`
								<img src="${data[i].quanimg}"/>
								<img src="${data[i].quanimg}"/>
								<img src="${data[i].quanimg}"/>
								<img src="${data[i].quanimg}"/>
								`
							}
							user.innerHTML = str;
							tupian.innerHTML = str1;
						}
					}
				});*/

	str = "";
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/bakecircle/listTopic.do",
		success: function(data) {
			if(data.code == "1") {
				for(let i in data.info) {
					str +=
						`
									<li><a href="#">${data.info[i].topicName}</a></li>
								`;
				}
				str += `</div>`;
				$(".maincate").eq(0).html(str);
				$(".maincate").children().eq(0).children().addClass("choose");
			}
		}
	});

	/*$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/bakecircle/findCommentByCircleId.do?circleId=1",
		success: function(data) {

			if(data.code == "1") {
				let str = "";
				let time = "";
				for(var i in data.info) {
					
					let info = data.info[i];
//					console.log(info);
					time = info.commentTime;
					time = time.substring(0,20);
					str += `<div class="box3">
								<div class="fenfangshitang">
									<div class="shitang-l">
										<img src="${info.user.headImg}" alt="" />
										<i>
											<h2>${info.user.nickname}</h2>
											<p>`+time+`</p>
										</i>
									</div>
									<div class="shitang-r">
										<span class="iconfont icon-add-fill"></span>
										<a href="">关注</a>
									</div>
								</div>
								<p class="kouwei">${info.content}</p>
								<div id="tupian">
									<img src="${info.user.headImg}"/>
									<img src="${info.user.headImg}"/>
								</div>
							</div>
					<!--第四部分香辣番茄-->
							<div class="box4">
								<img src="${info.user.headImg}" alt="" />
								<i>
									<h2>香辣番茄戚风</h2>
									<p>食谱作者:帮主阿涛</p>
								</i>
							</div>`;
				}
				$("#bakeCircleArea").html(str);

			}
		}
	});*/
	
	
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/bakecircle/list.do",
		success: function(data) {
			
			if(data.code == "1") {
				let str = "";
				let time = "";
				for(var i in data.info) {
					
					let info = data.info[i];
					console.log(info);
					time = info.time;
					time = time.substring(0,20);
					str += `<div class="box3">
								<div class="fenfangshitang">
									<div class="shitang-l">
										<img src="${info.user.headImg}" alt="" />
										<i>
											<h2>${info.user.nickname}</h2>
											<p>`+time+`</p>
										</i>
									</div>
									<div class="shitang-r">
										<span class="iconfont icon-add-fill"></span>
										<a href="">关注</a>
									</div>
								</div>
								<p class="kouwei">${info.description}</p>
								<div id="tupian">
									<img src="${info.resources}"/>
									<img src="${info.user.headImg}"/>
								</div>
							</div>
					<!--第四部分香辣番茄-->
							<div class="box4">
								<img src="${info.user.headImg}" alt="" />
								<i>
									<h2>香辣番茄戚风</h2>
									<p>食谱作者:帮主阿涛</p>
								</i>
							</div>`;
				}
				$("#bakeCircleArea").html(str);

			}
		}
	});
	
	
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/bakecircle/findByUserId.do?uid=1",
		success: function(data) {
			console.log(data);
		}
	});
	
});