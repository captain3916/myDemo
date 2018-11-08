//引入第三方模块
requirejs.config({
    "paths": {
        "jquery": "jquery.min", //jquery库
        "banner": "bannerOpacity", //轮播图模块
        "login": "login" //登录模块 
    }
})


//依赖注入并编写代码
requirejs(["jquery", "banner", "login"], function ($, ban, lg) {

    //页面加载后
    $(function () {
        //点击隐藏上面的广告
        $("#close_advert").click(function () {
            $("#advert").hide();
        });

        //轮播图
        var banImg = $("#banner>.ec-slider>.ec-slider-img>li");
        var banNav = $("#banner>.ec-slider>.ec-slider-nav-1>li");
        ban.startMove(banImg, banNav, "current");


        //点击登录
        var login = $(".login");
        login.click(function () {
            lg.add();//加载登录模块
        })
    });
});