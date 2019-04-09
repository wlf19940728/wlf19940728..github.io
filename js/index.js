/**
 * Created by Administrator on 2017/9/14.
 */
    var index=0;
    var W=0

    setBannerWidth();//页面首次加载时 初始化 每个部分的 宽度好高度值
    $(window).resize(function () {//窗口改变时 重置各个部分的宽度 高度值
        setBannerWidth()
    });

    $('.banner_nav li').click(function(){
        clearInterval(t);
        index=$(this).index();
        asd(index);
        t=setInterval(aaa,3000);
    });
    var t=setInterval(aaa,3000);
    function asd(index){
        $('.banner_nav li').eq(index).addClass('active').siblings('li').removeClass('active');
        $('.banner_list').animate({left:-(W*index)+'px'},1000)
    }
    function aaa(){
        index++;
        if (index==3){
            $('.banner_list').animate({left: -W * index + "px"},1000).animate({left: 0 + "px"},0);
            index=0;
            $('.banner_nav li').eq(0).addClass("active").siblings().removeClass("active")
        }else {
            asd(index)
        }
    }

    function setBannerWidth() {
        var winW = $(window).width();//获取窗口的宽度
        if (winW >= 1183) {//设置每个轮播块的宽度值
            $('.banner_item').width(1140)
        } else if (winW < 1183 && winW >= 975) {
            $('.banner_item').width(940)
        } else if (winW < 975 && winW >= 768) {
            $('.banner_item').width(720)
        } else if (winW < 768) {
            $('.banner_item').width(winW - 30)
        }
        W=$('.banner_item').width();
        var bannerItemH = $('.banner_item').height();
        console.log(bannerItemH);
        $('.banner').css({height: bannerItemH + "px"});//设置轮播窗口的高度值
        $('.banner_list').css({left: 0 + "px"});//设置轮播列表的 位置
    }






