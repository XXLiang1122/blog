//随机生成25个小方块
(function(){
    for (var i = 0; i < 25; i++) {
        var l = Math.floor(Math.random() * 550),
            t = Math.floor(Math.random() * 150),
            r = Math.floor(Math.random() * 90);

        var $e = $('<div></div>').css({
            'left': l + 'px',
            'top': t + 'px',
            'transform': 'rotate(' + r + 'deg)'
        });

        $('.boxes').append($e);
    }
})();

var judge = true;
var bodyWidth = window.screen.availWidth,
    bodyHeight = window.screen.availHeight;
    offsetLeft = Math.floor((bodyWidth - 900)/2),
    offsetTop = Math.floor((bodyHeight - 700)/3);

var $container = $('.container'),
    $close = $container.find('.close'),
    $list = $('.left-list').find('li'),
    $div = $('.container>div'),
    $boxes = $('.boxes'),
    $box = $boxes.find('div'),
    $blogList = $('.blog-home').find('a'),
    $frame = $('.frame'),
    $return = $('.return'),
    $bgImg = $('.bg-img'),
    $body = $('body');

$container.css({'left': offsetLeft, 'top': offsetTop});

//小方块拼凑动画
$list.click(function () {
    var count = 0,
        $index = $(this).index();

    $div.eq($index).show().siblings('div').hide();

    if (judge) {
        $box.each(function(i, e) {
            var newLeft = offsetLeft + 180 * (i % 5),
                newTop = offsetTop + 140 * Math.floor(i / 5);

            $(e).animate({
                left: newLeft + 'px',
                top: newTop + 'px',
                width: '180px',
                height: '140px',
                opacity: '0.8',
            }, 800, function () {
                $(e).addClass('rotate-zero');
                count++;
                if (count > 24) {
                    setTimeout(function () {
                        $container.show();
                        $boxes.hide();
                    }, 300);
                }
            });
        });
    }

    judge = false;
});

//关闭动画
$close.click(function () {
    $container.hide();
    $boxes.show();
    $box.removeClass('rotate-zero');

    $box.each(function (i, e) {
        var l = Math.floor(Math.random() * 550),
            t = Math.floor(Math.random() * 150),
            r = Math.floor(Math.random() * 90);

        $(e).animate({
            left: l + 'px',
            top: t + 'px',
            transform: 'rotate(' + r + 'deg)',
            width: '40px',
            height: '40px',
            opacity: '0.2'
        }, 800);
    });

    judge = true;
});

//博客点击跳转iframe
$blogList.click(function(event) {
    var $href = $(this).attr('href');
    event.preventDefault();
    $frame.attr('src', $href).show().siblings().hide();
    $return.show();
});

//返回上一页
$return.click(function(event) {
    $frame.hide().siblings().show();
    $(this).hide();
});

// 背景图片
var bgImg = ['bg-1.png','bg-2.png','bg-3.png','bg-4.png','bg-5.png','bg-6.png','bg-7.png','bg-8.png'];
$bgImg.click(function () {
        var $index = $(this).index();

        $body.css('background-image', 'url(img/' + bgImg[$index] + ')');
    });