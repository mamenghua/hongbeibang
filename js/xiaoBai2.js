$(function(){
	$content = $("#content");
	$footer = $("#footer");
	var str = "";
	$.ajax({
		type: "post",
		url: "https://www.fastmock.site/mock/ed88bdd26c3e496c2fb458dc4eb2a2ed/api/xiaoBai2",
		success: function(data) {
			str += `<div class="xiaoBaiImage">
						<img src = ${data.image}>
					</div>
					<h3 class="title">${data.title}</h3>
					<p class="time">于2017年05月04号发布</p>
					<p class="desc">${data.desc}</p>
					<div class="middleArea">
						<img class="touxiang" src = ${data.touxiang}>
						<span class="author">${data.author}</span>
						<a class="follow fr" href="#"><i class="iconfont icon-add-fill">关注</i></a>
					</div>
					
					<h3 class="title">食材用料</h3>
					<ul class="shiCaiLists">
			`;
			for(var i in data.list) {
				//console.log(data.list[i]);
				str += `
					<li>
						<span class="shicai">${data.list[i].shicai}</span>
						<span class="yongliao">${data.list[i].yongliao}g</span>
					</li>
					`;
			}
			str += `</ul>`;
			$content.html(str);
		}
	});
});
