function save_zz(id){
	//localStorage.removeItem('zz');
	//localStorage.clear();
	if(localStorage.getItem("zz")==null){
		var zz = [];
	}else{
		var zz=JSON.parse(localStorage.getItem("zz"));
	}
	if(find_zz(id,zz)<0){
		zz.push({"id":id,"time":getTime()});
	}else{
		alert("[kuhelper] 一个zz不需要屏蔽两次！！");
	}
	localStorage.setItem("zz", JSON.stringify(zz));
	//alert(JSON.stringify(zz));
}

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
		console.log ("new zz"); 
		return -1; 
	}else{
		return index;
	}
}

function get_zz(){
	if(localStorage.getItem("zz")==null){
		var zz = [];
	}else{
		var zz=JSON.parse(localStorage.getItem("zz"));
	}
	return zz;
}

function delete_zz(id){
	var zzlist = get_zz();
	
	var newzz = [];
		for(var i=0;i<zzlist.length;i++){
			if (zzlist[i].id != id) { 
				newzz.push(zzlist[i]);
			} 
		}

	localStorage.removeItem('zz');
	if(id!=0){
		localStorage.setItem("zz", JSON.stringify(newzz));
	}
	return id;
}

function getTime(){
	var myDate = new Date(); 
	return myDate.toLocaleString();
}
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message){

		if(message.action=="delete_zz"){
			sendResponse(delete_zz(message.data));
		}else if(message.action=="get_zz"){
			sendResponse(get_zz());
		}else if(message.action=="save_zz"){
			var id = message.data;
			save_zz(id);
			alert("[kuhelper] 已屏蔽zz! id = "+id);
      	  	sendResponse(id);
		}
    }
});