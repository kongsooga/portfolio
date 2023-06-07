$(function () {
    let menu = $('.menu li');
    menu.click(function () {
        let menuIndex = $(this).index();

        let contPage = $('.cont').eq(menuIndex);
        let contPageTop = contPage.offset().top;
        //console.log(menuIndex);
        $('html, body').animate({
            scrollTop: contPageTop
        }, 700, 'easeInOutSine')
    })//menu.click

    let hd = $('.menu');
    let headerTop = hd.offset().top;
    console.log(headerTop)
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();

        if (headerTop < scrollBar) {
            hd.addClass('on');
        } else {
            hd.removeClass('on');
        }

        if ($('.home').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(0).addClass('on');
        } else {
            menu.removeClass('on');
        }
        if ($('.about').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(1).addClass('on');
        }
        if ($('.pub').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(2).addClass('on');
        }
        if ($('.disign').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(3).addClass('on');
        }
        if ($('.contact').offset().top <= scrollBar) {
            menu.removeClass('on');
            menu.eq(4).addClass('on');
        }
    })
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});