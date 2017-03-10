$(function () {
    $('.intro li').on('mouseenter', function (event) {
        var left = this.offsetLeft,
            mouseX = event.clientX,
            blockLeft = $('.intro')[0].offsetLeft,
            mouseXOff = mouseX - blockLeft - 30,
            rightAnimateOver = {'left': left + 30},
            leftAnimateOver = {'left': left - 30},
            $bottomLine = $('.bottom-line');

        $bottomLine.stop(true);

        if (left >= mouseXOff) {
            $bottomLine.animate(rightAnimateOver, 300);
        } else {
            $bottomLine.stop(true).animate(leftAnimateOver, 300);
        }

        $bottomLine.animate({'left': left}, 200);
    });

    $('.sidebar li').click(function () {
        $('.sidebar li').removeClass('active');
        $(this).addClass('active');
    });
});

+function ($) {

    var $container, width, height, grain, index;

    function initial(url, grain) {
        var $blockImg = $('<div class="block-img"></div>'),
            $partImg,
            partImgHeight = height / grain,
            i = 0;

        for (; i < grain; i++) {
            $partImg = $('<div class="part-img"></div>');
            $partImg.css({
                'height': partImgHeight,
                'width': 0,
                'background': "url(" + url + ") no-repeat",
                'background-size': width + 'px ' + height + 'px',
                'background-position-y': -i * partImgHeight
            }).appendTo($blockImg);
        }

        return $blockImg;
    }

    function scrollAndHide($blockImg, time) {

        var $partImages = $blockImg.find('.part-img'),
            speed = 0,
            speedIncrease = time / grain;

        $partImages.each(function () {
            $(this).animate({'width': 0, 'opacity': '0'}, speed, function () {
            });
            speed += speedIncrease;
        });
    }

    function scrollAndShow($blockImg, time) {
        var $partImages = $blockImg.find('.part-img'),
            speed = 0,
            speedIncrease = time / grain;
        $partImages.toArray().reverse().forEach(function (item) {
            $(item).animate({width: width, 'opacity': '1'}, speed);
            speed += speedIncrease;
        });
    }


    function carousel(config) {

        var urls = config.urls,
            time = config.time,
            delay = config.delay,
            totalTime = time + delay,
            num = urls.length - 1,
            index = num,
            $blockImg,
            $blockImages,
            $animatedImg;

        $container = $(this);
        width = $(this).width();
        height = $(this).height();
        grain = config.grain;

        $container.css('position', 'relative');

        urls.forEach(function (url, i) {
            $blockImg = initial(url, grain);
            $blockImg.css({
                position: 'absolute',
                left: 0,
                top: 0
            });
            $blockImg.appendTo($container);
            if (i == 0) {
                $blockImg.find('.part-img').css('width', width);
            }
        });

        $blockImages = $container.find('.block-img');

        setInterval(function () {

            var $next = $blockImages.eq(index - 1);

            $animatedImg = $blockImages.eq(index);

            scrollAndShow($next, time);
            scrollAndHide($animatedImg, time);

            index--;

            if (index < 0) {
                index = num;
            }
        }, totalTime);
    }

    $.fn.carousel = carousel;
}(jQuery);

$('.banner').carousel({
    urls: ["images/banner.jpg", "images/red.jpg", "images/orange.jpg", "images/yellow.jpg", "images/blue.jpg"],
    time: 1500,
    delay: 2000,
    grain: 15
});

$('.blog-pic-list img').mouseenter(function () {
    var description = $(this).data('name');
    $('.describe').text(description);
});




