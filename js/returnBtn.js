$(function(){
	// 返回按钮
	$returnBtn = $("#returnBtn");
	// 返回按钮注册点击事件
	$returnBtn.on("click", function() {
		history.back();
	});
});
