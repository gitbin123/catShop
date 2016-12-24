$(function(){
	var username_yanzheng=false,email_yanzheng=false,password_yanzheng=false,surepassword_yanzheng=false,phone_yanzheng=false,email_suijiyanzhengma=false;
	var zhuce_number=0;
	$(".phone_btn").click(function(){
		zhuce_number=1;
		$(".zhuce_email").find("input").val("");
		$(".zhuce_email").find("span").html("").css("background","");
		$(".sbt").val("赶紧注册，别瞎点啦！");
		$(".email_password2").val("");
		$(this).prev().css("border-bottom","0");
		$(".zhuce1").hide();
		$(this).css("border-bottom","2px solid #E23435");
		$(".zhuce2").show();
		
	})
	$(".email_btn").click(function(){
		zhuce_number=0;
		$(".zhuce_email").find("input").val("");
		$(".zhuce_email").find("span").html("").css("background","");
		$(".sbt").val("赶紧注册，别点啦！");
		$(".email_password1").val("");
		$(".email_password2").val("");
		$(this).next().css("border-bottom","0");
		$(".zhuce2").hide();
		$(this).css("border-bottom","2px solid #E23435");
		$(".zhuce1").show();	
	})
	//用户名验证
		$(".email_txt").keyup(function(){
			if((/^[a-zA-Z0-9]\w{3,16}$/).test($(this).val())){
				$(this).next().html("");
				$(this).next().css("background","url(img/zhuce7.gif)    10px center no-repeat");
				username_yanzheng=true;
			}else{
		
				$(this).next().html("长度为4~16且只能为数字字符和下划线");
				$(this).next().css("background","url(img/zhuce6.gif) 10px center no-repeat");
				username_yanzheng=false;

}			
})
		//邮箱验证
		$(".email_yanzheng").keyup(function(){
			if((/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test($(this).val())){		
				$(this).next().html("");
				$(this).next().css("background","url(img/zhuce7.gif)    10px center no-repeat");
				email_yanzheng=true;
			}else{		
				$(this).next().html("请输入正确的email");
				$(this).next().css("background","url(img/zhuce6.gif)    10px center no-repeat");
				email_yanzheng=false;
			}
			
		})
		//密码验证
		$(".email_password1").keyup(function(){
//			console.log($(".email_password1").val()+"第一个")
			if($(this).val()!=""){
			if((/^[a-z0-9_-]{6,18}$/).test($(this).val())){
				$(this).next().html("");
				$(this).next().css("background","url(img/zhuce7.gif)    10px center no-repeat");
				password_yanzheng=true;
			}else{
				$(this).next().html("长度为6~18且只能为数字字符和下划线");
				$(this).next().css("background","url(img/zhuce6.gif)  10px center no-repeat")
				password_yanzheng=false;
			}
			}else{
				$(this).next().html("请输入密码");
				$(this).next().css("background","url(img/zhuce6.gif)  10px center no-repeat");
			}
		})
		
		$(".email_password2").keyup(function(){
			
		//	console.log(zhuce_number);
			if($(this).val()!=""){
				if($(".email_password2").eq(zhuce_number).val()!=$(".email_password1").eq(zhuce_number).val()){
					$(this).next().css("background","url(img/zhuce6.gif)  10px center no-repeat")
					$(this).next().html("两次输入密码不一致");
					surepassword_yanzheng=false;
				}else{
					$(this).next().html("");
					$(this).next().css("background","url(img/zhuce7.gif)  10px center no-repeat");
					surepassword_yanzheng=true;
				}
			}else{
				$(this).next().html("请确认密码");
				$(this).next().css("background","url(img/zhuce6.gif)  10px center no-repeat");
				
			}
		})	
		//email随机验证码验证
		$(".zhuce1 .phone_txt").keyup(function(){
			
			if($(".zhuce1 .phone_txt").val()=="点击获取验证码"){
			email_suijiyanzhengma==false;
		}else if($(".zhuce1 .phone_txt").val().toUpperCase()==$(".zhuce1 .yanzhengma").html()){
			email_suijiyanzhengma=true;
			$(this).next().next().html("");
			
		}else{
			email_suijiyanzhengma=false;
			$(this).next().next().html("验证码错误");
		}
		
			
		console.log(email_suijiyanzhengma)	
			
		})
		
		
		
		//电话验证
		$(".phone_number").keyup(function(){
			if((/^[0-9]{11}$/).test($(this).val())){
				$(this).next().html("");
				$(this).next().css("background","url(img/zhuce7.gif)    10px center no-repeat");
				phone_yanzheng=true;
			}else{
				$(this).next().html("请输入正确的电话号码");
				$(this).next().css("background","url(img/zhuce6.gif)  10px center no-repeat");
				phone_yanzheng=false;
			}
		})
//email注册成功
	$(".zhuce1 .sbt").on("click",function(e){
	//e.stopPropagation()||e.cancelBubble=true; 
	if(username_yanzheng==true&&email_yanzheng==true&&password_yanzheng==true&&surepassword_yanzheng==true&&($(".zhuce1 .chx:checked").length!=0)&&email_suijiyanzhengma==true){
		
		var  username=$(".zhuce1 .email_txt").val();
		var  email=$(".zhuce1 .email_email").val();
		var  password=$(".zhuce1 .email_password1").val();
		var str=getCookie("username_yamzheng");
		str+=(str!=""?",":str)+"{"+"username:'"+username+"',"+"password:'"+password+"',"+"email:'"+email+"'}";	
			setCookie("username_yamzheng",str,10);
			
		$("#tanchuceng111").show();
		$(".tanchuceng_btn").click(function(){
			$("#tanchuceng111").hide();
		})
	}
			
	})
	//手机注册
	$(".zhuce2 .sbt").click(function(){
		if(username_yanzheng==true&&phone_yanzheng==true&&password_yanzheng==true&&surepassword_yanzheng==true&&($(".zhuce2 .chx:checked").length!=0)){
		var  username=$(".zhuce2 .email_txt").val();
		var  email=$(".zhuce2 .email_email").val();
		var  password=$(".zhuce2 .email_password1").val();
		var str=getCookie("phone_yanzheng");
			str+=(str!=""?",":str)+"{"+"username:'"+username+"',"+"password:'"+password+"',"+"email:'"+email+"'}";
			setCookie("phone_yanzheng",str,10);
			$("#tanchuceng111").show();
		
		}
		
	})
	//随机验证码
		$(".zhuce1 .yanzhengma").click(function(){
			 	var suiji=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
      	var str="";
      function suijiyan(suiji_number){
	      for(var i=0;i<suiji_number;i++){
	      		var a=Math.floor(Math.random()*suiji.length)
	      			
	      				str+=suiji[a];
	      }
      }
     	 suijiyan(4);
		
		$(this).html(str);
		
		
		})	
	
})
