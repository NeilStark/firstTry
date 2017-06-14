//nav
$(".nav ul li").click(function(){
	var $num = $(this).index();
	
	$(".nav ul li").eq($num).addClass("clicked").siblings().removeClass();
})
//banner
var $wid=$(".banner ul li").width();
// $(".banner ul").width($wid*$(".banner ul li").length);
var $i=0;
$(".banner #right").click(function(){
	$i++;
	if($i>3){
		$(".banner ul").css("left","0").stop().animate({
			left:"-"+$wid+"px"
		})
		$i=1;
	}else{
		$(".banner ul").stop().animate({
		left:"-"+$wid*$i+"px"
	})
	}

	if($i==3){
		$(".banner .rect span").eq(0).addClass("active").siblings().removeClass();
	}else{
		$(".banner .rect span").eq($i).addClass("active").siblings().removeClass();
	}
	
})
$(".banner #left").click(function(){
	$i--;
	var $leftFar=-2*$wid+"px";
	var $leftFarer=-3*$wid+"px";
	if($i<0){
		$(".banner ul").css("left",$leftFarer).stop().animate({
			left:$leftFar
		})
		$i=2;
	}else{
		$(".banner ul").stop().animate({
		left:"-"+$i*$wid+"px"
		})
	}

	$(".banner .rect span").eq($i).addClass("active").siblings().removeClass();
})
$(".banner .rect span").click(function(){
	var $num=$(this).index();
	var $leftFar=-2*$wid+"px";
	var $leftFarer=-3*$wid+"px";
	if($num==0&&($(".banner ul").css("left")==$leftFar)){
		$i=2;
		$(".banner #right").click();
		// $(".banner ul").css("left","0")
	}else if($(".banner ul").css("left")==$leftFarer){
		$(".banner ul").css("left","0")
		$i=$num-1;
		$(".banner #right").click();	
	}else{
		$i=$num-1;
		$(".banner #right").click();	
	}	
})
var time
function paly(){
	time=setInterval(function(){
		$(".banner #right").click()
	},5000)
}
$(".banner").mouseover(function(){
	clearInterval(time);
})
$(".banner").mouseout(function(){
	paly();
})
paly();

$(".case ul li").click(function(){
	$(this).addClass("selected").siblings().removeClass("selected");
	var $num=$(this).index();
	$(".case .container .bot").eq($num).addClass("showbot").siblings().removeClass("showbot");
})

$(".case .container .bot>div").mouseover(function(){
	// alert(1)
	var $num=$(this).index();
	$(this).children(".eyes").stop().animate({
		bottom:"0px"
	},1000)
	$(this).siblings().children(".eyes").stop().animate({
			bottom:"-46px"
	},1000)
})

$('.submenu .right .back_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

