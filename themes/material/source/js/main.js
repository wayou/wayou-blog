$(function() {
    var $toc = $("#toc");
    if ( !! $toc.length && screen.width > 999 && $('.mypage').find('h1').length != 0) {
        $("#toc").tocify({
            context: '.mypage',
            // scrollHistory: true,
            theme: 'bootstrap3',
            selectors: 'h1,h2'
        });

        //sticky the toc
        var $window = $(window),
            $stickyEl = $('#toc'),
            elTop;
        $window.scroll(function() {
            elTop = $stickyEl.offset().top;
            $stickyEl.toggleClass('sticky-scroll', elTop > 155);
        });
    }

    //show back to top btn on none mobile screen
    if (screen.width > 500) {
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#gotop:hidden').stop(true, true).fadeIn();
            } else {
                $('#gotop').stop(true, true).fadeOut();
            }
        });
    }

});