$(document).ready(function() {
	//logoright
	$("#logo_top li").mouseenter(function() {
			$(this).children("em").show();
		}).mouseleave(function() {
			$(this).children("em").hide();
		}).click(function() {
			var s = $(this).children("span").html();
			$(this).children("span").html($(this).children("em").html());
			$(this).children("em").html(s);
		})
		//top cuxiao
		$("#cuxiao").mouseenter(function(){
			$(".cuxiao_child").fadeIn(200);
		}).mouseleave(function(){
			$(".cuxiao_child").fadeOut(200);
		})
		//navlist
	$("#nav_right li").mouseenter(function(e) {
			var mousex = e.pageX;
			var s = $("#nav_right").offset().left;
			var offsetx = mousex - s
			var u = $(this).offset().left;
			var i = mousex - u;
			c = offsetx - i + 10;
			$("#nav_right_dibu").animate({
				"left": c
			}, 50);
		}).parent().mouseleave(function(a) {
			$("#nav_right_dibu").animate({
				"left": 0
			}, 500);
		})
		//banner lubo
	var index = 1;

//	setInterval(function() {
//		$("#banner_center .bannerc_top").find("img").attr("src", "img/bannercenter" + index + ".gif").animate({
//			"left": "0",
//			"opacity": 1
//		}, 1000).animate({
//			"opacity": 0
//		}, 3000);
//		if(index > 3) {
//			index = 0;
//		}
//		index++;
//	}, 4000)
var bannerc_top_next=0;
var bannerc_top;
setInterval(function(){
	bannerc_top=bannerc_top_next;
	bannerc_top_next++;
	if(bannerc_top_next>3){
		bannerc_top_next=0;
	}
//	console.log($(".bannerc_top").find("img").eq(0));
	$(".bannerc_top").find("img").eq(bannerc_top).fadeOut(2000);
	$(".bannerc_top").find("img").eq(bannerc_top_next).fadeIn(2000);

},4000)



	//bannerlist
	$("#banner_left li a").mouseenter(function() {

		$(this).next().show().parent().nextAll().children(".bannerleft_show").hide();
	})

	$("#banner_left li").mouseleave(function() {
			$(this).find(".bannerleft_show").hide();
		})
		//bannerc_bottom
	$(".bannerc_bottom a").mouseenter(function() {
		$(".bannerc_bottom a").append("<div class='banner_fugaiceng'></div>");
		$(this).find(".banner_fugaiceng").remove();
	}).mouseleave(function() {
		$(".bannerc_bottom a").find(".banner_fugaiceng").remove();
	})
//banner 中间的拉、图
	var bannerc_position = 0;
	$(".bannerc_bottom_div").mouseenter(function() {
		$(".banner_span1").show();
		$(".banner_span2").show();
		if(bannerc_position <= -1458) {
			$(".banner_span1").hide();
		}
		if(bannerc_position >= 0) {
			$(".banner_span2").hide();
		}
	}).parent().mouseleave(function(){
		$(".banner_span1").hide();
		$(".banner_span2").hide();
	})
	//span dianji
	$(".banner_span1").on("click", function() {
		bannerc_position -= 729;
		$(".bannerc_bottom_div").animate({
			"left": bannerc_position
		}, 1000)
		$(".banner_span2").show();
		if(bannerc_position <= -1458) {
			$(this).hide();
		}
	})

	$(".banner_span2").on("click", function() {
		$(".banner_span1").show();
		bannerc_position += 729;
		$(".bannerc_bottom_div").animate({
			"left": bannerc_position
		}, 1000)
		if(bannerc_position >= 0) {
			$(this).hide();
		}
	})

	//			
	//		}).mouseleave(function(){
	//			$(".banner_span1").hide();
	//		})

	//banner right
	setInterval(function() {
		var timer = new Date();
		var overtimer = new Date("2017-12-12");
		var
			only = Math.round(overtimer.getTime() - timer.getTime()) / 1000;
		var day = Math.floor(only / 3600 / 24);
		var hours = Math.floor((only - day * 3600 * 24) / 3600);
		var minutes = Math.floor((only - day * 3600 * 24 - hours * 3600) / 60);
		var second = Math.round(only - day * 3600 * 24 - hours * 3600 - minutes * 60)
		$(".time").children().eq(0).html(day);
		$(".time").children().eq(1).html(hours);
		$(".time").children().eq(2).html(minutes);
		$(".time").children().eq(3).html(second);
	}, 1000)

	//banner bottom
	$(".bannerr_bottom").find("button").eq(0).mouseenter(function() {
		$(".talk2").hide();
		$(".talk").show();
		$(this).css("background", "#efefef");
		$(".bannerr_bottom").find("button").eq(1).css("background", "#dcdcdc");
	}).mouseleave(function() {

	})
	$(".bannerr_bottom").find("button").eq(1).mouseenter(function() {
		$(".talk").hide();
		$(".talk2").show();
		$(this).css("background", "#efefef");
		$(".bannerr_bottom").find("button").eq(0).css("background", "#dcdcdc");
	}).mouseleave(function() {})

	//hot
	$("#hot").find("li").mouseenter(function() {

		$(this).css({
			"color": "red",
			"border-bottom": "3px solid red"
		})
	}).mouseleave(function() {
		$(this).css({
			"color": "#333",
			"border": 0
		})
	})
	$("#hot").find("li").eq(0).mouseenter(function() {
		$(".hot_bottomsame").css("display", "none");
		$(".hot_bottom0").css("display", "block").animate({
			"opacity": 0
		}, 30).animate({
			"opacity": 1
		}, 1000);;
	})
	$("#hot").find("li").eq(1).mouseenter(function() {
		$(".hot_bottomsame").css("display", "none");
		$(".hot_bottom1").css("display", "block").animate({
			"opacity": 0
		}, 30).animate({
			"opacity": 1
		}, 1000);;

	})
	$("#hot").find("li").eq(2).mouseenter(function() {
		$(".hot_bottomsame").css("display", "none");
		$(".hot_bottom2").css("display", "block").animate({
			"opacity": 0
		}, 30).animate({
			"opacity": 1
		}, 1000);;

	})
	$("#hot").find("li").eq(3).mouseenter(function() {
			$(".hot_bottomsame").css("display", "none");
			$(".hot_bottom3").css("display", "block").animate({
				"opacity": 0
			}, 30).animate({
				"opacity": 1
			}, 1000);

		})
		//street_lunbo
	var streetlunbo = 0;
	setInterval(function() {
		streetlunbo -= 254;
		$(".street_luobo").animate({
			"left": streetlunbo
		}, 800);
		if(streetlunbo < -780) {
			$(".street_luobo").animate({
				"left": 0
			}, 1);
			streetlunbo = 0;
		}
	}, 2000)
	$("#street_right p span").mouseover(function() {
		$(this).css({
			"width": "90px",
			"background": "#000"
		});
		var index = $(this).attr("index");
		if(index == 0) {
			$(".street_luobo").css("left", "0");
		}
		if(index == 1) {
			console.log(1)
			$(".street_luobo").css("left", "-254px");
		}
		if(index == 2) {
			$(".street_luobo").css("left", "-508px");
		}
		if(index == 3) {
			$(".street_luobo").css("left", "-752px");
		}
	}).mouseleave(function() {
		$(this).css({
			"width": "60px",
			"background": "#59505a"
		});
	})

	//gift left shechipin
	var gift = 0;
	var gift_index = 0;

	var giftlefttimer = setInterval(function() {
		gift -= 343;
		$(".shechipin1_position").animate({
			"left": gift
		}, 2000);
		if(gift < -1029) {
			$(".shechipin1_position").animate({
				"left": 0
			}, 1);
			gift = 0;
		}
		$(".shechipin").find("span").css("width", "45px");
		$(".shechipin").find("span").eq(gift_index).css("width", "75px");
		gift_index++;
		if(gift_index > 3) {
			gift_index = 0;
		}
	}, 3000)
	$(".shechipin").find("span").mouseover(function() {
		clearInterval(giftlefttimer);
		$(this).css("width", "75px");
		var index = $(this).attr("index");
		$(".shechipin1_position").css("left", -index * 343);
	}).mouseleave(function() {
		$(this).css("width", "45px");
	})
	$(".shechipin").mouseleave(function() {
			giftlefttimer = setInterval(function() {
				gift -= 343;
				$(".shechipin1_position").animate({
					"left": gift
				}, 2000);
				if(gift < -1029) {
					$(".shechipin1_position").animate({
						"left": 0
					}, 1);
					gift = 0;
				}
				$(".shechipin").find("span").css("width", "45px");
				$(".shechipin").find("span").eq(gift_index).css("width", "75px");
				gift_index++;
				if(gift_index > 3) {
					gift_index = 0;
				}
			}, 3000)
		})
		//giftleft li
	$(".giftli").find("li").mouseenter(function() {
			$(".giftli").find("li .giftli_div").hide();
			$(this).find(".giftli_div").show();
		}).mouseleave(function() {
			$(".giftli").find("li .giftli_div").hide();
		})
		//giftleftul 
	$(".giftul_dong_left").find("span").click(function() {
		$(this).parent().parent().animate({
			"left": "-115px"
		}, 1000);
	})
	$(".giftul_dong_right").find("span").click(function() {
		$(this).parent().parent().animate({
			"left": "0px"
		}, 1000);
	})
	$(".giftul_dong_left").mouseenter(function() {
		$(this).find("span").show();
	}).mouseleave(function() {
		$(this).find("span").hide();
	})
	$(".giftul_dong_right").mouseenter(function() {
			$(this).find("span").show();
		}).mouseleave(function() {
			$(this).find("span").hide();
		})
		//gift_right fugaiceng
	$(".samehot").mouseenter(function() {
			$(".samehot").append("<div class='gift_rightfugaiceng'></div>");
			$(this).find("div").remove();
		}).mouseleave(function() {
			$(".samehot").find("div").remove();
		})
		//gift_bottom fugaiceng
	$(".gift_bottomsame").children().mouseenter(function() {
		$(".gift_bottomsame").children().append("<div class='gift_bottom_fugaiceng'></div>");
		$(this).find("div").remove();
	}).mouseleave(function() {
		$(".gift_bottom_fugaiceng").remove();
	})

	//footer
	$(".erweima a:eq(0)").mouseover(function() {

		$(".erweima .footerimg1").hide();
		$(".erweima .footerimg2").show();
	})
	$(".erweima a:eq(1)").mouseover(function() {
		$(".erweima .footerimg1").show();
		$(".erweima .footerimg2").hide();
	})
//right menu

	$("#right_menu").children().eq(0).click(function(){
		$("body,html").animate({"scrollTop":"0px"});
	})
	$("#right_menu").children().eq(1).click(function(){
		$("body,html").animate({"scrollTop":"600px"});
	})
	$("#right_menu").children().eq(2).click(function(){
		$("body,html").animate({"scrollTop":"1300px"});
	})
	$("#right_menu").children().eq(3).click(function(){
		$("body,html").animate({"scrollTop":"3700px"});
	})
	$("#right_menu").children().eq(4).click(function(){
		$("body,html").animate({"scrollTop":"4700px"});
	})
	setInterval(function(){
		if($(document).scrollTop()>100){
		$(".top_menu").show();
	}else{
		$(".top_menu").hide();
	}
	},30)
	
	

	$("#daohuang_right").mouseenter(function(){
		$("#right_menu").animate({"right":0},1000);
		
	}).parent().mouseleave(function(){
		$("#right_menu").animate({"right":"-40px"},500);
	})
	
	//购物车中的数量
	var shop_number=0;
	var arr=eval("["+getCookie("shopcar")+"]");
	for(var i in arr){
		shop_number=i;
	}
	console.log(Number(shop_number))
	if(arr.length==0){
		$(".shopcar b").html(Number(shop_number));
	}else{
	$(".shopcar b").html(Number(shop_number)+1);		
	}

	
	
	
})