

$(function(){
	var txt;
	var message={"action":"get_zz"};
	chrome.runtime.sendMessage(message, function(response){
		$('.h-threads-info-uid').each(function(){
			txt = $(this).text();
			$(this).after(' <span class="h-threads-info-report-btn pb"  ><a href="" onclick="return true">屏蔽</a></span>');
			var id = txt.substring(3,txt.length);
			if(find_zz(id,response)>-1){
				//alert("find zz ! in "+$(this).parents('.h-threads-info').next(".h-threads-content").text());
				$(this).parents('.h-threads-info').next('.h-threads-content').text("[kuhelper] 已屏蔽此内容 ");
				$(this).parents('.h-threads-info').prev('.h-threads-img-box').remove();
			}
		});
		
		$(".pb").click(function(){
			txt = $(this).prev('.h-threads-info-uid').text();
			var id = txt.substring(3,txt.length);
			message={"action":"save_zz","data":id};
			chrome.runtime.sendMessage(message, function(response){
				//alert(response);
			});
		});
	
	});
	
	
	
	
})

function find_zz(id,zzlist){
	var isExisted = false;
	var index = -1; 
	for(var i=0;i<zzlist.length;i++){
		if (zzlist[i].id == id) { 
			isExisted = true;
			index = i;
			return i; 
		} 
	}
	if (!isExisted) { 
		return -1; 
	}else{
		return index;
	}
}