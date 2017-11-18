(function(){
    //随机生成25个小方块
    for (var i = 0; i < 25; i++) {
        var l = Math.floor(Math.random() * 700),
            t = Math.floor(Math.random() * 200),
            r = Math.floor(Math.random() * 90);

        var $e = $('<div></div>').css({
            'left': l + 'px',
            'top': t + 'px',
            'transform': 'rotate(' + r + 'deg)'
        });

        $('.boxes').append($e);
    }
})();

//小方块拼凑动画
$('.left_list ul li').click(function () {
    var $box = $('.boxes div');

    for (var i = 0; i < 25; i++) {
        var new_l = 300 + 120 * (i % 5),
            new_t = 80 + 120 * Math.floor(i / 5);

        $box[i].animate({
            left: new_l + 'px',
            top: new_t + 'px'
        });
    }
});