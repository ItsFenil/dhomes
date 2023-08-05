(function ($) {
    "use strict";
    // counter up
    $('.counter').counterUp({
        time: 2000
    });
    // services one carousel
    $('.service-one-card-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        stagePadding: 15,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    // blogs one carousel
    $('.blogs-one-cards-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        stagePadding: 5,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    // blogs two carousel
    $('.blogs-two-cards-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 23,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    // Service two carousel
    $('.service-two-cards-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        stagePadding: 120,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            580: {
                items: 2,
                stagePadding: 0
            },
            990: {
                items: 1,
                stagePadding: 120
            },
            1300: {
                items: 2
            }
        }
    })
    // service three carousel
    $('.service-three-cards-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    // Testimonial one carousel
    $('.testimonial-one-slider-wrapper .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // banner three carousel
    $('.banner-three-carousel .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        dots: false,
        navContainer: '.owl-nav-three',
        stagePadding: 0,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // Title carousel
    $('.title-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 7000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            578: {
                items: 1
            },

        }
    });
    // Testimonial one carousel
    $('.team-one-card-carousel .owl-carousel').owlCarousel({
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
        loop: true,
        margin: 30,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        stagePadding: 8,
        dots: false
    });
    // Video modal
    $(".js-video-button").modalVideo();
    // initialize AOS
    AOS.init();
    // Preloader
    $(window).preloader({
        delay: 1000,
    });
    // animated heading
    $(function () {
        $('.animate-heading').animatedHeadline(
            {
                animationType: 'clip'
            }
        );
    })
    // cursor
    $('.appear-text').viewportChecker({
        classToAdd: 'visible',
        offset: 100,
        callbackFunction: function (elem, action) {
            if (action === 'add') {
                elem.textyle(
                    {
                        duration: 100,
                        easing: 'swing',
                        callback: function () {
                            $(this).css({
                                color: '#101010',
                                transition: '.1s',
                                // more css here
                            });
                        },
                    }
                );
            }
        }
    });
    $('.appear-text-dark').viewportChecker({
        classToAdd: 'visible',
        offset: 100,
        callbackFunction: function (elem, action) {
            if (action === 'add') {
                elem.textyle(
                    {
                        duration: 20,
                        easing: 'swing',
                        callback: function () {
                            $(this).css({
                                color: '#fff',
                                transition: '.1s',
                            });
                        },
                    }
                );
            }
        }
    });

    // expandable menu
    $(function () {
                var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
    
            var dropdownlink = this.el.find('.dropdownlink');
            dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
                this.dropdown
            );
        };
    
        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el,
                $this = $(this),
                $next = $this.next();
    
            $next.slideToggle();
            $this.parent().toggleClass('open');
    
            if (!e.data.multiple) {
                $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
            }
    
        };
    
    
        //Set Object
        var accordion = new Accordion($('.accordion-menu'), false);
    });
    /* ======== Preloader ======== */
    $(window).load(function() {
        var preloaderDelay = 500,
                preloaderFadeOutTime = 1000;

        function hidePreloader() {
            var loadingAnimation = $('#preloader-inner'),
                    preloader = $('#preloader');
            loadingAnimation.fadeOut();
            preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();
    });

    


})(jQuery);

