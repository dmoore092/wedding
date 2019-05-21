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
	// $("#myCarousel").flexisel({
    //     visibleItems: 4,
    //     itemsToScroll: 3,
    //     animationSpeed: 400,
    //     infinite: true,
    //     navigationTargetSelector: null,
    //     autoPlay: {
    //     enable: true,
    //     interval: 5000,
    //     pauseOnHover: true
    //     },
    //     responsiveBreakpoints: { 
    //     portrait: { 
    //         changePoint:480,
    //         visibleItems: 1,
    //         itemsToScroll: 1
    //     }, 
    //     landscape: { 
    //         changePoint:640,
    //         visibleItems: 2,
    //         itemsToScroll: 2
    //     },
    //     tablet: { 
    //         changePoint:768,
    //         visibleItems: 3,
    //         itemsToScroll: 3
    //     }
    //     }
    // });
}




