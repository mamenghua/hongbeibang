$(function(){
	var $fa = $('.fa');
	var $son = $('.son');
	$fa.click(function(){
		console.log($(this).find('.son').position().left);
		if($(this).find('.son').position().left==0){
			$(this).find('.son').animate({left:"0.12rem"}).css("background","#D8D8D8");
		}else{
			$(this).find('.son').animate({left:"0"}).css("background","#019285");
		}
	})
})
