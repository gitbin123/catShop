
	onload=function(){
		//gift left
	var giftleftul=document.getElementsByClassName("giftleftul");
	//gift right
	var giftright_pic=document.getElementsByClassName("giftright_pic");
	var 		giftbottom_pic=document.getElementsByClassName("giftbottom_pic");
	//love shop
	var love_shop=document.getElementsByClassName("love_shop");
		$.ajax("js/picture.txt",{
	success:function(data){
		var s=data.split(";");
		var arr=eval("("+s[0]+")");	
		var arr1=eval("("+s[1]+")");
		var arr2=eval("("+s[2]+")");
		var arr3=eval("("+s[3]+")");
		//console.log(arr1);
		for(var i in arr){
			giftleftul[i].src=arr[i].src;
		}
		//console.log(arr)
		for(var i in arr1){
			giftright_pic[i].src=arr1[i].src;
		} 
		//console.log(arr2)
		for(var i in arr2 ){
			giftbottom_pic[i].src=arr2[i].src;
		}
		//console.log(arr3);
		for(var i in arr3){
			love_shop[i].src=arr3[i].src;
		}
	}
	
	})
}