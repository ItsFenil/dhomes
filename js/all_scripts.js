var j$ = jQuery;
j$.noConflict();
"use strict";

j$(document).ready(function() {	
	zt_elements_animation();
	zt_vc_column_equal_heights();
	zt_flip_box_equal_heights();
	zt_progress_bar();
	apress_spacer();
	if(j$('#apress_fullscreen_rows').length > 0 && j$(window).width() > 1000){
		zt_full_screen_rows();
	}else{
		j$('#apress_fullscreen_rows').css('opacity', 1);
	}
	apcore_verticalSplitSliderInit();
	apcore_animated_svg();
	apcore_slick_slider();
	apcore_slick_video_slider();
	apcore_imagebox_auto_height();
	apcore_testimonial_carousel();
	apcore_header_hamburger();
	apcore_header_builder_search();
	apcore_gallery_caption();
	apcore_splitting();
	switch_element_check()

		
/**/	var titleslug = j$(".zolo_video_portfolio_title").data('titleslug');
	var titleid = j$(".apress_portfolio_reveal_list_thumbnail").data('id');
		
	 j$(".zolo_video_portfolio_title."+titleslug).hover(
		  function () {
			j$(".apress_portfolio_reveal_list_thumbnail."+titleid).addClass("my");
		  },
		  function () {
			j$(".apress_portfolio_reveal_list_thumbnail."+titleid).removeClass("my");
		  }
	 );
	 
//j$('body').find('.zolo_portfolio_row').each(function () {
//}); 

	
	

	
}); 

j$(window).on('load',function () {
	apcore_blogpostslider3();
	apcore_owl_slider();
	apcore_posttype_equal_heights();
	apcore_particles_custom();
	apcore_photo_gallery_justified();
	apcore_photo_gallery_masonry_grid();
	apcore_morphing_img();
	apcore_video_lightbox();
	
}); 

// Blog Post Slider Start	
function apcore_blogpostslider3(){
	if(j$("body").hasClass("rtl")){ var rtlvar = true }else{ var rtlvar = false }
	j$(".postsliderstyle3").owlCarousel({
		stagePadding:200,
		autoplay:true,
		items:1,
		loop:true,
		rtl:rtlvar,
		margin:8,
		nav:true,
		navText:["<i class=\"ap-chevron-left\"></i>","<i class=\"ap-chevron-right\"></i>"],
		responsive:{
			0:{items:1,stagePadding:0,},
			500:{items:1,stagePadding:0,},
			800:{items:1,stagePadding:0,},
			1300:{items:1,stagePadding:300,}
			}	
			
	});
};
function apcore_owl_slider(){
	if(j$("body").hasClass("rtl")){ var rtlvar = true }else{ var rtlvar = false }
	
	 j$('body').find('.zolo_owl_slider').each(function () {
		 
		var _this = j$(this); 
		var stagePadding = parseInt(_this.data('stage-padding'));
		stagePadding = stagePadding > 0 ? stagePadding : 0;                       
		_this.owlCarousel({

			margin: _this.data('margin'),
			slideBy: _this.data('slide-by'),
			loop: _this.data('loop'),
			lazyLoad: _this.data('lazy-load'),
			stagePadding: stagePadding,
			autoHeight:_this.data('auto-height'),
			autoWidth: _this.data('auto-width'),				
			center: _this.data('center'),
			nav: _this.data('nav'),
			dots: _this.data('dots'),
			navContainer: 0,
			dotsContainer: 0,
			//startPosition: 2,
			autoplay: _this.data('autoplay'),
			autoplayTimeout: _this.data('autoplay-timeout'),
			autoplaySpeed: _this.data('autoplay-speed'),
			autoplayHoverPause: _this.data('autoplay-hover-pause'),		
			
			animateOut: _this.data('animate-out'),
			animateIn: _this.data('animate-in'),		
			
			rtl:rtlvar,
			navText: ["<span><i class=\"ap-chevron-left\"></i></span>","<span><i class=\"ap-chevron-right\"></i></span>"],
			responsive: {
				0: {items: _this.data('colums-mobile')},
				800: {items: _this.data('colums-tablet')},
				1050: {items: _this.data('colums-desktop')},
			},
			
			onInitialized  : counter, //When the plugin has initialized.
  			onTranslated : counter //When the translation of the stage has finished.
		});
		
		
		function counter(event) {
		   var element   = event.target;         // DOM element, in this example .owl-carousel
			var items     = event.item.count;     // Number of items
			var item      = event.item.index + 1;     // Position of the current item
		  
		  // it loop is true then reset counter from 1
		  if(item > items) {
			item = item - items
		  }
		  j$('.zolo_owl_slider_counter').html(item+" / "+items)
		}

		
	});
}

//Testimonial Carousel Start
function apcore_testimonial_carousel(){
	j$('body').find('.feedback-slider').each(function () {
		var feedbackSlider = j$(this);
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		autoplay: feedbackSlider.data('autoplay'),
		autoHeight:true,
		loop: feedbackSlider.data('loop'),
		mouseDrag: true,
		touchDrag: true,
		navText: ["<i class='ap-arrow-left'></i>", "<i class='ap-arrow-right'></i>"],
		responsive:{

			// breakpoint from 767 up
			767:{
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function(){
		//j$(".zolo_testimonial_carousel_box .zolo_author_name, .zolo_author_designation, .zolo_author_text").removeClass("animated fadeIn").css("opacity", "0");
		j$(".zolo_testimonial_carousel_box img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function(){
		//j$(".zolo_testimonial_carousel_box .zolo_author_name, .zolo_author_designation, .zolo_author_text").addClass("animated fadeIn").css("opacity", "1");
		j$(".zolo_testimonial_carousel_box img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	feedbackSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevThumb = j$(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
		var nextThumb = j$(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
		j$('.thumb-prev').find('img').attr('src', prevThumb);
		j$('.thumb-next').find('img').attr('src', nextThumb);
	});
	j$('.thumb-next').on('click', function() {
		feedbackSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	j$('.thumb-prev').on('click', function() {
		feedbackSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});
	
	});
	
} //Testimonial Carousel end

// Elements animation
function zt_elements_animation(){		

	j$('.zolo_main_content_area .animated, .zolo_footer_area .animated').appear(function() {
		var element = j$(this);
		var animation = element.data('animation');
		var animationDelay = element.data('delay');
		if (animationDelay) {
			setTimeout(function() {
				element.addClass(animation + " visible");
				element.removeClass('hiding');
				if (element.hasClass('counter')) {
					element.children('.value').countTo();
				}
			}, animationDelay);
		} else {
			element.addClass(animation + " visible");
			element.removeClass('hiding');
			if (element.hasClass('counter')) {
				element.children('.value').countTo();
			}
		}
	}, {
	accY: -150
	});
	
	
	
	// Clipping effect
	var $element = j$('.zolo_main_content_area .apcore-clipping-animation.animated, .zolo_footer_area .apcore-clipping-animation.animated'),
		wrapper = '<div class="apcore-clipping-wrapper"><div class="apcore-clipping-content"></div></div>';
	
		$element.wrapInner( wrapper );
		
		$element.each(function(){
			var $that = j$(this),
				$wrapper = $that.find('.apcore-clipping-wrapper'),
				overlay = '<div class="apcore-clipping-overlay"></div>';
				
				j$(overlay).appendTo( $wrapper );
		});				
		$element.appear(function() {
			var $that = j$(this),
			animation =  $that.attr('data-animation'),
			animationDelay =  $that.attr('data-delay');
			if (animationDelay) {
					setTimeout(function () {
						$that.addClass(animation + " visible");
						$that.removeClass('clipping-hide');
						setTimeout(function(){
							$that.addClass('apcore-clipping-show-content');
						},700)
						setTimeout(function(){
							$that.removeClass('apcore-clipping-animation');
						},1400)
					}, animationDelay);
				} else {						
					$that.addClass(animation + " visible");
					$that.removeClass('clipping-hide');
					setTimeout(function(){
						$that.addClass('apcore-clipping-show-content');
					},500)
			}
		}, {
		accY: -150
		});
	
}  

/* column Height */
function zt_vc_column_equal_heights(){
	
	j$('.vc_row-fluid').each(function() {
		
		var highestBox = 0;
		j$('.equal_height', this).each(function() {
		
		if (j$(this).height() > highestBox)
		highestBox = j$(this).height();
		});
		
		j$('.equal_height', this).height(highestBox);
	});
}

/* progress bar */
function zt_progress_bar(){
		
	j$(".z_pb_holder").appear(function(){
		j$(this).find(".progress_bar_sc").each(function (index) {
			var j$this = j$(this),
				bar = j$this.find(".pb_bg"),
				bar_stripe = j$this.find(".pb_stripe"),
				val = bar.data("percentage-value");

			setTimeout(function () {
				bar.css({"width": val + "%"});
				bar_stripe.css({"width": val + "%"});
			}, index * 200);
		});

	});
}
//function for resize spacer
function apress_spacer()	{
	var css = '';
	j$('.apress-spacer').each(function(i,spacer){
		var uid = j$(spacer).data('id');
		var body_width = j$("body").width();
		var height_on_mob = j$(spacer).data('height-mobile');
		var height_on_mob_landscape = j$(spacer).data('height-mobile-landscape');
		var height_on_tabs = j$(spacer).data('height-tab');
		var height_on_tabs_portrait = j$(spacer).data('height-tab-portrait');
		var height = j$(spacer).data('height');

		if(height != '')
		{
			css += ' .spacer-'+uid+' { height:'+height+'px } ';
		}
		if(height_on_tabs != '' || height_on_tabs == '0' || height_on_tabs == 0)
		{
			css += ' @media (max-width: 1199px) { .spacer-'+uid+' { height:'+height_on_tabs+'px } } ';
		}
		if(typeof height_on_tabs_portrait != 'undefined' && (height_on_tabs_portrait != '' || height_on_tabs_portrait == '0' || height_on_tabs_portrait == 0))
		{
			css += ' @media (max-width: 991px) { .spacer-'+uid+' { height:'+height_on_tabs_portrait+'px } } ';
		}
		if(typeof height_on_mob_landscape != 'undefined' && (height_on_mob_landscape != '' || height_on_mob_landscape == '0' || height_on_mob_landscape == 0))
		{
			css += ' @media (max-width: 767px) { .spacer-'+uid+' { height:'+height_on_mob_landscape+'px } } ';
		}
		if(height_on_mob != '' || height_on_mob == '0' || height_on_mob == 0)
		{
			css += ' @media (max-width: 479px) { .spacer-'+uid+' { height:'+height_on_mob+'px } } ';
		}
	});
	if(css != '')
	{
		css = '<style>'+css+'</style>';
		j$('head').append(css);
	}
}
/* Full Screen Rows */
var fullpage_animation = j$('#apress_fullscreen_rows').data('fullpage-animation');
var $anchors = [];
var $names = [];
var $navigation;

function setFPNames() {
	$anchors = [];
	$names = [];
	j$('#apress_fullscreen_rows > .wpb_row').each(function(i){
		$id = (j$(this).is('[data-fullscreen-anchor-id]')) ? j$(this).attr('data-fullscreen-anchor-id') : '';			
		//anchor checks
		if(j$('#apress_fullscreen_rows[data-anchors="on"]').length > 0) {
			$anchors.push($id);
		}			
			
		$tooltip = (j$(this).is('[data-tooltip-name]')) ? j$(this).attr('data-tooltip-name') : '';
		
		if(j$('#apress_fullscreen_rows[data-dotnavigation="tooltip"]').length > 0 || j$('#apress_fullscreen_rows[data-dotnavigation="tooltip_alt"]').length > 0) {
		//name checks
		if($tooltip.indexOf('fp_') == -1) $names.push($tooltip);
			else $names.push();
		}
		if(j$('#apress_fullscreen_rows[data-dotnavigation="hidden"]').length > 0 ) {
			$navigation = false;
		}else{
			$navigation = true;
			}
		
	});
}
setFPNames();
	
function zt_full_screen_rows(){
	
	j$('#apress_fullscreen_rows').fullpage({
		sectionSelector: '.zolo_wpb_row',
		navigation: $navigation,
		css3: true,
		anchors: $anchors,
		scrollOverflow: true,
		navigationPosition: 'right',
		navigationTooltips: $names,
		
		afterLoad: function(anchorLink, index, slideAnchor, slideIndex){ 
				var pageNavs = j$('.zolo-header-area, body');
				var rowBrightness = j$(this).data('row-text-color');
                pageNavs.removeClass('header_show_with_dark_row header_show_with_light_row fp-moving fp-moving-down').addClass('header_show_with_' + rowBrightness + '_row');
	
			 },
		
		onLeave: function(index, nextIndex, direction){
			
			if(fullpage_animation == 'zoom_out' ){
			var $row_id = j$('#apress_fullscreen_rows > .wpb_row:nth-child('+nextIndex+')').attr('id');
			var $indexRow = j$('#apress_fullscreen_rows > .wpb_row:nth-child('+index+')');
			var $nextIndexRow = j$('#apress_fullscreen_rows > .wpb_row:nth-child('+nextIndex+')');
			var pageNavs = j$('.main-header, body'),nextRowBrightness = $nextIndexRow.data('row-text-color');
			
			var $fpAnimationSpeed;
			$fpAnimationSpeed = 1050;
			
			 //scrolling down
			if(direction == 'down') {
				pageNavs.removeClass('header_show_with_dark_row header_show_with_light_row').addClass('fp-moving-down header_show_with_' + nextRowBrightness + '_row');


				$nextIndexRow.css({'z-index':'1000','top':'0','left':'0'});
				
			}
           //scrolling up
           else {
			  pageNavs.removeClass('header_show_with_dark_row header_show_with_light_row').addClass('header_show_with_' + nextRowBrightness + '_row'); 
			   

             $nextIndexRow.css({'z-index':'1000','top':'0','left':'0'});
             
            } 
		}
			},
		
	});
	j$('#apress_fullscreen_rows').css('opacity', 1);
}

/*
 ** Vertical Split Slider
 */
function apcore_verticalSplitSliderInit(){
    if(j$('.vertical_split_slider').length) {
		j$( ".zolo_footer_area" ).remove();
		j$( ".pagetitle_parallax_section" ).remove();
		var $vertical_tt_names = [];
		var $tooltips = [];
		j$('.ms-left .ms_tool_tips').each(function(i){
				var $tooltips = j$(this).data("tool-tip");
				$vertical_tt_names.push($tooltips);
			}); 
		
        j$('.vertical_split_slider').multiscroll({
            scrollingSpeed: 500,
			navigation: true,
			navigationTooltips: $vertical_tt_names,
			
			//Events
			afterLoad: function(anchorLink, index){
				
				if(j$('.vertical_split_slider').find('.ms-section.active').hasClass('dark')) {
						j$('.zolo-header-area').removeClass('apress_splitpage_header_light').addClass('apress_splitpage_header_dark');
						j$('body').removeClass('apress_splitpage_light').addClass('apress_splitpage_dark');
					} else {
						j$('.zolo-header-area').removeClass('apress_splitpage_header_dark').addClass('apress_splitpage_header_light');
						j$('body').removeClass('apress_splitpage_dark').addClass('apress_splitpage_light');
					}
				},
			afterRender: function(){
			
				if(j$('.vertical_split_slider').find('.ms-section.active').hasClass('dark')) {
						j$('.zolo-header-area').removeClass('apress_splitpage_header_light').addClass('apress_splitpage_header_dark');
						j$('body').removeClass('apress_splitpage_light').addClass('apress_splitpage_dark');
					} else {
						j$('.zolo-header-area').removeClass('apress_splitpage_header_dark').addClass('apress_splitpage_header_light');
						j$('body').removeClass('apress_splitpage_dark').addClass('apress_splitpage_light');
					}
				},
			afterResize: function(){},
			onLeave: function(index, nextIndex, direction){},
        });
		
		j$('html').addClass('apress_split_slider_enable');
    }
}

/* Column Height */
function apcore_posttype_equal_heights(){
	
	j$('.zolo_custom_posttype_style2').each(function() {
		
		var highestBox3 = 0;
		j$('.zolo_posttype_title_des', this).each(function() {
		
		if (j$(this).height() > highestBox3)
		highestBox3 = j$(this).height();
		});
		
		j$('.zolo_posttype_title_des', this).height(highestBox3);
	});
}

function zt_flip_box_equal_heights(){

var hoverBox = j$(".apress_flip_box_element_wrap");
hoverBox.each(function() {
		var $this = j$(this),
			hoverBoxInner = $this.find(".apress_flip_box_front, .apress_flip_box_back");
		hoverBoxInner.css("min-height", 0);
		var frontHeight = $this.find(".apress_flip_box_front").outerHeight(),
			backHeight = $this.find(".apress_flip_box_back").outerHeight(),
			hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
		//hoverBoxHeight < 250 && (hoverBoxHeight = 250), 
		hoverBoxInner.css("min-height", hoverBoxHeight + "px")
	})
}





/* Animated SVG */
function apcore_animated_svg(){	
	var $svg = j$('.zolo_gradient_svg_icon');
	$svg.each(function(){
		var $icon = j$(this),
			duration = $icon.data('duration'),
			id = $icon.attr('id'),
			file = $icon.data('file'),
			color = $icon.data('color'),
			myVivus;
			
			myVivus = new Vivus( id, {
				duration : duration,
				file : file,
				type: 'async',
				start : 'inViewport',
				onReady: function (event) {
                    var strokegradients, strokeHoverGradients = document.createElementNS('http://www.w3.org/2000/svg', 'style'), 
					linearGradientEl = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'), 
					gradientValues = typeof color !== typeof undefined && color !== null ? color.split(',') : '#000', 
					gid = Math.round(Math.random() * 1e6);
                    if (undefined === gradientValues[1]) {
                        gradientValues[1] = gradientValues[0];
                    }
                    strokegradients = '<defs xmlns="http://www.w3.org/2000/svg"><linearGradient gradientUnits="userSpaceOnUse" id="grad' + gid + '" x1="0%" y1="0%" x2="0%" y2="100%">' + '<stop offset="0%" stop-color="' + gradientValues[0] + '" />' + '<stop offset="100%" stop-color="' + gradientValues[1] + '" />' + "</linearGradient></defs>";
                    var xmlStrokegradients = new DOMParser().parseFromString(strokegradients, "text/xml");
                    $icon.children('svg').prepend(xmlStrokegradients.documentElement);
                    $icon.children('svg').find('path').attr('stroke', 'url(#grad' + gid + ')');
                }
			});
	});
}

function apcore_slick_slider(){
	if(j$("body").hasClass("rtl")){ var rtlvar = true }else{ var rtlvar = false }
	 j$('body').find('.zolo_slick_slider').each(function () {
		 
		var _this = j$(this); 
		 
		if(j$("body").hasClass("rtl")){ var rtlvar = true }else{ var rtlvar = false }
		_this.find('.zolo_slick_slider_holder').slick({
		
		  dots: _this.data('dots'),
		  infinite: _this.data('infinite'),
		  speed: _this.data('speed'),
		  rtl:rtlvar,		  
		  autoplay: _this.data('autoplay'),
		  autoplaySpeed:_this.data('autoplay-speed'),
		  arrows: _this.data('arrows'),
		  focusOnSelect:_this.data('focusonselect'),
		  
		  fade:_this.data('fade'),
		  centerMode:_this.data('center-mode'),
		  lazyLoad:_this.data('lazy-load'),
		  
		  centerPadding:_this.data('desktop-center-padding'),		  
		  variableWidth: _this.data('variable-width'),		  
		  slidesToShow:_this.data('desktop-show'),
		  slidesToScroll: 1,
		  responsive: [
					{
					  breakpoint: 1050,
					  settings: {
						slidesToShow:_this.data('small-desktop-show'),
						slidesToScroll: 1,
						centerPadding:_this.data('small-desktop-padding'),
						
					  }
					},
					{
					  breakpoint: 800,
					  settings: {
						slidesToShow:_this.data('tablet-show'),
						slidesToScroll: 1,
						centerPadding:_this.data('tablet-padding'),
						
					  }
					},
					{
					  breakpoint: 450,
					  settings: {
						slidesToShow:_this.data('mobile-show'),
						slidesToScroll: 1,
						centerPadding:_this.data('tablet-padding'),
						
					  }
					},
				  ]
			});	
			if(_this.data('mouse-wheel') == 'yes'){	
							
				_this.find('.zolo_slick_slider_holder').on("wheel", (function(e) {
				  e.preventDefault();
				
				  if (e.originalEvent.deltaY < 0) {
					j$(this).slick("slickPrev");
				  } else {
					j$(this).slick("slickNext");
				  }
				}));				
				
			}
				
	});
}


	


function apcore_slick_video_slider () {
	j$('body').find('.apcore_video_slider_wrap').each(function () {
		
		var _this = j$(this); 
		var zolo_noofitems = _this.data('noofitems');
		var zolo_vertical = _this.data('vertical');
		
		if(zolo_vertical == 'yes'){
			zolo_vertical_value = true;
			zolo_responsive_horizontal1024 = zolo_noofitems;
				zolo_responsive_horizontal600 = zolo_noofitems;
				zolo_responsive_horizontal480 = zolo_noofitems;
			}else{
				zolo_vertical_value = false;
				zolo_responsive_horizontal1024 = 3;
				zolo_responsive_horizontal600 = 2;
				zolo_responsive_horizontal480 = 1;
				}
		
		_this.find('.apcore_video_slider_for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.apcore_video_slider_nav'
		});
		_this.find('.apcore_video_slider_nav').slick({
		  slidesToShow: zolo_noofitems,
		  slidesToScroll: 1,
		  asNavFor: '.apcore_video_slider_for',
		  dots: false,
		  arrows: _this.data('arrows'),
		  centerMode: false,
		  focusOnSelect: true,
		  vertical: zolo_vertical_value,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: zolo_responsive_horizontal1024,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: zolo_responsive_horizontal600,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: zolo_responsive_horizontal480,
			  }
			}
		  ]
		  
		});
	
	});
	
}



// Particle js
function apcore_particles_custom () {
    jQuery('.particles-js').each(function () {
        var id = jQuery(this).attr('id');
        var type = jQuery(this).data('particles-type');
        var color_type = jQuery(this).data('particles-colors-type');
        var color = jQuery(this).data('particles-color');
        var color_line = jQuery(this).data('particles-color');
        var number = jQuery(this).data('particles-number');
        var lines = jQuery(this).data('particles-line');
        var size = jQuery(this).data('particles-size');
        var speed = jQuery(this).data('particles-speed');
        var hover = jQuery(this).data('particles-hover');
        var hover_mode = jQuery(this).data('particles-hover-mode');
        switch (type) {
            case 'particles':
                type = 'circle';
                break;
            case 'hexagons':
                type = 'polygon';
                break;
            default:
                type = 'circle';
                break;
        }
        if (color_type == 'random_colors') {
            color = color.split(',');
            color_line = color[0]
        }
        
        particlesJS(
            id, {
                "particles":{
                    "number":{
                        "value":number,
                        "density":{
                            "enable":true,
                            "value_area":800
                        }
                    },
                    "color":{
                        "value": color
                    },
                    "shape":{
                        "type":type,
                        "polygon":{
                            "nb_sides":6
                        },
                    },
                    "opacity":{
                        "value":1,
                        "random":true,
                        "anim":{
                            "enable":false,
                            "speed":1,
                            "opacity_min":0.1,
                            "sync":false
                        }
                    },
                    "size":{
                        "value":size,
                        "random":true,
                        "anim":{
                            "enable":false,
                            "speed":30,
                            "size_min": 1,
                            "sync":false
                        }
                    },
                    "line_linked":{
                        "enable":lines,
                        "distance":150,
                        "color":color_line,
                        "opacity":0.4,
                        "width":1
                    },
                    "move":{
                        "enable":true,
                        "speed":speed,
                        "direction":"none",
                        "random":false,
                        "straight":false,
                        "out_mode":"out",
                        "bounce":false,
                        "attract":{
                            "enable":false,
                            "rotateX":600,
                            "rotateY":1200
                        }
                    }
                },
                "interactivity":{
                    "detect_on":"canvas",
                    "events":{
                        "onhover":{
                            "enable":hover,
                            "mode":hover_mode
                        },
                        "onclick":{
                            "enable":true,
                            "mode":"push"
                        },
                        "resize":true
                    },
                    "modes":{
                        "grab":{
                            "distance":150,
                            "line_linked":{
                                "opacity":1
                            }
                        },
                        "bubble":{
                            "distance":200,
                            "size":size*1.6,
                            "duration":20,
                            "opacity":1,
                            "speed":30
                        },
                        "repulse":{
                            "distance":80,
                            "duration":0.4
                        },
                        "push":{"particles_nb":4},
                        "remove":{"particles_nb":2}
                    }
                },
                "retina_detect":true
            });
        var update;
        update = function() {
            requestAnimationFrame(update); 
        }; 
        requestAnimationFrame(update);
    })
}

// Photo Gallery Justified
function apcore_photo_gallery_justified(){
	j$('body').find('.layout_justify_wrap').each(function () {		
		var _this = j$(this);
		var wrapper_class = _this.data('class');
		j$(wrapper_class).justifiedGallery({
			rowHeight : _this.data('rowheight'),
			lastRow : _this.data('lastrow'),
			margins : _this.data('margins'),
			captions: false,
			selector: 'a, li',
			waitThumbnailsLoad: true,
   			imagesAnimationDuration: 300,
			sizeRangeSuffixes: {
				'lt100':'_t', 
				'lt240':'_m', 
				'lt320':'_n', 
				'lt500':'', 
				'lt640':'_z', 
				'lt1024':'_b'
			}
		});
		 j$(this).addClass('loaded');
	});	
};

// Photo Gallery Masonry and Grid
function apcore_photo_gallery_masonry_grid(){
	
	j$('body').find('.photo_layout_wrap').each(function () {
		
			var _this = j$(this);
			var wrapper_class = _this.data('class');
			
			var $container2 = j$(wrapper_class);
			$container2.imagesLoaded(function() {
				$container2.animate({opacity:1});
			$container2.isotope({
				// options
				layoutMode: _this.data('layoutmode'),
				itemSelector: "."+_this.data('itemselector'),
				})
			});
		
	});	
};
//Morphing Image
function apcore_morphing_img(){
	j$('.apress_morphing_wrap').each(function() {
			var _this = j$(this); 
			var morphingduration = _this.data('morphingduration');
			var uniqid = _this.data('uniqid');
			var morphing = anime({
			targets: "#apress_morphing_path"+uniqid,
			d: [
			  { value: "M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S52.6,623.8,52.6,405.1S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z" },
			  { value: "M1062.1,502.6c0,218.7-239.9,355.5-477,355.5S43.6,637.3,43.6,418.6S480.2,39,717.3,39S1062.1,283.9,1062.1,502.6z" },
			  { value: "M1022.4,500.3c0,218.7-243.7,379.6-480.8,379.6S19,633.1,19,414.5S238.5,45.1,475.6,45.1S1022.4,281.6,1022.4,500.3z" },
			  { value: "M1009.6,511.6c0,218.7-263.4,380.6-500.5,380.6S26.7,626.5,26.7,407.8S370.3,18.5,607.4,18.5S1009.6,292.9,1009.6,511.6z" },
			],
			easing: "easeOutQuad",
			duration: morphingduration,
			loop: true,
			autoplay: true
		});
	});
};
//Video Lightbox
function apcore_video_lightbox(){
	j$('.lightbox_type_video').each(function() {
		var _this = j$(this);
		var id = _this.data('id');
		j$("."+id).ApVideoPopUp({ autoplay: 1 });
		//j$("."+id).ApVideoPopUp({ autoplay: 0 }); // Disable autoplay	
	});
};
// Image Box New
function apcore_imagebox_auto_height(){
	j$('.zolo_imagebox_new_wrapper').each(function() {	
		var id = j$(this).data('id'); 	
		var $height = j$('.'+id+".zolo_imagebox_new_wrapper.new_imagebox_style12 .zolo_imagebox_new_des_wrap").outerHeight();		
		j$('.'+id+".zolo_imagebox_new_wrapper.new_imagebox_style12 .zolo_imagebox_new_content").css({bottom: -$height+'px'});
	});	
}

//Hamburger Menu
function apcore_header_hamburger(){

	 j$('body').find('.zolo_el_header_hamburger_menu_content').each(function () {
		 var _this = j$(this); 
		 var zolo_hamburger_menu_id = _this.data('id');
		 var zolo_hamburger_buttonstyle = _this.data('buttonstyle');
		 var zolo_menustyle = _this.data('menustyle');
		 var zolo_hamburgermenuaction = _this.data('hamburgermenuaction');
		 var zolo_loaderstyle = _this.data('loaderstyle');
		 
		 $themeContent = j$('.zolo_main_content_area');
		 $themeFooter = j$('.zolo_footer_area');
		 
		if(zolo_loaderstyle == 'default'){
			var timedelay = 1;
			var timedelayout = 500;
		}else if(zolo_loaderstyle == 'slide_in_out'){
			var timedelay = 1;
			var timedelayout = 1000;
		}else if(zolo_loaderstyle == 'svg'){
			var timedelay = 700;
			var timedelayout = 1;
		}else{
			var timedelay = 700;
			var timedelayout = 700;
		 }
		 
		 
		if (zolo_hamburgermenuaction == 'extended_menu') {
			j$(".apcore-self-hosted-video").css({"bottom":"auto","height":"0"});
			if (zolo_hamburger_buttonstyle == 'style1' && zolo_menustyle != 'full_screen_menu' || zolo_hamburger_buttonstyle == 'style2' && zolo_menustyle != 'full_screen_menu' || zolo_hamburger_buttonstyle == 'style3' && zolo_menustyle != 'full_screen_menu') {
		
				j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_button").click(function() {
					j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_canvas_menu").toggleClass("open");
					j$("#" + zolo_hamburger_menu_id + " .zolo_header_hamburger_menu").toggleClass("open2");
				});
			} else {		
				j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function() {
					
					if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
						
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
						
					}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
						
							j$(this).css({"transition-delay":0+"s","opacity":0,});
							
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
						
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0, 100%)",});
					
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(-20%, 0px)",});
						
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(20%, 0px)",});
						
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){
						
					j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name").each(function(i) {
						j$(this).css({"transition-delay": 0.5+"s","opacity":0, "transform": "translate(0%, 200%)",});
					});
						
					}
					
					//j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
					
					
				});

				
				j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_button").on('click', function (e) {
					//e.preventDefault();
					setTimeout(function() {
						j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_canvas_menu").addClass("open");
						j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_button_content, #" + zolo_hamburger_menu_id + " .zolo_header_hamburger_menu").addClass("open2");
						
						//$themeContent.css({'visibility':'hidden', 'height' : 0, 'overflow':'hidden' });
						//$themeFooter.css({'visibility':'hidden', 'height' : 0, 'overflow':'hidden' });
		
						
						// Animation delay to Menu Start
						var $canvas_menu_wrap = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_menu .zolo_element_vertical_menu');								
						$canvas_menu_wrap.each(function() {
							var element = j$(this);							
							if( element.hasClass('zolo_element_vertical_menu') ){
								//var id = j$(this).attr('id');
								
								
								var animationDelay = j$(this).data('delay');
								
								setTimeout(function() {
									j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function(i) {
										
										if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
											j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1});
											
										}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
											j$(this).css({"transition-delay":0+"s","opacity":1,"color":"blue",});	
											
										}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
											j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0%)",});
											
										}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
											j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(-0%, 0px)",});
											
										}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
											j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0px)",});											
										
										}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){

											j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name").each(function(i) {
												j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0%)",});
											});

										}
										
										
									});
								}, animationDelay);					
							}	
						});
						// Animation delay to Menu End
						
						
						// Animated class start
						var $canvas_wrap = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_menu .animated');								
						$canvas_wrap.each(function() {
							var element = j$(this);	
							
							var animation = element.data('animation');
							var animationDelay = element.data('delay');
							if (animationDelay) {
								setTimeout(function() {
									element.addClass(animation + " visible");
									element.removeClass('hiding');
									if (element.hasClass('counter')) {
										element.children('.value').countTo();
									}
								}, animationDelay);
							} else {
								element.addClass(animation + " visible");
								element.removeClass('hiding');
								if (element.hasClass('counter')) {
									element.children('.value').countTo();
								}
							}

						});
						
						
						var $clipping_wrapper = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_menu .clipping'),
						wrapper = '<div class="apcore-clipping-wrapper"><div class="apcore-clipping-content"></div></div>';	
						$clipping_wrapper.wrapInner( wrapper );	
							
						$clipping_wrapper.each(function(){
							//alert('there');
								var $that = j$(this),
								$wrapper = $that.find('.apcore-clipping-wrapper'),
								overlay = '<div class="apcore-clipping-overlay"></div>',
								animation =  $that.attr('data-animation'),
								animationDelay =  $that.attr('data-delay');			
								
								j$(overlay).appendTo( $wrapper );
								
								if (animationDelay) {
										setTimeout(function () {
											$that.addClass(animation + " visible");
											$that.removeClass('clipping-hide');
											setTimeout(function(){
												$that.addClass('apcore-clipping-show-content');
											},700)
											setTimeout(function(){
												$that.removeClass('apcore-clipping-animation');
											},1400)
										}, animationDelay);
									} else {						
										$that.addClass(animation + " visible");
										$that.removeClass('clipping-hide');
										setTimeout(function(){
											$that.addClass('apcore-clipping-show-content');
										},500)
								}
						});
					
					// Animated class end
					
					var $video_wrap = j$("#" + zolo_hamburger_menu_id + ' .apcore-self-hosted-video video');					
							if($video_wrap.length == 1){
								j$(".apcore-self-hosted-video").css({"width": "100%","height":"100%","bottom":"0"});
								$video_wrap.get(0).load();
								$video_wrap.get(0).play();
							}
						
					}, timedelay);
					
				});
				j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_close_button").on('click', function (e) {
					j$('#' + zolo_hamburger_menu_id +' .zolo_el_header_hamburger_canvas_menu').addClass('out_anim' );
					setTimeout(function() {
						j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_canvas_menu").removeClass("open").removeClass( 'out_anim' );
						
						$themeContent.css({'visibility':'', 'height' : '', 'overflow':'' });
						$themeFooter.css({'visibility':'', 'height' : '', 'overflow':'' });
						
						j$("#" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_button_content, #" + zolo_hamburger_menu_id + " .zolo_header_hamburger_menu").removeClass("open2");
						// Animated class start
							var $canvas_wrap = j$('.zolo_el_header_hamburger_canvas_menu .animated');
							
							$canvas_wrap.each(function() {
								var element = j$(this);
								var animation = element.data('animation');
								var animationDelay = element.data('delay');
								element.removeClass(animation + " visible");
								element.addClass('hiding');								
							});
							
							var $clipping_wrap = j$('.zolo_el_header_hamburger_canvas_menu .clipping');
							j$(".zolo_el_header_hamburger_canvas_menu .clipping > .apcore-clipping-wrapper").contents().unwrap();
							j$(".zolo_el_header_hamburger_canvas_menu .clipping > .apcore-clipping-content").contents().unwrap();
							
							j$( '.zolo_el_header_hamburger_canvas_menu .clipping .apcore-clipping-overlay').remove();
							
							
							
							$clipping_wrap.each(function() {		
								var clipping = j$(this);
								var animation = clipping.data('animation');																										
								clipping.removeClass(animation + " visible");
								clipping.addClass('clipping-hide');
								clipping.addClass('hiding');
								clipping.removeClass('apcore-clipping-show-content');
								clipping.addClass('apcore-clipping-animation');
							});
							
							// Animated class end
							var $video_wrap = j$("#" + zolo_hamburger_menu_id + ' .apcore-self-hosted-video video');							
							if($video_wrap.length == 1){
								j$(".apcore-self-hosted-video").css({"width": "100%","height":"0","bottom":"auto"});
								$video_wrap.get(0).load();
								$video_wrap.get(0).play();
							}
					}, timedelayout);
					
					j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function() {
						if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
						
						}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
							j$(this).css({"transition-delay":0+"s","opacity":0,});
						
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0, 100%)",});
							
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(-20%, 0px)",});
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(20%, 0px)",});

						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){
								
							j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name ").each(function(i) {
								j$(this).css({"transition-delay": 0.5+"s","opacity":0, "transform": "translate(0%, 200%)",});
							});
						}
					});
					
					
					
				});

			}
		}		
		

// Extended Sidebar
	if (zolo_hamburgermenuaction == 'extended_sidebar') {
	
	j$(".zolo_el_header_hamburger_canvas_sidebar.extended_sidebar_bg_image_fixed").delay(100).fadeIn();
		
		
		j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function() {
					
					if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
					}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
						j$(this).css({"transition-delay":0+"s","opacity":1, "transform": "translate(0%, 0px)",});
							
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0, 100%)",});
						
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(-20%, 0px)",});
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
						j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(20%, 0px)",});
					
					}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){
						
					j$("#" + zolo_hamburger_menu_id + " .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name ").each(function(i) {
						j$(this).css({"transition-delay": 0+"s","opacity":0, "transform": "translate(0%, 200%)",});
					});
						
					}
					
					//j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
				});
		
		
    j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_hamburger_button").on('click', function (e) {
		//e.preventDefault();
						
		j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_hamburger_canvas_sidebar").addClass("open");
		j$("#"+zolo_hamburger_menu_id+" .hamburger_extended_sidebar_mask").addClass('hamburger_extended_sidebar_maskopen');
		
		
			// Animation delay to Menu Start
			var $canvas_menu_wrap = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_sidebar .zolo_element_vertical_menu');								
			$canvas_menu_wrap.each(function() {
				var element = j$(this);							
				if( element.hasClass('zolo_element_vertical_menu') ){
					//var id = j$(this).attr('id');
					
					var animationDelay = j$(this).data('delay');
					
					setTimeout(function() {
						j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function(i) {

							if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
								j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1});
							}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
								j$(this).css({"transition-delay":0+"s","opacity":1, "transform": "translate(0%, 0px)",});
							}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
								j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0%)",});
								
							}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
								j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(-0%, 0px)",});
								
							}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
								j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0px)",});
								
							
							}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){

								j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name ").each(function(i) {
									j$(this).css({"transition-delay": (i/10)+0.1+"s","opacity":1, "transform": "translate(0%, 0%)",});
								});

							}
						});
					}, animationDelay);					
				}	
			});
			// Animation delay to Menu End

		
			// Animated class start
			var $canvas_wrap = j$('.zolo_el_header_hamburger_canvas_sidebar .animated');
			$canvas_wrap.each(function() {
				var element = j$(this);
				var animation = element.data('animation');
				var animationDelay = element.data('delay');
				if (animationDelay) {
					setTimeout(function() {
						element.addClass(animation + " visible");
						element.removeClass('hiding');
						if (element.hasClass('counter')) {
							element.children('.value').countTo();
						}
					}, animationDelay);
				} else {
					element.addClass(animation + " visible");
					element.removeClass('hiding');
					if (element.hasClass('counter')) {
						element.children('.value').countTo();
					}
				}
			});
		
			var $clipping_wrapper = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_sidebar .clipping'),
			wrapper = '<div class="apcore-clipping-wrapper"><div class="apcore-clipping-content"></div></div>';	
			$clipping_wrapper.wrapInner( wrapper );	
				
			$clipping_wrapper.each(function(){
					var $that = j$(this),
					$wrapper = $that.find('.apcore-clipping-wrapper'),
					overlay = '<div class="apcore-clipping-overlay"></div>',
					animation =  $that.attr('data-animation'),
					animationDelay =  $that.attr('data-delay');	
					
					j$(overlay).appendTo( $wrapper );
					
					if (animationDelay) {
							setTimeout(function () {
								$that.addClass(animation + " visible");
								$that.removeClass('clipping-hide');
								setTimeout(function(){
									$that.addClass('apcore-clipping-show-content');
								},700)
								setTimeout(function(){
									$that.removeClass('apcore-clipping-animation');
								},1400)
							}, animationDelay);
						} else {						
							$that.addClass(animation + " visible");
							$that.removeClass('clipping-hide');
							setTimeout(function(){
								$that.addClass('apcore-clipping-show-content');
							},500)
					}
					
			});			
		
		// Animated class end
		var $video_wrap = j$("#" + zolo_hamburger_menu_id + ' .apcore-self-hosted-video video');
		//alert($video_wrap.length);
		if($video_wrap.length == 1){
			$video_wrap.get(0).load();
			$video_wrap.get(0).play();
		}
    });
 
		 
    j$(".hamburger_extended_sidebar_mask , #" + zolo_hamburger_menu_id + " .zolo_el_header_hamburger_close_button").on('click', function (e) {
			
			j$('#' + zolo_hamburger_menu_id +' .zolo_el_header_hamburger_canvas_sidebar').addClass('out_anim' );
			setTimeout(function() {
				j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_hamburger_canvas_sidebar").removeClass("open").removeClass("out_anim");
				j$("#"+zolo_hamburger_menu_id+" .hamburger_extended_sidebar_mask").removeClass('hamburger_extended_sidebar_maskopen');
				
			// Animated class start
			
			var $canvas_wrap = j$('.zolo_el_header_hamburger_canvas_sidebar .animated');
			
			$canvas_wrap.each(function() {
				var element = j$(this);
				
				var animation = element.data('animation');
				var animationDelay = element.data('delay');
				element.removeClass(animation + " visible");
				element.addClass('hiding');								
			});
			
			
			var $clipping_wrap = j$("#" + zolo_hamburger_menu_id + ' .zolo_el_header_hamburger_canvas_sidebar .clipping');
			j$(".zolo_el_header_hamburger_canvas_sidebar .clipping > .apcore-clipping-wrapper").contents().unwrap();
			j$(".zolo_el_header_hamburger_canvas_sidebar .clipping > .apcore-clipping-content").contents().unwrap();
			
			j$( '.zolo_el_header_hamburger_canvas_sidebar .clipping .apcore-clipping-overlay').remove();
			
			$clipping_wrap.each(function() {	
			//alert('kri');			
				var clipping = j$(this);
				var animation = clipping.data('animation');																										
				clipping.removeClass(animation + " visible");
				clipping.addClass('clipping-hide');
				clipping.addClass('hiding');
				clipping.removeClass('apcore-clipping-show-content');
				clipping.addClass('apcore-clipping-animation');
			});
			
			
			// Animated class end
			
			var $video_wrap = j$("#" + zolo_hamburger_menu_id + ' .apcore-self-hosted-video video');
			if($video_wrap.length == 1){
				$video_wrap.get(0).load();
				$video_wrap.get(0).play();
			}
			
			}, 350);
			
			
			j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li").each(function() {
						if( j$('.zolo_element_vertical_menu').hasClass('ascending_fade_in') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0%, 0px)",});
						}else if( j$('.zolo_element_vertical_menu').hasClass('noanimation') ){
							j$(this).css({"transition-delay":0+"s","opacity":1, "transform": "translate(0%, 0px)",});
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_up') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(0, 100%)",});
							
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_left') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(-20%, 0px)",});
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_fadein_right') ){
							j$(this).css({"transition-delay":0+"s","opacity":0, "transform": "translate(20%, 0px)",});
						}else if( j$('.zolo_element_vertical_menu').hasClass('ascending_reveal') ){
								
							j$("#" + zolo_hamburger_menu_id + " .zolo_element_vertical_menu .zolo_header_primary_menu > ul > li > a.menu_item span.menu_item_name ").each(function(i) {
								j$(this).css({"transition-delay": 0+"s","opacity":0, "transform": "translate(0%, 200%)",});
							});
						}
					});
					
			
    });

}
// Extended Sidebar End



});
		 
		 
		 
		 
		 
}















//Search Code

function apcore_header_builder_search(){

	 j$('body').find('.zolo_el_header_builder_search_content').each(function () {
		 var _this = j$(this); 
		 var zolo_hamburger_menu_id = _this.data('id');
		 
		j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_hamburger_open_button").click(function(e) {
			j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_builder_canvas").addClass("open");
			j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_builder_canvas").removeClass("close");
			j$("#"+zolo_hamburger_menu_id+" .zolo_header_hamburger_search").addClass("open");
			j$("#"+zolo_hamburger_menu_id+" .search-field").focus();
			
		});
		j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_hamburger_close_button").click(function(e) {
			j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_builder_canvas").removeClass("open");
			j$("#"+zolo_hamburger_menu_id+" .zolo_el_header_builder_canvas").addClass("close");
			j$("#"+zolo_hamburger_menu_id+" .zolo_header_hamburger_search").removeClass("open");
		});
	
});
	 
}

//Search Code



function apcore_gallery_caption(){
	
const imgContent = document.querySelectorAll('.zolo_portfolio_style7 .zolo_portfolio_caption');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    imgContent[i].style.left = e.clientX + 'px';
    imgContent[i].style.top = e.clientY + 'px';
  }
};

document.addEventListener('mousemove', showImgContent);
}



j$('.zolo_el_header_hamburger_open_button').on('click', function(){
    setTimeout(function() {j$('input.orig').focus();}, 1000);
});



function apcore_splitting(){
	j$('body').find('.apcore_splitting_text').each(function() {
    var _this = j$(this);
    var splittingby_value = _this.data('splittingby');
	
    if (splittingby_value == 'chars') {
        Splitting({
            target: j$(".apcore_splitting_chars"),
        });
    } else {
        const animtextLine = Splitting({
            target: j$(".apcore_splitting_lines, .apcore_splitting_words"),
            by: 'lines'
        });
        animtextLine.forEach((splitResult) => {
            var lineIndex = 0;
            console.log("splitresults called");

            const wrappedLines = splitResult.lines.map((wordsArr, i) =>
                `<div class="line" style="--line-index: ${i};"><span class="words">${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace"></span>`).join('')}</span></div>`).join('');
            splitResult.el.innerHTML = wrappedLines;
        });

    }

    ScrollOut({
        targets: ".apcore_splitting_text_true",
        threshold: 0.1,
        once: true
    });
    ScrollOut({
        targets: ".apcore_splitting_text_false",
        threshold: 0.1,
        once: false
    });

});
}

function switch_element_check() {
	
	j$('body').find('.zolo_pricing_table_switch_element').each(function() {
		
		var checkBox = document.getElementById("zolo_pricing_table_switch_checbox");
		var text1 = document.getElementsByClassName("zolo_pricing_table_price2");
		var text2 = document.getElementsByClassName("zolo_pricing_table_price1");
		
		var buttontext1 = document.getElementById("zolo_pricing_table_switch_monthly");
		var buttontext2 = document.getElementById("zolo_pricing_table_switch_annually");
		
		for (var i = 0; i < text1.length; i++) {
			if (checkBox.checked == true) {
				text1[i].style.display = "inline-block";
				text2[i].style.display = "none";
			
			} else if (checkBox.checked == false) {
				text1[i].style.display = "none";
				text2[i].style.display = "inline-block";		
			}
		}
	
		if (checkBox.checked == true) {    
			buttontext1.classList.remove("active");
			buttontext2.classList.add("active");
		}else{
			buttontext1.classList.add("active");
			buttontext2.classList.remove("active");
		}
	});
}

