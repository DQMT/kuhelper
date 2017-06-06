$(function(){
    var table = '<table><caption>ku岛zz管理器</caption><tr><th>屏蔽时间</th><th>zz的id</th><th>操作</th></tr>';
    var zzlist;
    if(localStorage.getItem("zz")==null){
		zzlist = [];
	}else{
		zzlist=JSON.parse(localStorage.getItem("zz"));
	}
    for(var i=0;i<zzlist.length;i++){
		table += '<tr>';
        table += '<td class="zztime">'+zzlist[i].time+'</td>';
        table += '<td class="zzid">'+zzlist[i].id+'</td>';
        table += '<td class="del">'+'<span ><a href="" >释放</a></span>'+'</td>';
        table += '</tr>';
	}
    table += '<tr>';
    table += '<td class="delall" colspan="3">'+'<span ><a href="" >释放所有zz</a></span>'+'</td>';
    table += '</tr>';
    table += '</table>';
    $('#kuhelper').html(table);
    $(".del").click(function(){
        var id = $(this).prev('td').text();

        var message = {
            "action":"delete_zz",
            "data":id
        }
        chrome.runtime.sendMessage(message, function(response){
           // alert(response);
        });
    });
     $(".delall").click(function(){
        var id = 0;
        var message = {
            "action":"delete_zz",
            "data":id
        }
        chrome.runtime.sendMessage(message, function(response){
           // alert(response);
        });
    });
	
})


