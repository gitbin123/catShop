


$(function(){	
	$("#denglu_top").load("zhuce.html #zhuce_top_con");
	$("#denglu_footer").load("zhuce.html #footer_con");
	//获取上一次的输入值
		
		var denglu=eval("["+getCookie("baocun_denglu")+"]");
		if(denglu.length>=1){
	$(".username").val(denglu[denglu.length-1].username);
	$(".password").val(denglu[denglu.length-1].password);}
//登录保存
$("#btn12").click(function(){
		
		var email=eval("["+getCookie("username_yamzheng")+"]");
		var phone=eval("["+getCookie("phone_yanzheng")+"]");
		
		
		for(var i in email){
//			alert(email[i].username+'输入框');
//			alert(typeof $(".username").val());
//			alert(email[i].password+'密码');
//			alert($(".password").val());
			if($(".username").val()==email[i].username&&$(".password").val()==email[i].password){
				
				//把正确的添加到cookie中				
			if($("#savekuang:checked").length==1){
			var username=$(".username").val();
			var password=$(".password").val();		
			var str=getCookie("baocun_denglu");
				str+=(str!=""?",":str)+"{"+"username:'"+username+"',"+"password:'"+password+"'}";
			setCookie("baocun_denglu",str,30);
			}
				var index=5;
				$(".denglu_ceng").show();
			var	timerdenglu=setInterval(function(){
					index--;
					$(".denglu_ceng span").html(index);					
					if(index==0){
						clearInterval(timerdenglu);
						$(".denglu_ceng").hide();					
						window.location.href="index.html";
						
					}
				},1000)			
			}
			
		}
		for(var j in phone){
			//判断对的登录名和密码
			if($(".username").val()==phone[j].username&&$(".password").val()==phone[j].password){
			//把正确的添加到cookie	
				if($("#savekuang:checked").length==1){
			var username=$(".username").val();
			var password=$(".password").val();		
			var str=getCookie("baocun_denglu");
				str+=(str!=""?",":str)+"{"+"username:'"+username+"',"+"password:'"+password+"'}";
			setCookie("baocun_denglu",str,30);
								
		//setCookie("a",password,2);
			}
				
				
				
				var index=5;
				$(".denglu_ceng").show();
			var	timerdenglu=setInterval(function(){
					index--;
					$(".denglu_ceng span").html(index);					
					if(index==0){
						clearInterval(timerdenglu);
						$(".denglu_ceng").hide();					
						window.location.href="index.html";
						
					}
				},1000)			
			}				
		}		
		
})


////把正确的添加到cookie中				
//			if($("#savekuang:checked").length==1){
//			var username=$(".username").val();
//			var password=$(".password").val();		
//			var str=getCookie("baocun_denglu");
//				str+=(str!=""?",":str)+"{"+"username:'"+username+"',"+"password:'"+password+"'}";
//			setCookie("baocun_denglu",str,30);
//			}
//
//		
		
	
	
	

	
})

