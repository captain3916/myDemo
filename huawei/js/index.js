$(function () {
    //点击隐藏上面的广告
    $("#close_advert").click(function () {
        $("#advert").hide();
    });

    //主页轮播
    ; (function () {
        var banIndex = 0;
        var banImg = $("#banner>.ec-slider>.ec-slider-img>li");
        var banNav = $("#banner>.ec-slider>.ec-slider-nav-1>li");
        //定时器
        var banTimer = setInterval(showNext, 2000);

        function showNext() {
            banIndex = ++banIndex % 9;
            showImg();
        };

        function showImg() {
            banImg.eq(banIndex).fadeIn(500).siblings().fadeOut(500);
            banNav.eq(banIndex).addClass("current").siblings().removeClass("current");
        };

        //鼠标移入移出(导航)
        banNav.hover(function () {
            clearInterval(banTimer);
            banIndex = $(this).index();
            showImg();
        }, function () {
            banTimer = setInterval(showNext, 2000);
        });

        //鼠标移入移出(图片)
        banImg.hover(function () {
            clearInterval(banTimer);
        }, function () {
            banTimer = setInterval(showNext, 2000);
        });
    })();





});