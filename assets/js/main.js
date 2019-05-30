window.onload = function() {
    $(function(){
        $('#menu').slicknav({
            closeOnClick: true
        });
    });

    $("a[href='#']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });

    $("#myCarousel1").lightSlider({
        item: 1,
        slideMargin: 10,
        thumbMargin: 10,
        autoWidth: true,
        auto:true,
        loop: true,
        slideEndAnimation: true,
        cssEasing: 'easeinOutBounce',
        easing: 'linear',
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        pauseOnHover: true,
    });

    $("#myCarousel2").lightSlider({
        item: 4,
        slideMargin: 10,
        thumbMargin: 10,
        autoWidth: true,
        auto:true,
        loop: true,
        slideEndAnimation: true,
        cssEasing: 'easeinOutBounce',
        easing: 'linear',
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        pauseOnHover: true,
    });
}




