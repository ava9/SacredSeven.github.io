$(function() {
    // "use strict";

    // ===== Preloader
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // ===== Mobile Menu
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });

    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    //===== Sticky navigation when scroll up
    $(document).scroll(function() {
        $(".navigation").toggleClass('sticky', $(this).scrollTop() > $(window).height());
        $(".navbar-brand").toggleClass('d-none', $(this).scrollTop() <= $(window).height());
        $(".page-scroll").toggleClass('nav-link-scroll', $(this).scrollTop() > $(window).height());
        if ( $(window).width() < 1024 ) {
            $(".navbar-btn").toggleClass('d-none d-lg-block', $(this).scrollTop() > $(window).height());
        }
    });

    //===== Section Menu Active
    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 90;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });

    // ===== Slick Testimonial
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});