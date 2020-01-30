$(function(){
	$('body').on('click','a.ac_slider',function(){
		var index = $(this).index();
		// alert(index);
		/*$('.slider li').eq(index).fadeIn(1000,function(){
		});*///让图片的第n个元素淡入
		$('.slider li').eq(index).fadeIn()
		.siblings().hide();//让图片的第n个元素的兄弟元素隐藏
		$(this).addClass('current')//让当前点击的按钮显示为蓝色
		.siblings().removeClass('current');//让第n个元素的兄弟元素隐藏
		// return;
	});
	/*setInterval(function(){
		if($('.ac_slider').index($('.ac_slider.current'))+1==$('.ac_slider').length){
			$('.ac_slider').eq(0).click();
		}else{
			$('.ac_slider.current').next().click();
		}
	},3000)
}*/
var timer = null;
function _loopli(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      if($('.ac_slider').index($('.ac_slider.current'))+1==$('.ac_slider').length){
            $('.ac_slider').eq(0).click();
           }else{
            $('.ac_slider.current').next().click();
           }
           _loopli();
        },3000)
}
_loopli();    
/*$('.slider').mouseover(function(){clearTimeout(timer)}).mouseout(function(){_loopli()});*/
//点击《《《左翻动  
    $('body').on('click',".ac_prev",function(){
        $('.ac_slider.current').prev().click();
    })
    $('body').on('click',".ac_next",function(){
        $('.ac_slider.current').next().click();
    })
});