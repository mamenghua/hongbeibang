// $(function(){
// 	console.log($('.button:not(:not)'));
// })
$(function(){
	var index = 0;
	$('.button').click(function(){
		index++;
		if(index==1){
			$('ul').animate({left:"-3.75rem"});
		}else if(index==2){
			$('ul').animate({left:"-7.5rem"});
		}
		 
	
	})
	$('.not').click(function(){
		$(window).attr("location",'login.html');
	})
})