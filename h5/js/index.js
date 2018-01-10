(function () {
    $('.tap ul li').on('tap', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('body')
        .on('swipeLeft', function () {
            if ($('.active').index() < 3) {
                $('.active').next().addClass('active').siblings().removeClass('active');
            }
        })
        .on('swipeRight', function () {
            if ($('.active').index() > 0) {
                $('.active').prev().addClass('active').siblings().removeClass('active');
            }
        });
})();