	

$(function(){
	
	$("#shopcar_top").load("index.html #top_con");
	$("#shopcar_top_con").load("index.html #logo_con");
	$("#shopcar_bottom").load("index.html #footer");
	var td2="";
	var ipt;
	var shop=eval("["+getCookie("shopcar")+"]");
	var zongji="";
	for(var i in shop){
			$(".no_shop").css("display","none");
	
		//动态添加数量
		
		var tr=document.createElement("tr");
		
		var td1=document.createElement("td");
		var chx=document.createElement("input");
		var img=document.createElement("img");
			img.src=shop[i].img;
			img.style.marginLeft="30px";
			chx.type="checkbox";
			chx.style.position="absolute";
			chx.style.left="10px";
			chx.style.top="50px";
			td1.appendChild(chx);
			td1.style.position="relative";
			td1.appendChild(img);	
		 td2=document.createElement("td");
			td2.innerHTML=shop[i].name;
		var td3=document.createElement("td");
		var td4=document.createElement("td");
			td4.innerHTML=shop[i].nowprice;
		var td5=document.createElement("td");
		 ipt=document.createElement("input");
		 ipt.style.width="20px";
		 ipt.style.textAlign="center";
		 ipt.value=shop[i].click_count;
			td5.appendChild(ipt);
		var td6=document.createElement("td");
//			console.log(td5.innerHTML+11111111)
			
			var count=td4.innerHTML.substring(1,td4.innerHTML.length);
			
//			td6.innerHTML=shop[i].beforeprice;	
			td6.style.color="red";
			td6.innerHTML="￥"+(Number(ipt.value)*Number(count)).toFixed(2);
			td6.className="td6";
		var td7=document.createElement("td");
		var btn=document.createElement("button");
		btn.className="shanchubtn";
			btn.innerHTML="删除";
		td7.appendChild(btn);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		$("#shopping").children()[0] .appendChild(tr);
		zongji=Number(zongji);
		zongji+=Number(td6.innerHTML.substring(1,td6.innerHTML.length));
	//购物车数量
	
		}
//		console.log(zongji)	
//总共的
		$(".allprice").html(zongji);
//		console.log($("td"));
//		console.log(shop[i].name)
var td6=document.getElementsByClassName("td6");
	$("#shopping input").blur(function(){
	var count=($(this).parent().prev().html()).substring(1,td4.innerHTML.length);
	$(this).parent().next().html("￥"+(Number($(this).val())*Number(count)).toFixed(2))	
	
		zongji=""
	for(var i=0;i<td6.length;i++){
		var sbr=td6[i].innerHTML.substring(1,td6[i].length);
		zongji=Number(zongji);
		zongji+=Number(sbr);
	}
		$(".allprice").html(zongji);
		
	})
	

		
//		$(this).parent().next().html('￥'+(Number($(this).val())*Number($(this).parent().prev().html())).toFixed(2));
		
//td6.innerHTML="￥"+(Number(ipt.value)*Number(count)).toFixed(2)
	
			
	
	
	
	$("#shopping td").css({"width":"157px","height":"42px","text-align":"center","line-height":"42px"});
	$("#shopping td img").css({"width":"80px","height":"80px"})
	//删除cookie中的东西
	$(".shanchubtn").click(function(){
		//console.log(getCookie("shopcar")+"qqq");
		$(this).parent().parent().remove();
		for(var j in shop){
			if($(this).parent().parent().children().eq(1).html()==shop[j].name){
			
	
			shop.splice(j,1);
//			console.log(shop);
	if(shop.length==0){
			$(".no_shop").css("display","block");
		
	}
		
			break;
			}
		}
	//	console.log(arr);
		
		var str=JSON.stringify(shop);
//		console.log(str)
		var	atc=str.substring(1,str.length-1);
		if(atc!=""){
			
		}
			//console.log(atc);
			setCookie("shopcar",atc,8);		  
			
			
	})

	//全选
		$(".allselect").click(function(){;
		if($(this).is(":checked")){
			$(":checkbox").attr("checked","checked"); 
			$(".delet").click(function(){
				setCookie("shopcar","",10);
					$("td").parent().remove();
					$(".no_shop").css("display","block");
			})
		}else{
			$(":checkbox").attr("checked",false); 
		}
	})
	
		
//购物车物品的数量	
		

	
	


	
})
