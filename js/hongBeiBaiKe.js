$(function() {
	// 得到烘焙百科分类导航
	$head_lists = $("#head_lists");
	// 得到content部分，content包含了四个ul
	$content = $("#content");
	// 返回按钮
	$returnBtn = $("#returnBtn");

	// 导航数据
	var headlistStr = "";
	$.ajax({
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/findAllBackName.do",
		success: function(data) {
			//数据传送成功
			if(data.code == "1") {
				// 遍历数组
				for(var i in data.info) {
					let info = data.info[i];
					headlistStr += `<li data-id="${info.bakeId}">${info.bakeName}</li>`;
				}
				$head_lists.html(headlistStr);
				// 给第一个子元素加当前样式
				$head_lists.children(":first").addClass("current");
				// 默认显示第一个列表数据
				getList(1);
				// 给头部导航注册点击事件
				$head_lists.children().on("click", function() {
					// 保存类别id值
					let bakeId = $(this).attr("data-id");
					
					// 保存点击导航的索引值 0-3
					let index = $(this).index();
					// 给当前导航加样式,其余兄弟元素去样式
					$head_lists.children().eq(index).addClass("current")
					.siblings().removeClass("current");
					// 当前ul显示.其余兄弟ul隐藏
					$content.children().eq(index).css("display", "block")
					.siblings().css("display","none");

					let str = "";
					// 如果当前的列表块没有子元素,即之前没有加载过,进行加载
					if(!$content.children().eq(index).children().length) {
						// 当前ul调用接口,显示数据
						getList(bakeId);
					}

				});
			}
		}
	});

	//封装函数,传进来bakeId值,对应数据放到ul中
	function getList(bakeId) {
		let str = "";
		$.ajax({
			type: "post",
			url: "http://47.240.68.134:8889/backinghelper/skillList.do?bakeId=" + bakeId,
			success: function(data) {
				if(data.code == "1") {
					for(var i in data.info) {
						let info = data.info[i];
						str += `
							<li>
								<a href="baiKe.html?techId=${info.techId}">
									<img src = ${info.imgHref}>
									<h4 class="tit">${info.techName}</h4>
								</a>
							</li>
						`;
					}
					$content.children().eq(bakeId - 1).html(str);
				}
			}
		});
	}

	// 返回按钮注册点击事件
	$returnBtn.on("click", function() {
		history.back();
	});

});