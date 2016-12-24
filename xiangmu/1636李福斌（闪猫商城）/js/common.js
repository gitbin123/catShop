	function setCookie(key,value,days,path){
		var now=new Date();
		now.setDate(now.getDate()+days);
		document.cookie=key+"="+encodeURIComponent(value)+";expires="+now+";path="+(path||"/");
	}
	function getCookie(key){
			var str=document.cookie;
			var kvs=str.split("; ");
			for(var i in kvs){
				var kv=kvs[i].split("=");
				if(kv[0]==key){
					return decodeURIComponent(kv[1]);
				}
			}
			return "";
		}
