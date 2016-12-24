

$(function(){
	$("#shoplist_top").load("index.html #top_con");
	$("#shoplist_top_bottom").load("index.html #logo_con");
	$("#shoplist_top_bottom1").load("index.html #nav_coc");
	
	
	$(".shopa").mouseenter(function(){
		$(this).css({"border-color":"red","border-bottom":"0","color":"red"});
		$("#shoplist_con_topa").fadeIn(500);
	})
	$("#shoplist_con_topa").mouseleave(function(){
		$(this).fadeOut();
		$(".shopa").css({"border":"1px solid #A8A8A8","color":"black"});
	})
	//物品数量
	var count;
	$(".jiahao").click(function(){					
	 count=parseInt($(".shop_count").val());
	count++;
		$(".shop_count").val(count);
		$(".shengyu").html(980-count);
	})
	$(".jianhao").click(function(){
		 count=parseInt($(".shop_count").val());
		  $(".shengyu").html(980-count);
		 count--;
		 $(".shop_count").val(count);
		 if(parseInt($(".shop_count").val())<=0){
		 	$(".shop_count").val("0");
		 	count=0;
		 	
		 }
		
		
	})
	//购物车存储
	var click_count=0;
	$(".shoplist_select_a2").click(function(){

 	click_count++;
	var img=$(".shoplist-splace_con_left_img").attr("src");
	var name=$(".name h1").html();
	var nowprice=$(".shoplist_tr2_td1 i").html();
	var number=$(".shengyu").html();
	var beforeprice=$(".shoplist_tr2_td2").html();
	//console.log(beforeprice);
	var str=getCookie("shopcar");
	var	arr=eval("["+str+"]");
		if(str.length>0){
	
		for(var i in arr){
		
			if(arr[i].name==name){
				arr[i].click_count++;
			str=JSON.stringify(arr);
//			str.substring(1,str.length-1);		
			setCookie("shopcar",str.substring(1,str.length-1),10);
		
			}else{
				
		str+=(str!=""?",":str)+"{"+"img:'"+img+"',name:'"+name+"',nowprice:'"+nowprice+"',number:'"+number+"',beforeprice:'"+beforeprice+"',click_count:'"+click_count+"'}";
		
		setCookie("shopcar",str,10);
			}
		}		
	}else{
		str+=(str!=""?",":str)+"{"+"img:'"+img+"',name:'"+name+"',nowprice:'"+nowprice+"',number:'"+number+"',beforeprice:'"+beforeprice+"',click_count:'"+click_count+"'}";
		
		setCookie("shopcar",str,10);
	}
	})
	
	
	
	
	
	
	
})
onload=function(){
	var fangdajing=document.getElementsByClassName("fangdajing")[0];
	
	//放大镜
	var fangdajing_little=document.getElementsByClassName("fangdajing_little")[0];
	var shoplist_left=document.getElementsByClassName("shoplist_con_left")[0];
	
	var bigimg=document.getElementsByClassName("bigimg")[0];
	shoplist_left.onmousemove=function(e){
		fangdajing.style.display="block";
		fangdajing_little.style.display="block";
		var e=e||event;
		var _left=e.pageX-this.offsetLeft-fangdajing_little.offsetWidth/2;
		var _top=e.pageY-this.offsetTop-fangdajing_little.offsetHeight/2;
		if(_left<=50){
			_left=50;
		}
		if(_left>=shoplist_left.offsetWidth-fangdajing_little.offsetWidth-50){
			_left=shoplist_left.offsetWidth-fangdajing_little.offsetWidth-50;
		}
		if(_top<=50){
			_top=50;
		}
		if(_top>=shoplist_left.offsetHeight-fangdajing_little.offsetHeight-60-50){
			
			_top=shoplist_left.offsetHeight-fangdajing_little.offsetHeight-60-50;
			
		}	
		$(".fangdajing_little").css({"left":_left,"top":_top});
		bigimg.style.left=150-fangdajing_little.offsetLeft*5/4+"px";
		bigimg.style.top=150-fangdajing_little.offsetTop*5/4+"px";
	
	
	}
	shoplist_left.onmouseleave=function(){
		fangdajing_little.style.display="none";
		fangdajing.style.display="none";
	}
	
	
}
