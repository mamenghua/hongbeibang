$(function(){
	// 得到百科id值，保存
	let techId = window.location.href.split("=")[1];

	$.ajax({
		type: "post",
		url:"http://47.240.68.134:8889/backinghelper/findOne.do?techId="+techId,
		success: function(data) {
			if(data.code=="1"){
				let str = "";
				str += `
					<video controls="controls" autoplay="autoplay" controls poster="${data.info.imgHref}"  >
					<source src="${data.info.videoHref}" type="video/ogg" />
						your browser does not support the video tag
					</video>
					<h5 class="title">${data.info.content}</h5>
					<p>${data.info.introduce}</p>
					`;
				$("#content").html(str);
			}
		}
	});
	
	
	/*$.ajax({
		type: "post",
		url:"http://47.240.68.134:8889/backinghelper/bakecircle/listTopic.do",
		success: function(data) {
			console.log(data);
		}
	});
	*/
	/*$.ajax({
		type: "post",
		url:"http://47.240.68.134:8889/backinghelper/bakecircle/list.do",
		success: function(data) {
			console.log(data);
		}
	});*/
	
	
});
