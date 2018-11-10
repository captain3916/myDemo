//引入第三方模块
requirejs.config({
    "paths": {
        "jquery": "jquery.min", //jquery库
        "login": "login", //登录模块
        "elg": "enlarge" //放大镜模块
    }
})


//依赖注入并编写代码
requirejs(["jquery", "login", "elg"], function ($, lg, elg) {

    //页面加载后
    $(function () {

        //判断是否处于登录状态
        var uName = localStorage.getItem("HWuName");
        if (uName) { //如果是从登录状态跳转过来的
            $(".s-main>ul>li").eq(0).remove();
            $(".s-main>ul>li").eq(0).remove();
            $("<li><a href='#'>" + uName + ",欢迎您！</a></li>").prependTo(".s-main>ul")

        } else {
            //点击登录
            var login = $(".login");
            login.click(function () {
                lg.add("../css/login.css", "../php/login.php");//加载登录模块
            })
        }

        //搜索框获取焦点及失去焦点事件
        var searchKw = $("#search-kw");
        var searchBarKey = $(".search-bar-key");
        searchKw.focusin(function () { searchBarKey.hide(); });
        searchKw.blur(function () { searchBarKey.show(); });

        //根据跳转过来的信息加载产品图片




        //下面这个功能需要在图片加载之后再调用！！！
        //初始化放大镜功能
        var obj = {
            smallImg: $(".pro-area"),
            smallArea: $("#small-area"),
            bigImg: $("#big-img"),
            bigArea: $("#big-area"),
            proItems: $("#pro-items"),
            proPrev: $("#pro-prev"),
            proNext: $("#pro-next"),
        }
        elg.init(obj).navMove().toPrev().toNext();

        //商品数量增加或减少
        var addCount = $("#addCount");
        var reduceCount = $("#reduceCount");
        var proCount = $("#pro-count");
        addCount.click(function () {
            var num = +proCount.val();
            if (num) proCount.val(++num);
        });

        reduceCount.click(function () {
            var num = +proCount.val();
            if (num >= 2) proCount.val(--num);
        });


        //添加到购物车

    });
});