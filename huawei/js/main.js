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

        //判断是否处于登录状态
        var uName = localStorage.getItem("HWuName");
        if (uName) { //如果是从登录状态跳转过来的
            $(".s-main>ul>li").eq(0).remove();
            $(".s-main>ul>li").eq(0).remove();
            $("<li><a href='#'>" + uName + ",欢迎您！</a></li>").prependTo(".s-main>ul")

        } else {//加载登录模块
            var login = $(".login");
            login.click(function () {
                lg.add("css/login.css", "php/login.php");
            })
        }

        //点击隐藏上面的广告
        $("#close_advert").click(function () {
            $("#advert").hide();
        });

        //轮播图
        var banImg = $("#banner>.ec-slider>.ec-slider-img>li");
        var banNav = $("#banner>.ec-slider>.ec-slider-nav-1>li");
        ban.startMove(banImg, banNav, "current");


        //搜索框获取焦点及失去焦点事件
        var searchKw = $("#search-kw");
        var searchBarKey = $(".search-bar-key");
        searchKw.focusin(function () { searchBarKey.hide(); });
        searchKw.blur(function () { searchBarKey.show(); });


    });
});