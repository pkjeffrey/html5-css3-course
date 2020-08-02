$(document).ready(function() {
    
    /* sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* scroll on button click */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* scroll on navigation click */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
                if (target.length) {
                    $('html, body').animate({scrollTop: target.offset().top}, 1000);
                    return false;
                }
            }
        });
    });

    /* animations on scroll */
    $('.js--wp-1').waypoint(function(_) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {offset: '70%'});

});