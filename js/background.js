function savezz(id){
	//localStorage.removeItem('zz');
	var zz = localStorage.zz;
	//(localStorage.zz == null || typeof(localStorage.zz)=="undefined")? zz = "": zz=localStorage.zz;
	zz = zz + ','+ id;
	localStorage.zz = zz;

}


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message){
		var id = message.substring(3,message.length);
		savezz(id);
        sendResponse("[kuhelper] 已屏蔽 "+localStorage.zz);
    }
});