(function($) {
    "use strict";
    //Preloader
   jQuery(window).on('load',function () {
        jQuery("#loader").fadeOut();
        jQuery("#mask").delay(500).fadeOut("slow");
		default_isotope_start();
		jQuery('body').addClass( 'apc-doc-ready' );
    });
	
function default_isotope_start(){
	// Isotope
	
    // Packery
	var $container = $('.site-content.blog_layout_masonry, .portfolio_featured_list.masonry_style');
    $container.imagesLoaded(function() {
        // init Isotope
        $container.isotope({
            // options
			itemSelector: '.masonry-item',
            layoutMode: 'masonry'
            
        })
    });

	// Grid 
    var $grid = $('.related_post_list');
    $grid.imagesLoaded(function() {
        // init Isotope
        $grid.isotope({
            // options
            itemSelector: '.fitrow_col',
            layoutMode: 'fitRows',
        })
    });
	// Fit Rows 
    var $grid2 = $('.fitrow_row');
    $grid2.imagesLoaded(function() {
        // init Isotope
        $grid2.isotope({
            // options
            itemSelector: '.fitrow_columns',
            layoutMode: 'fitRows',
        })
    });

	// Packery Code
	var $packerycontainer = $('.packery_style');
	if($('.packery_style').length){
		$packerycontainer.imagesLoaded(function() {
		$('.packery_style').each(function(){
			//alert('hello');
			var $window = jQuery(window);
			var $this = $(this);
			
			if($('.packery_style').length){
				resizeMasonry($this);
			}
			$this.isotope({
				itemSelector: '.packery_item',
				layoutMode: 'masonry',
			});
		
			
			if($('.packery_style').length){
				$window.resize(function() {resizeMasonry($this); 
				});
			}
		});
		})
		
	}	
	
	var portfolio_width;
	function resizeMasonry(container){
		"use strict";
	
		var $window = jQuery(window);
		 portfolio_width = $('.portfolio_featured_container').innerWidth();
		 
		container.width(portfolio_width);
		var largeItemHeight = container.find('li[class*="apcore_shortcode_portfolio_small_squared"]:first img').height();
		var largeWidthItemHeight = container.find('li[class*="apcore_shortcode_portfolio_small_squared"]:first img').height();	
		var double = ($window.innerWidth() > 480) ? 2 : 1 ;
		if(container.hasClass('portfolio_gallery_gutter_on')) {
			var gutter_space = container.data('gutter-space');
			largeItemHeight += gutter_space;
			container.find('li[class*="apcore_shortcode_portfolio_landscape"] img').css('height',(largeWidthItemHeight));
		}
		container.find('li[class*="apcore_shortcode_portfolio_squared"] img, li[class*="apcore_shortcode_portfolio_portrait"] img').css('height',(largeItemHeight*double));
	
		container.isotope({
			masonry: { columnWidth: portfolio_width / 5}
			
		});
	}	
	// Packery Code
	
	}
 
//fadeout loading animation
if ($('.zolo_loading_screen').length > 0) {
    if ($('#ajax-loading-screen[data-effect="standard"]').length > 0) {
        setTimeout(function() {
            $('#ajax-loading-screen').transition({
                'opacity': 0
            }, 500, function() {
                $(this).css({
                    'display': 'none'
                });
            });
            $('#ajax-loading-screen .loading-icon').transition({
                'opacity': 0
            }, 500)
        }, 30);
    }else{
		setTimeout(function(){ 
			$('#ajax-loading-screen:not(.loaded)').addClass('loaded');
			setTimeout(function(){ $('#ajax-loading-screen').addClass('hidden'); },500);
		},150);
	
		//safari back/prev fix
			if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)){
				window.onunload = function(){ $('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ $(this).css({'display':'none'}); }); $('#ajax-loading-screen .loading-icon').transition({'opacity':0},600) };
				window.onpageshow = function(event) {
		    		if (event.persisted) { 
		    			$('#ajax-loading-screen').stop().transition({'opacity':0},800,function(){ 
		    				$(this).css({'display':'none'}); 
		    			}); 
		    			$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600);
		    		}
		    	}
			} else if(navigator.userAgent.indexOf('Firefox') != -1) {
				window.onunload = function(){};
			}
		
		}
		
		$('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not(.portfolio_featured_thumb):not(.ewd-ufaq-post-margin):not(.gallery_thumb):not(.prettyphoto):not(.comment-edit-link):not(.magnific-popup):not(.magnific):not(.meta-comment-count a):not(.comments-link):not(#cancel-comment-reply-link):not(.comment-reply-link):not(#toggle-nav):not(.logged-in-as a):not(.add_to_cart_button):not(.section-down-arrow):not([data-filter]):not(.pp):not([rel^="prettyPhoto"]):not(.pretty_photo):not(.full-link.video_lightbox)').click(function(e){	
						var $targetLocation = $(this).attr('href');
						var $timeOutDur = 0;
						if($targetLocation != '') {

							$('#ajax-loading-screen').addClass('set-to-fade');

							transitionPageStandard();

							setTimeout(function(){
								window.location = $targetLocation;
							},$timeOutDur)							
							return false;
						}					
				});				
				
}
			
function transitionPageStandard(e) {

		if($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
			$('#ajax-loading-screen').removeClass('loaded');
			$('#ajax-loading-screen').addClass('in-from-right');
			setTimeout(function(){
				$('#ajax-loading-screen').addClass('loaded');
			},30);
		} else {
			if($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0) {
				$('#ajax-loading-screen').css('opacity','0').css('display','block').transition({'opacity':'1'},450);
			} else {
				$('#ajax-loading-screen').show().transition({'opacity':'1'},450);
			}
		}
		
		//setTimeout(function(){ $('#ajax-loading-screen .loading-icon').animate({'opacity':1},500); },400);

	}
	
    // YouTube video
    $(window).bind('resize', function() {
        var $player = $('.player');
        var $iframe = $player.find('iframe');
        var width = $player.width();
        var height = $player.height();
        var tarWid = width;
        var tarHei = Math.round(tarWid * 9 / 16);
        if (tarHei < height) {
            tarHei = height;
            tarWid = Math.round(tarHei * 16 / 9);
        }
        var marTop = Math.round((height - tarHei) / 2);
        var marLeft = Math.round((width - tarWid) / 2);
        $iframe.css({
            width: tarWid,
            height: tarHei,
            marginTop: marTop,
            marginLeft: marLeft
        });
    }).triggerHandler('resize');

    //Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });	
    $('.back-to-top,.default_back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });    
	
    // Full Screen Menu
    $(".fullscreen_menu_open_button").click(function(e) {
        $(".full_screen_menu_area").addClass("open");
    });
    $(".fullscreen_menu_close_button").click(function(e) {
        $(".full_screen_menu_area").removeClass("open");
    });
	
	
	// Full Screen Menu for Mobile
	$(".full_screen_menu_open_responsive").click(function(e) {
        $(".full_screen_menu_area_responsive").addClass("open");
    });
    $("#full_screen_menu_close_responsive").click(function(e) {
		$("#nav_toggle").removeClass('active');
        $(".full_screen_menu_area_responsive").removeClass("open");
    });


    // Extended Sidebar
    var removeClass = true;
    $(".extended_sidebar_button").click(function() {
        $(".extended_sidebar_area").toggleClass('sidemenu_open');
        $(".extended_sidebar_box").toggleClass('extended_sidebar_mask_open');
        removeClass = false;
    });

    $(".extended_sidebar_area").click(function() {
        removeClass = false;
    });

    $("html").click(function() {
        if (removeClass) {
            $(".extended_sidebar_area").removeClass('sidemenu_open');
            $(".extended_sidebar_box").removeClass('extended_sidebar_mask_open');
        }
        removeClass = true;
    });


    // Horizontal Menu & Vertical Menu
	$(".horizontal_menu").click(function() {
		$(".zolo-small-menu").toggleClass('horizontal_menu_open');
	}); 
	  
	$(".vertical_menu").click(function() {
		$(".zolo-small-menu").toggleClass('vertical_menu_open');
	});


	// Vertical menu icon fixed
    $('.site_layout').imagesLoaded(function() {
        var header4headercontentheight = $('.zolo_header4 .zolo-header_section2_background').height();
        $('.zolo_header4 .zolo-header_section2_background .zolo-navigation').height(header4headercontentheight);
    });

    // Top And Nav Full Screen Search 
    $(".full_screen_search_but,#mob_full_screen_search_but").click(function() {
        //$(".search_overlay").addClass("open");
		$(".search_overlay").addClass("open").find('.search-field').focus();
    });
    $(".search_close_but,#mob_search_close_but").click(function() {
        $(".search_overlay").removeClass("open");
    });

	$('.zolo-header-area').on('click', '.nav_search-icon', function(e) {
	  var selector = $('.nav_search_form_area');
	  $(selector).toggleClass('search_area_open').find('.search-field').focus();
	  $('.expanded_search_but .nav_search-icon, .default_search_but .nav_search-icon').toggleClass('search_close_icon');
	  e.preventDefault();
	});
		
	// Header Section One(Top Bar) Expanded search height
	var expanded_searchbox_height = $('.zolo-topbar').height();
	$('.zolo-topbar .zolo_navbar_search.expanded_search_but .nav_search_form_area').height(expanded_searchbox_height);
				
	// Header Section two(Header) Expanded search height
	var expanded_searchbox_height = $('.zolo-header_section2_background').height();
	$('.zolo-header_section2_background .zolo_navbar_search.expanded_search_but .nav_search_form_area').height(expanded_searchbox_height);
	
	// Header Section two(Header) Expanded search height
	var expanded_searchbox_height = $('.navigation-area').height();
	$('.navigation-area .zolo_navbar_search.expanded_search_but .nav_search_form_area').height(expanded_searchbox_height);
	
	// Fixed footer start
	$(document).ready(function() {
		// Footer Fixed(Covers Content)
		var footerheight = $('#footer_fixed').outerHeight(false);
		//alert(footerheight); 
		$('.zolo_footer_fixed_content_mar').css('marginTop', footerheight - 1);
	});
	$(window).on('resize', function() {
		// Footer Fixed(Covers Content)
		var footerheight = $('#footer_fixed').outerHeight(false);
		//alert(footerheight); 
		$('.zolo_footer_fixed_content_mar').css('marginTop', footerheight - 1);
	});
	// Fixed footer end

    //Vertical Header Full Screen Slider opacity
    $(window).scroll(function() {
        $("body.ver_full_screen_slider .banner").css("opacity", 1 - $(window).scrollTop() / 1200);
        $("body.ver_full_screen_slider .headerbackground").css("opacity", 0 + $(window).scrollTop() / 200);
    });
   
	// Sticky Header Start 
	var headerpositionval = js_local_vars.headerpositionval;
	var page_slider_pos = js_local_vars.page_slider_pos;
	//alert(page_slider_pos);
	if (headerpositionval == 'Top') {
		if(page_slider_pos == 'above'){
			 var page_slider_height = $(".layout_design .banner").height();
			}else{
				var page_slider_height = 0;
				}
		//var page_slider_height = 0;	
		var header_sticky_opt = js_local_vars.header_sticky_opt;
		if (header_sticky_opt == 'on') {
			var zolo_topbar_height = Math.abs($(".zolo-topbar").height());
			var zolo_header_height = $(".zolo_header").height();
			var sticky_header_display = js_local_vars.header_sticky_display;
			var header_sticky_effect = js_local_vars.header_sticky_effect;
			if (sticky_header_display == 'section2') {
				var sticky_section = 'sticky_header';
				$('.sticky_header_wrapper').css({
					height: $(".sticky_header_wrapper").height()
				});
			} else if (sticky_header_display == 'section3') {
				var sticky_section = 'sticky_header';
				$('.sticky_header_wrapper').css({
					height: $(".sticky_header_wrapper").height()
				});
			} else {
				var sticky_section = 'sticky_header';
				$('.sticky_header_wrapper').css({
					height: $(".sticky_header_wrapper").height()
				});
			}
			var zolo_header_sticky_position = $('.' + sticky_section).offset();
	
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				
				if ($("body").hasClass("zolo-header-area")) {
					var sticky_position = zolo_header_sticky_position.top;
				}else{
					var sticky_position = 0;
				}
				
				sticky_position = (sticky_position > 0) ? sticky_position : sticky_position + 1 ;
				if (header_sticky_effect == 'slide_down') {
					if (scroll >= sticky_position + zolo_header_height) {
						$('.' + sticky_section).addClass("sticky_slide_down sticky_header_area");
					} else {
						$('.' + sticky_section).removeClass("sticky_slide_down sticky_header_area");
					}
				} else {
					if (scroll >= sticky_position) {
						$('.' + sticky_section).addClass("sticky_header_fixed sticky_header_area");
					} else {
						$('.' + sticky_section).removeClass("sticky_header_fixed sticky_header_area");
					}
				}
				if (header_sticky_effect == 'shrink') {
					if (scroll >= sticky_position + zolo_header_height) {
						$('.' + sticky_section).addClass("sticky-header-shrunk");
					} else {
						$('.' + sticky_section).removeClass("sticky-header-shrunk");
					}
				}
			});
		}
	}

//Mobile Sticky Header
var mobileheadersticky_showhide = js_local_vars.mobileheader_sticky_showhide;
if (mobileheadersticky_showhide == 'on') {
	$('.mobile_sticky_header_wrap').css({
		height: $(".mobile_header_area").height()
	});
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		var mobile_stickyposition = 1
		if (scroll >= mobile_stickyposition) {
				$('.mobile_header_area').addClass("mobile_header_sticky");
			} else {
				$('.mobile_header_area').removeClass("mobile_header_sticky");
			}
	});
}
// Sticky Header End
	
$(document).ready(function(){
		
	// start Form Top Slider Title Bar Top Padding
	var sticky_header_wrapper_height1 = $(".titlebar_position_from_top .zolo-header-area").height();
	$('.pagetitle_parallax').css({
		paddingTop: sticky_header_wrapper_height1
	});
	$('.titlebar_position_from_top .post_layout_style4.title_position_middle .post_title_caption').css({
		paddingTop: sticky_header_wrapper_height1
	});
	
	// Mobile Menu Toggle Start
	$("#nav_toggle").click(function() {
		$(".zolo-mobile-navigation").slideToggle();
	
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	
	});
	// Mobile Menu Toggle End
	
	// Contact form 7 start
	$(".wpcf7-form select, .variations select, select.orderby").wrap("<div class='zt_field'></div>");
	$("<span class='zolo-shortcodes-arrow'></span>").insertAfter(".wpcf7-form select, .variations select, select.orderby");
	$('.wpcf7-form select[multiple="multiple"], .variations select[multiple="multiple"], select[multiple="multiple"].orderby').next(".zolo-shortcodes-arrow").remove();
	// Contact form 7 end
	
	// Blog Style 10 start
	$('.zolo_blog_style10 .zolo_row').each(function(){  
		var highestBox2 = 0;
		$('.zolo_blogcontent', this).each(function(){
			if($(this).height() > highestBox2) 
			   highestBox2 = $(this).height(); 
		});       
		$('.zolo_blogcontent',this).height(highestBox2);
	});
	// Blog Style 10 end
	
	// zilla Likes start
	$('.zilla-likes').on('click',
		function() {
			var link = $(this);
			if(link.hasClass('active')) return false;
		
			var id = $(this).attr('id'),
				postfix = link.find('.zilla-likes-postfix').text();
			
			$.post(zilla_likes.ajaxurl, { action:'zilla-likes', likes_id:id, postfix:postfix }, function(data){
				link.html(data).addClass('active').attr('title','You already like this');
			});
		
			return false;
	});
	
	if( $('body.ajax-zilla-likes').length ) {
		$('.zilla-likes').each(function(){
			var id = $(this).attr('id');
			$(this).load(zilla_likes.ajaxurl, { action:'zilla-likes', post_id:id });
		});
	}
	// zilla Likes end		
	
	//Theia Sticky Sidebar
	
	if ($("body").hasClass("single-post")) {
		var minWidth = '1200';
	}else{
		var minWidth = '0';
		}
	$('.stickysidebar')
	.theiaStickySidebar({
		additionalMarginTop:100,
		minWidth: minWidth
	});
		
	// Magnific Popup
	var lightbox_style = js_local_vars.lightbox_style;
	if(lightbox_style=='magnific-popup-gallery'){
		$('.magnific-popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			  zoom: {
				enabled: true,
				duration: 300,
			  },
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	}	
		
	// Photo Swipe Gallery Start
	if(lightbox_style == 'photo-swipe-gallery'){
		var initPhotoSwipeFromDOM = function(gallerySelector) {
	
		// parse slide data (url, title, size ...) from DOM elements 
		// (children of gallerySelector)
		var parseThumbnailElements = function(el) {
			var thumbElements = el.childNodes,
				numNodes = thumbElements.length,
				items = [],
				figureEl,
				linkEl,
				size,
				item;
	
			for(var i = 0; i < numNodes; i++) {
	
				figureEl = thumbElements[i]; // <figure> element
	
				// include only element nodes 
				if(figureEl.nodeType !== 1) {
					continue;
				}
	
				linkEl = figureEl.children[0]; // <a> element
	
				size = linkEl.getAttribute('data-size').split('x');
	
				// create slide object
				item = {
					src: linkEl.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};
	
	
	
				if(figureEl.children.length > 1) {
					// <figcaption> content
					item.title = figureEl.children[1].innerHTML; 
				}
	
				if(linkEl.children.length > 0) {
					// <img> thumbnail element, retrieving thumbnail url
					item.msrc = linkEl.children[0].getAttribute('src');
				} 
	
				item.el = figureEl; // save link to element for getThumbBoundsFn
				items.push(item);
			}
	
			return items;
		};
	
		// find nearest parent element
		var closest = function closest(el, fn) {
			return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};
	
		// triggers when user clicks on thumbnail
		var onThumbnailsClick = function(e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
	
			var eTarget = e.target || e.srcElement;
	
			// find root element of slide
			var clickedListItem = closest(eTarget, function(el) {
				return (el.tagName && el.tagName.toUpperCase() === 'LI');
			});
	
			if(!clickedListItem) {
				return;
			}
	
			// find index of clicked item by looping through all child nodes
			// alternatively, you may define index via data- attribute
			var clickedGallery = clickedListItem.parentNode,
				childNodes = clickedListItem.parentNode.childNodes,
				numChildNodes = childNodes.length,
				nodeIndex = 0,
				index;
	
			for (var i = 0; i < numChildNodes; i++) {
				if(childNodes[i].nodeType !== 1) { 
					continue; 
				}
	
				if(childNodes[i] === clickedListItem) {
					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}
	
	
	
			if(index >= 0) {
				// open PhotoSwipe if valid index found
				openPhotoSwipe( index, clickedGallery );
			}
			return false;
		};
	
		// parse picture index and gallery index from URL (#&pid=1&gid=2)
		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
			params = {};
	
			if(hash.length < 5) {
				return params;
			}
	
			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');  
				if(pair.length < 2) {
					continue;
				}           
				params[pair[0]] = pair[1];
			}
	
			if(params.gid) {
				params.gid = parseInt(params.gid, 10);
			}
	
			return params;
		};
	
		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0],
				gallery,
				options,
				items;
	
			items = parseThumbnailElements(galleryElement);
	
			// define options (if needed)
			options = {
	
				// define gallery index (for URL)
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),
	
				getThumbBoundsFn: function(index) {
					// See Options -> getThumbBoundsFn section of documentation for more info
					var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
						pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						rect = thumbnail.getBoundingClientRect(); 
	
					return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
				}
	
			};
	
			// PhotoSwipe opened from URL
			if(fromURL) {
				if(options.galleryPIDs) {
					// parse real index when custom PIDs are used 
					// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
					for(var j = 0; j < items.length; j++) {
						if(items[j].pid == index) {
							options.index = j;
							break;
						}
					}
				} else {
					// in URL indexes start from 1
					options.index = parseInt(index, 10) - 1;
				}
			} else {
				options.index = parseInt(index, 10);
			}
	
			// exit if index not found
			if( isNaN(options.index) ) {
				return;
			}
	
			if(disableAnimation) {
				options.showAnimationDuration = 0;
			}
	
			// Pass data to PhotoSwipe and initialize it
			gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};
	
		// loop through all gallery elements and bind events
		var galleryElements = document.querySelectorAll( gallerySelector );
	
		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}
	
		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
			openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
		}
	};
	
	// execute above function
	initPhotoSwipeFromDOM('.photo-swipe-gallery');

	}
	//Photo Swipe Gallery End
		
});


//Material Button (ripple Style)
var button_onclick_effect = js_local_vars.button_onclick_effect;
	if(button_onclick_effect == 'on'){
		var ink, d, x, y;
		$(".zolo_ripplelink, a.read-more, .zolo_zilla_likes_box, .categories-links a, .button, a.launch_button, .special_button, .special_button2, .zolo_blog_icon, .page-numbers li a").click(function(e){
		if($(this).find(".ink").length === 0){
			$(this).prepend("<span class='ink'></span>");
		}
			 
		ink = $(this).find(".ink");
		ink.removeClass("animate");
		 
		if(!ink.height() && !ink.width()){
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({height: d, width: d});
		}
		 
		x = e.pageX - $(this).offset().left - ink.width()/2;
		y = e.pageY - $(this).offset().top - ink.height()/2;
		 
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});
}


// Pretty Photo
$("a[rel^='prettyPhoto']").prettyPhoto({
	animation_speed: 'normal', /* fast/slow/normal */
	slideshow: false, /* false OR interval time in ms */
	autoplay_slideshow: false, /* true/false */
	opacity: 0.80, /* Value between 0 and 1 */
	show_title: true, /* true/false */
	allow_resize: true, /* Resize the photos bigger than viewport. true/false */
	horizontal_padding: 0,
	default_width: 960,
	default_height: 540,
	counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
	theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
	hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
	wmode: 'opaque', /* Set the flash wmode attribute */
	autoplay: true, /* Automatically start videos: True/False */
	modal: false, /* If set to true, only the close button will close the window */
	overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
	keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
	deeplinking: false,
	social_tools: false
});


//Fancybox
//$(".fancybox").fancybox();

// Progressive Image Load Start
var instanceName = '__ProgressiveLoad';
var ProgressiveLoad = function(el, options) {
	return this.init(el, options);
};
ProgressiveLoad.defaults = {};
ProgressiveLoad.prototype = {
	init: function(el, options) {
		if (el.data(instanceName)) {
			return this;
		}
		this.el = el;
		this.setOptions(options).build();
		return this;
	},
	setOptions: function(options) {
		this.el.data(instanceName, this);
		this.options = $.extend(true, {}, ProgressiveLoad.defaults, options);
		return this;
	},
	build: function() {
		var progressiveImage = this.el;
		if (typeof progressively === typeof undefined) {
			return;
		}
		var progressive = progressively.init();           
	}
};
$.fn.ApressProgressiveLoad = function(settings) {
	return this.map(function() {
		var el = $(this);
		return new ProgressiveLoad(el);
	});
};
$(document).ready(function() {
	$('.progressive__img').ApressProgressiveLoad();
});
// Progressive Image Load End

// Parallax Start
$('[data-parallax]').each(function() {
	var $this   = $(this);
	var image   = new Image();
	image.src   = $this.attr('data-parallax');
	image.onload = function() {
		$this.css({backgroundImage: "url('" + this.src + "')", backgroundRepeat: "repeat"});
		$this.data('parallax-width', this.naturalWidth);
		$this.data('parallax-height', this.naturalHeight);
		$this.triggerHandler('parallax-update');
	};
	$(window).bind('scroll', function() {
		$this.triggerHandler('parallax-update');
	});
	$(window).bind('resize', function() {
		$this.triggerHandler('parallax-update');
	});
}).bind('parallax-update', function() {
	var $this   = $(this);
	if("undefined" === typeof $this.data('parallax-width') || "undefined" === typeof $this.data('parallax-height')) {
		return;
	}
	var vieww   = $this.width();
	var viewh   = $this.height();
	var natw    = $this.data('parallax-width');
	var nath    = $this.data('parallax-height');
	var speed   = "undefined" === typeof $this.attr('data-parallax-speed') ? 0.35 : Math.min(1, parseFloat($this.attr('data-parallax-speed')));
	var scroll  = Math.min(1, Math.max(-1, ($(window).scrollTop() - $this.offset().top) / viewh));
	var width   = vieww;
	var height  = Math.ceil(width * nath / natw);
	if(height < viewh) {
		height  = viewh;
		width   = Math.ceil(height * natw / nath);
	}
	var left    = Math.round((vieww - width) / 2);
	var top     = Math.round((viewh - height) / 2) + scroll * speed * viewh;
	$this.css({backgroundSize: width + 'px ' + height + 'px', backgroundPosition: left + 'px ' + top + 'px'});
});
// Parallax End

// One page Start
var enable_onepage = js_local_vars.enable_onepage;

if( enable_onepage == 'on' ){

	if(js_local_vars.headerpositionval == 'Top'){
		
		var sections = $('div.zt_onepage ,div.banner')
		  , nav = $('.zolo_header')
		  , nav_height = nav.outerHeight();
	  
	}else{
				
		var sections = $('div.zt_onepage ,div.banner')
	  , nav = $('.zolo_header')
	  , nav_height = 2;
	  
	}
	
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	  
	  sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
		
		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('current');
		  sections.removeClass('current');
		  
		  $(this).addClass('current');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
		}
	  });
	});
	
	nav.find('a').on('click', function () {
	  var $el = $(this)
		, id = $el.attr('href');
	  
	  $('html, body').animate({
		scrollTop: $(id).offset().top - nav_height + 2
	  }, 900);
	  
	  return false;
	});		
}
// One Page End

// Vertical Header Start 
if(headerpositionval == 'Left' || headerpositionval == 'Right'){
	var mainContent = $(''),
        sidebar = $('.vertical_fix_menu');

    //on window scrolling - fix sidebar nav
    var scrolling = false;
    checkScrollbarPosition();
    $(window).on('scroll', function() {
        if (!scrolling) {
            (!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300): window.requestAnimationFrame(checkScrollbarPosition);
            scrolling = true;
        }
    });

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.zolo_left_vertical_header,.zolo_right_vertical_header'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }

    function checkScrollbarPosition() {
        var mq = checkMQ();

        if (mq != 'mobile') {
            var sidebarHeight = sidebar.outerHeight(),
                windowHeight = $(window).height(),
                mainContentHeight = mainContent.outerHeight(),
                scrollTop = $(window).scrollTop();

            ((scrollTop + windowHeight > sidebarHeight) && (mainContentHeight - sidebarHeight != 0)) ? sidebar.addClass('is-fixed').css('bottom', 0): sidebar.removeClass('is-fixed').attr('style', '');
        }
        scrolling = false;
    }	
}
// Vertical Header End
if($("body").hasClass("rtl")){ var rtlvar = true }else{ var rtlvar = false }

$(".post_slickslider").slick({
	  dots: false,
	  slidesToShow:1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  autoplay: false,
	  autoplaySpeed:2000,
	  arrows: true,
	  rtl: rtlvar,
	});


var $animation_appear = $('.portfolio_featured_area');
if($animation_appear.hasClass('appear_from_bottom')) {
$animation_appear.find('li').each(function(l) {
$(this).appear(function() {
	var $this = $(this);
	$this.addClass('show');
	setTimeout(function(){
		$this.addClass('shown');
	}, 1000);
},{accX: 0, accY: 0});
});
}


//vc full-width-row
if($("body").hasClass("rtl")){
$(document).ready(function() {
    
    function bs_fix_vc_full_width_row(){
        var $elements = $('[data-vc-full-width="true"]');
        $.each($elements, function () {
            var $el = $(this);
            $el.css('right', $el.css('left')).css('left', '');
        });
    }

    // Fixes rows in RTL
    $(document).on('vc-full-width-row', function () {
        bs_fix_vc_full_width_row();
    });

    // Run one time because it was not firing in Mac/Firefox and Windows/Edge some times
    bs_fix_vc_full_width_row();

});
}

/* Quick View */


function apress_qv_animate_1(direction,anim_class){

	var height = $(document).height()+'px';
	var width = $(document).width()+'px';

	if(direction == 'top'){
		$(".apress-qv-inner-modal").css('transform','translate(0,-'+height+')').addClass(anim_class);
	}
	else if(direction == 'next'){
		$(".apress-qv-inner-modal").css('transform','translate(-'+width+',0)').addClass(anim_class);
	}
	else if(direction == 'prev'){
		$(".apress-qv-inner-modal").css('transform','translate('+width+',0)').addClass(anim_class);
	}	
}

//Check User settings
function apress_qv_animation_func(ajax_data,direction){
	
	//if(apress_qv_localize.modal_anim == 'linear'){
		apress_qv_ajax(ajax_data,apress_qv_animate_1,direction,'apress-qv-animation-linear');
	/*} else if(apress_qv_localize.modal_anim == 'fade-in'){
		apress_qv_ajax(ajax_data,apress_qv_animate_2,null,'apress-qv-animation-fadein');
	} else {
		apress_qv_ajax(ajax_data,apress_qv_animate_3);
	}*/
}

//CLose Popup
function apress_qv_close_popup(e){
	$.each(e.target.classList,function(key,value){
		if(value == 'apress-qv-close' || value == 'apress-qv-inner-modal'){
			$('.apress-qv-opac').hide();
			$('.apress-qv-panel').removeClass('apress-qv-panel-active');
			$('.apress-qv-modal').html('');
		}
	})
}

$('.apress-qv-panel').on('click','.apress-qv-close',apress_qv_close_popup);
$('body').on('click','.apress-qv-inner-modal',apress_qv_close_popup);

$(document).keyup(function(e) {
  if (e.keyCode === 27){
  	$('.apress-qv-close').trigger('click');
  } 
 })
/*****    Ajax call on button click      *****/	
function apress_qv_ajax(ajax_data,anim_type,direction,anim_class){
		ajax_data['action'] = 'apress_qv_ajax';
		$.ajax({
		url: zt_post.ajaxurl,
		type: 'POST',
		data: ajax_data,
		success: function(response){
			$('.apress-qv-modal').html(response);
			anim_type(direction,anim_class);
			qv_slider();
			$('.apress-qv-pl-active').removeClass('apress-qv-pl-active');
			 
		},
	})
}

// Main Quickview Button
$('body').on('click','.apress-qv-button',function(){
	$('.apress-qv-opac').show();
	var apress_qv_panel = $('.apress-qv-panel');
	apress_qv_panel.addClass('apress-qv-panel-active');
	apress_qv_panel.find('.apress-qv-opl').addClass('apress-qv-pl-active');
	
	var $this = $(this),
	product_id = $this.data('product_id');
	var ajax_data = find_nav_ids(product_id);
	apress_qv_animation_func(ajax_data,'top');
})

var qv_length = $('.apress-qv-button').length;

function find_nav_ids(product_id){
	var curr_index = $("[apress-qv="+product_id+"]").index('.apress-qv-button');

	var curr_length = curr_index + 1;
	var next_index,prev_index;
	var qv_btn = $('.apress-qv-button');
	//Find next button
	if(curr_length == qv_length){
		next_index = 0;		 
	}else{
		next_index = curr_index + 1;
	}

	//Find prev button
	if(curr_length == 1){
		prev_index = qv_length - 1;
	}else{
		prev_index = curr_index - 1;
	}

	var qv_next = qv_btn.eq(next_index).attr('apress-qv');
	var qv_prev = qv_btn.eq(prev_index).attr('apress-qv');
	
	return {'product_id': product_id , 'qv_next': qv_next , 'qv_prev': qv_prev};

}

// Next Product
$('.apress-qv-panel').on('click','.apress-qv-nxt',function(){
	$('.apress-qv-mpl').addClass('apress-qv-pl-active');
	var next_id = $(this).attr('qv-nxt-id');
	var ajax_data = find_nav_ids(next_id);
	apress_qv_animation_func(ajax_data,'next');
})

//Previous Product
$('.apress-qv-panel').on('click','.apress-qv-prev',function(){
	$('.apress-qv-mpl').addClass('apress-qv-pl-active');
	var prev_id = $(this).attr('qv-prev-id');
	var ajax_data = find_nav_ids(prev_id);
	apress_qv_animation_func(ajax_data,'prev');
})	

//Slick Slider
function qv_slider(){
 $(".qv_image_slider_holder").slick();
}

//woocommerce quantity
$(".woocommerce").on('click', '.quantity .quantity-button', function() {
    var $button = $(this);
 var $quantityInput = $(this).siblings('.woocommerce .quantity input[type="number"]');


 var oldValue = $quantityInput.val();

 if ($button.hasClass("plus")) {
  var newVal = parseFloat(oldValue) + 1;
 }
 else {
  if (oldValue > 0) {
   var newVal = parseFloat(oldValue) - 1;
  } else {
   newVal = 0;
  }
 }

 $quantityInput.val(newVal).trigger('change');
});

// Wishlist Widget
function wishlist_widget_update() { 
	//Update it when a product added or removed to/from wishlist
	 $('body').on('added_to_wishlist removed_from_wishlist', function () {
	 
	  // Counter
	  var counter = $('.apress_wish_counter'); 
	  $.ajax({
	   url: zt_post.ajaxurl,
	   data: {
		action: 'apress_yith_wcwl_update_wishlist_count'
	   },
	   dataType: 'json',
	   success: function( data ){
		 counter.html( data.count );
	   }
	  })
	  
	
	  var $clicked_add_to_wishlist = $(document).find('.add_to_wishlist.adding');
	  $clicked_add_to_wishlist.find('.wc-loading').addClass('hide');
	  $clicked_add_to_wishlist.fadeOut(400).siblings('.wishlist-link').fadeIn(400);
	
	 });
}
wishlist_widget_update();

// Wishlist Button
function wishlist_button(){

 $('.woo_product_button_group').on('click', '.add_to_wishlist', function () {
  if ($(this).hasClass('shop_wishlist_button')) {
   $(this).addClass('adding').find('.wc-loading').removeClass('hide');

  }
 });
}
wishlist_button();

$(".apress_anything_slider_items").slick({
	  dots: false,
	  slidesToShow:1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  autoplay: false,
	  autoplaySpeed:2000,
	  arrows: true,
	  rtl: rtlvar,
	  slide: 'div'
	});

})(jQuery);