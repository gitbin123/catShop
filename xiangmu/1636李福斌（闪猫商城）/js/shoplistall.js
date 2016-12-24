


$(function(){
	$("#shoplistall_top_top").load("index.html #top_con");
	$("#shoplistall_top_con").load("index.html #logo_con");
	$("#shoplistall_bottom").load("index.html #footer_con");
	
	var sa_h1=document.getElementsByClassName("sa_h1");
	var sa_h2=document.getElementsByClassName("sa_h2");
	var sa_h1_2=document.getElementsByClassName("sa_h1_2");
	var big_img=document.getElementsByClassName("shoplist-splace_con_left_img");
	var sa_smallimg=document.getElementsByClassName("sa_smallimg");
	var shengyu=document.getElementsByClassName("shengyu");
	var sa_paizi=document.getElementsByClassName("sa_paizi");
	var sa_place=document.getElementsByClassName("sa_place");
	var nowprice=document.getElementsByClassName("nowprice");
	var before_price=document.getElementsByClassName("shoplist_tr2_td2");
	$.ajax("js/shoplistall.txt",{
		success:function(data){
			var arr=data.split(";");
			var arr1=eval("("+arr[0]+")");
			var arr2=eval("("+arr[1]+")");
			var arr3=eval("("+arr[2]+")");
			var arr4=eval("("+arr[3]+")");
			var arr5=eval("("+arr[4]+")");
			var arr6=eval("("+arr[5]+")");
			var arr7=eval("("+arr[6]+")");
			var arr8=eval("("+arr[7]+")");
			var arr9=eval("("+arr[8]+")");
			var arr10=eval("("+arr[9]+")");
			for(var i=0;i<sa_h1.length;i++){
				sa_h1[i].innerHTML=arr1[i].type;
			}
			for(var i=0;i<sa_h2.length;i++){
				sa_h2[i].innerHTML=arr2[i].name;
			}
			for(var i=0;i<sa_h1_2.length;i++){
				sa_h1_2[i].innerHTML=arr3[i].name;
				console.log(arr3[i].name)
			}
			for(var i=0;i<big_img.length;i++){
				big_img[i].src=arr4[i].src;
				
			}
			for(var i=0;i<sa_smallimg.length;i++){
				sa_smallimg[i].src=arr5[i].src;
				
			}
			
			for(var i=0;i<shengyu.length;i++){
				shengyu[i].innerHTML=arr6[i].count;
			}
			for(var i=0;i<sa_paizi.length;i++){
				sa_paizi[i].innerHTML=arr7[i].pinpai;
			}
			for(var i=0;i<sa_place.length;i++){
				sa_place[i].innerHTML=arr8[i].place;
			}
			for(var i=0;i<nowprice.length;i++){
				nowprice[i].innerHTML=arr9[i].nowprice;
			}
			for(var i=0;i<before_price.length;i++){
				before_price[i].innerHTML=arr10[i].before_price;
			}
		}
	})
		
	
})
