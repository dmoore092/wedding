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

    $("#myCarousel").lightSlider({
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
        responsive : [{
            breakpoint:800,
            settings: {
            item:1,
            slideMove:1,
            slideMargin:6,
            }
        }],
    });
}




