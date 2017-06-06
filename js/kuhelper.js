

$(function(){
	var txt;
	$(".h-threads-info-uid").each(function(){
		txt = $(this).text();
		$(this).after(' <span class="h-threads-info-report-btn pb"  ><a href="" onclick="return false">屏蔽</a></span>');
		$(this).click(function(){
			alert("click!");
		});
	});
	$(".pb").click(function(){
		message = $(this).prev(".h-threads-info-uid").text();
		//alert("[kuhelper] 已屏蔽 "+message);
		chrome.runtime.sendMessage(message, function(response){
			alert(response);
		});
	});
})