//切换控制
(function () {
    $('.tab ul li').on('tap', function () {
        var tabIndex = $('li.active').index();
        var currentIndex = $(this).index();

        if (tabIndex < currentIndex) {
            $('.tab ul i').css('left', (5.3 + (tabIndex + currentIndex - tabIndex) * 25) + '%');
            $('.content-body').css('left', -(tabIndex + currentIndex - tabIndex) * 100 + '%');
            $('html').scrollTop(0);
        }

        if (tabIndex > currentIndex) {
            $('.tab ul i').css('left', (5.3 + (tabIndex - tabIndex + currentIndex) * 25) + '%');
            $('.content-body').css('left', -(tabIndex - tabIndex + currentIndex) * 100 + '%');
            $('html').scrollTop(0);
        }

        $(this).addClass('active').siblings().removeClass('active');
    });

    $('body')
        .on('swipeLeft', function () {
            var tabIndex = $('li.active').index();

            if (tabIndex < 3) {
                $('.active').next('li').addClass('active').siblings().removeClass('active');
                $('.tab ul i').css('left', (5.3 + (tabIndex + 1) * 25) + '%');
                $('.content-body').css('left', -(tabIndex + 1) * 100 + '%');
                $('html').scrollTop(0);
            }
        })
        .on('swipeRight', function () {
            var tabIndex = $('li.active').index();

            if (tabIndex > 0) {
                $('.active').prev('li').addClass('active').siblings().removeClass('active');
                $('.tab ul i').css('left', (5.3 + (tabIndex - 1) * 25) + '%');
                $('.content-body').css('left', -(tabIndex - 1) * 100 + '%');
                $('html').scrollTop(0);
            }
        });
})();

