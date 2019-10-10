$(function() {
	$zbbj = $(".zbbj");
	$contR = $(".cont-r");
	
	$contR.eq(0).fadeIn().nextAll().fadeOut();
	var str = "";
	var typeid=1;
	$.ajax({
		// type: "get",
		// url: "https://www.fastmock.site/mock/ed88bdd26c3e496c2fb458dc4eb2a2ed/api/shipufenlei",
		type: "post",
		url: "http://47.240.68.134:8889/backinghelper/foodTypeList.do?typeId="+typeid,
		success: function(data) {
			// console.log(data.info);
			if(data.code=="1"){
				str = `<h2>${data.info[0].detailName}</h2>
				<div class="cont-rt">`;
				for (let i in data.info) {
					str +=
						`
						<dl>
							<dt><a href="#"><img src="${data.info[i].foodTypes[0].foodImg}" alt=""></a></dt>
							<dd><a href="#">${data.info[i].foodTypes[0].typeName}</a></dd>
						</dl>
					`;
				}
				str += `</div>`;
				$contR.eq(0).html(str);
			}
		}
	});
	
	for (let index = 0; index < $zbbj.length; index++) {
		$zbbj.eq(index).on("click", function() {
			let typeName = $(this).text();
			console.log($(this).text());
			$contR.fadeOut();
			for (let j = 0; j < $zbbj.length; j++) {
				$zbbj.siblings().eq(j).removeClass("bianbeijing");
			}
			$zbbj.eq(index).addClass("bianbeijing");
			$contR.eq(index).fadeIn();
console.log(typeid);
			if ($contR.eq(index).children().length == 0) {
				var str = "";
				$.ajax({
					type: "post",
					url: "http://47.240.68.134:8889/backinghelper/findVideo.do?typeName="+typeName,
					success: function(data) {
						// console.log(data);
						let info=data.info;
						// console.log(info);
						str = `<h2>`+typeName+`</h2>
						<div class="cont-rt">`;
						for (let i in info) {
							console.log(info[i]);
							str +=
								`
								<dl>
									<dt><a href="#"><img src="${info[i].imgHref}" alt=""></a></dt>
									<dd><a href="#">${info[i].content}</a></dd>
								</dl>
							`;
						}
						str += `</div>`;

						$contR.eq(index).html(str);
					}
				});
			}
			
		})

	}

	$.ajax({
			type: "post",
			url: "http://47.240.68.134:8889/backinghelper/foodTypeList.do?typeId=1",
			success: function(data) {
				console.log(data);
			}
		});


})
