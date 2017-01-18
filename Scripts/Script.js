$(document).ready(function () {
    var menu = $('nav');
    var origOffsetY = menu.offset().top;

    function pushFooterDown() {
        if ($('html').height() < $(window).height()) {
            $('.footer').addClass('pushTOBottom');
        }
        else {
            $('.footer').removeClass('pushTOBottom');
        }
    }

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('nav').addClass('navbar-fixed-top');
            $('.container').addClass('container-padding');
        } else {
            $('nav').removeClass('navbar-fixed-top');
            $('.container').removeClass('container-padding');
        }


    }


    pushFooterDown();
    document.onscroll = scroll;
    window.onresize = pushFooterDown;
});


