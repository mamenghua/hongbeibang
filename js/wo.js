$(function(){
	$(".shipu").click(function(){
		//console.log($(this));
		$(this).addClass('line').siblings().removeClass('line');
		$('.con_1').css("display",'block');
		$('.con_2').css("display",'none');
	});
	$(".zuopin").click(function(){
		console.log($(this));
		$(this).addClass('line').siblings().removeClass('line');
		$('.con_2').css("display",'block');
		$('.con_1').css("display",'none');
	})
})