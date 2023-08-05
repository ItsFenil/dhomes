jQuery(document).ready(function($) {
	"use strict";
	// position dropdown menu correctly
	jQuery.fn.zolo_position_menu_dropdown = function( variables ) {
	
		return 	jQuery( this ).children( '.sub-menu' ).each( function() {
			
			// reset attributes
			jQuery( this ).removeAttr( 'style' );
			jQuery( this ).show();
			jQuery( this ).removeData( 'shifted' );
	
			var submenu = jQuery( this );
	
			if( submenu.length ) {
				var submenu_position = submenu.offset(),
					submenu_left = submenu_position.left,
					submenu_top = submenu_position.top,
					submenu_height = submenu.height(),
					submenu_width = submenu.outerWidth(),
					submenu_bottom_edge = submenu_top + submenu_height,
					submenu_right_edge = submenu_left + submenu_width,
					browser_bottom_edge = jQuery( window ).height(),
					browser_right_edge = jQuery( window ).width();
	
				// current submenu goes beyond browser's right edge
				if( submenu_right_edge > browser_right_edge ) {
	
					//if there are 2 or more submenu parents position this submenu below last one
					if( submenu.parent().parent( '.sub-menu' ).parent().parent( '.sub-menu' ).length ) {
						submenu.css({
							'left': '0',
							'top': submenu.parent().parent( '.sub-menu' ).height()
						});
	
					// first or second level submenu
					} else {
						// first level submenu
						if( ! submenu.parent().parent( '.sub-menu' ).length ) {
							submenu.css( 'left', ( -1 ) * submenu_width + submenu.parent().width() );
	
						// second level submenu
						} else {
							submenu.css({
								'left': ( -1 ) * submenu_width
							});
						}
					}
	
					submenu.data( 'shifted', 1 );
				// parent submenu had to be shifted
				} else if( submenu.parent().parent( '.sub-menu' ).length ) {
					if( submenu.parent().parent( '.sub-menu' ).data( 'shifted' ) ) {
						submenu.css( 'left', ( -1 ) * submenu_width );
						submenu.data( 'shifted', 1 );
					}
				}
	
				
			}
		});
	
	};

	// Recursive function for positioning menu items correctly on load
	jQuery.fn.walk_through_menu_items = function() {
		jQuery( this ).zolo_position_menu_dropdown();

		if( jQuery( this ).find( '.sub-menu' ).length ) {
			jQuery( this ).find( '.sub-menu li' ).walk_through_menu_items();
		} else {
			return;
		}
	};
	
	
	// position mega menu correctly
	jQuery.fn.zolo_position_megamenu = function( variables ) {
		
		var reference_elem = '';
		reference_elem = jQuery( '.zolo-container' );
		
		if( jQuery('.zolo-container' ).length ) {
		
			var main_nav_container = reference_elem,
				main_nav_container_position = main_nav_container.offset(),
				main_nav_container_width = main_nav_container.width(),
				main_nav_container_left_edge = main_nav_container_position.left,
				main_nav_container_right_edge = main_nav_container_left_edge + main_nav_container_width;
				
				return this.each( function() {
		
					jQuery( '.zolo-container .zolo-navigation li' ).each( function() {
						
						var li_item = jQuery( this ),
							li_item_position = li_item.offset(),
							megamenu_wrapper = li_item.find( '.zolo-megamenu-wrapper' ),
							megamenu_wrapper_width = megamenu_wrapper.outerWidth(),
							megamenu_wrapper_position = 0;
							
							//alert(megamenu_wrapper_width); 1280
		
						// check if there is a megamenu
						if( megamenu_wrapper.length ) {
							megamenu_wrapper.removeAttr( 'style' );
		
							// set megamenu max width
							var reference_apress_row;
		
							reference_apress_row = jQuery( '.zolo-container' );
							
		
							if( megamenu_wrapper.hasClass( 'col-span-12' ) && ( reference_apress_row.width() < megamenu_wrapper.data( 'maxwidth' ) ) ) {
								
								megamenu_wrapper.css( 'width', reference_apress_row.width() );
							} else {
								megamenu_wrapper.removeAttr( 'style' );
								
							}
		
							// reset the megmenu width after resizing the menu
							megamenu_wrapper_width = megamenu_wrapper.outerWidth();
							
							
							if( li_item_position.left + megamenu_wrapper_width > main_nav_container_right_edge ) {
								megamenu_wrapper_position = -1 * ( li_item_position.left - ( main_nav_container_right_edge - megamenu_wrapper_width ) );
								
								
								megamenu_wrapper.css( 'left', megamenu_wrapper_position );
								
									
							}
						}
					});
				});
		
			
		}
	};

	jQuery.fn.calc_megamenu_responsive_column_widths = function( variables ) {
		jQuery( this ).find( '.zolo-megamenu-menu' ).each( function() {
			var megamenu_holder = jQuery( this ).find( '.zolo-megamenu-holder' ),
				megamenu_holder_full_width = megamenu_holder.data( 'width' ),
				reference_zolo_row = jQuery( '.zolo-container' ),
				available_space = reference_zolo_row.width();

			if( available_space < megamenu_holder_full_width ) {
				megamenu_holder.css( 'width', available_space );

				if( ! megamenu_holder.parents( '.zolo-megamenu-wrapper' ).hasClass( 'zolo-megamenu-fullwidth' ) ) {
					megamenu_holder.find( '.zolo-megamenu-submenu' ).each( function() {
						var submenu = jQuery( this );
						var submenu_width = submenu.data( 'width' ) * available_space / megamenu_holder_full_width;
						submenu.css( 'width', submenu_width );
					});
				}
			} else {
				megamenu_holder.css( 'width', megamenu_holder_full_width );

				if( ! megamenu_holder.parents( '.zolo-megamenu-wrapper' ).hasClass( 'zolo-megamenu-fullwidth' ) ) {
					megamenu_holder.find( '.zolo-megamenu-submenu' ).each( function() {
						jQuery( this ).css( 'width', jQuery( this ).data( 'width' ) );
					});
				}
			}
		});
	};

	

	// Calculate main menu dropdown submenu position
	if( jQuery.fn.zolo_position_menu_dropdown ) {
		jQuery( '.zolo-dropdown-menu, .zolo-dropdown-menu li' ).mouseenter( function() {
			jQuery( this ).zolo_position_menu_dropdown();
		});

		jQuery( '.zolo-dropdown-menu > ul > li' ).each( function() {
			jQuery( this ).walk_through_menu_items();
		});

		jQuery( window ).on( 'resize', function() {
			jQuery( '.zolo-dropdown-menu > ul > li' ).each( function() {
				jQuery( this ).walk_through_menu_items();
			});
		});
	}

	// Set overflow state of main nav items; done to get rid of menu overflow
	jQuery( '.zolo-dropdown-menu ' ).mouseenter( function() {
		jQuery( this ).css( 'overflow', 'visible' );
	});
	jQuery( '.zolo-dropdown-menu' ).mouseleave( function() {
		jQuery( this ).css( 'overflow', '' );
	});

	
	// Calculate megamenu position
	if( jQuery.fn.zolo_position_megamenu ) {
		jQuery( '.zolo-navigation > ul' ).zolo_position_megamenu();

		jQuery( '.zolo-navigation .zolo-megamenu-menu' ).mouseenter( function() {
			jQuery( this ).parent().zolo_position_megamenu();
		});

		jQuery(window).resize(function() {
			jQuery( '.zolo-navigation > ul' ).zolo_position_megamenu();
		});
	}

	// Calculate megamenu column widths
	if( jQuery.fn.calc_megamenu_responsive_column_widths ) {
		jQuery( '.zolo-navigation > ul' ).calc_megamenu_responsive_column_widths();

		jQuery(window).resize(function() {
			jQuery( '.zolo-navigation > ul' ).calc_megamenu_responsive_column_widths();
		});
	}


	// Set overflow on the main menu correcty to show dropdowns when needed
	jQuery( '.zolo-navigation' ).mouseover(function() {
		jQuery( this ).css( 'overflow', 'visible' );
	});

	jQuery( '.zolo-navigation' ).mouseout(function() {
		jQuery( this ).css( 'overflow', '' );
	});
	
	

	
	//Mobile Menu

	jQuery('.zolo_mobile_menu_icon').append('<div class="selector-down"></div>');
	jQuery('.mobile-nav-holder').append(jQuery('.zolo-header-area .zolo-navigation .zolo-navbar-nav').clone());
	
	//Mobile Nav Area Icon Remove
	jQuery('.mobile_header_area .zolo-middle-logo-menu-logo').remove();
	jQuery('.mobile_header_area .zolo-small-menu').remove();
	jQuery('.mobile_header_area .navbar_cart').remove();
	jQuery('.mobile_header_area .zolo-search-menu').remove();
	
	jQuery('.mobile-nav-holder .zolo-navbar-nav').attr("id","mobile-nav");
	jQuery('.mobile-nav-holder ul#mobile-nav').removeClass('zolo-navbar-nav');

	//onepage	
	var enable_onepage = js_local_vars.enable_onepage;
	var mobileheadersticky_showhide = js_local_vars.mobileheader_sticky_showhide;
	if( enable_onepage == 'on' ){
		jQuery('.mobile-nav-holder').find('a').on('click', function (e) {
			var el = jQuery(this)	, id = el.attr('href'), menuheight = jQuery('.mobile-nav-holder').find('ul').height();
			
			if(mobileheadersticky_showhide == 'on'){
				var logo_height = jQuery('.mobile_header_area .headercontent_box').height();
			}else{
				var logo_height = 0;
			}
			
			jQuery('html, body').animate({
					scrollTop: jQuery(id).offset().top - (menuheight - logo_height)
				}, 900);	
				  
			e.preventDefault();	
			jQuery('.mobile-nav-holder').find('ul').hide();	
			jQuery('.mobile_button_wrap').hide();	
			$("#nav_toggle").removeClass('active');  		   
		});
	}

	jQuery('.mobile-nav-holder ul#mobile-nav').find('li').each(function () {
		
		var classes = 'mobile-nav-item';

		if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery( this ).attr( 'class', classes );
		if( jQuery( this ).attr( 'id' ) ) {
			jQuery( this ).attr( 'id', jQuery( this ).attr( 'id' ).replace( 'menu-item', 'mobile-menu-item' ) );
		}
		jQuery( this ).attr( 'style', '' );
	});
	
	jQuery('.zolo_mobile_menu_icon').click(function(){
		if( jQuery('.mobile-nav-holder #mobile-nav, .mobile-nav .mobile_button_wrap').hasClass( 'mobile-menu-expanded' ) ) {
			jQuery('.mobile-nav-holder #mobile-nav, .mobile-nav .mobile_button_wrap').removeClass( 'mobile-menu-expanded' );
		} else {
			jQuery('.mobile-nav-holder #mobile-nav, .mobile-nav .mobile_button_wrap').addClass( 'mobile-menu-expanded' );
	}
		jQuery('.mobile-nav-holder #mobile-nav, .mobile-nav .mobile_button_wrap').slideToggle(200,'linear');
	});
	
	// Make megamenu items mobile ready
	jQuery('.mobile-nav-holder .nav > .mobile-nav-item').each(function() {
		jQuery(this).find('.zolo-megamenu-widgets-container').remove();

		jQuery(this).find('.zolo-megamenu-holder > ul').each( function() {
			jQuery(this).attr('class', 'sub-menu');
			jQuery(this).attr('style', '');
			jQuery(this).find('> li').each( function() {

				// add menu needed menu classes to li elements
				var classes = 'mobile-nav-item';

				if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
					classes += ' mobile-current-nav-item';
				}
				jQuery( this ).attr( 'class', classes );

				// Append column titles and title links correctly
				if( ! jQuery(this).find('.zolo-megamenu-title a, > a').length ) {
					jQuery(this).find('.zolo-megamenu-title').each( function() {
						if( ! jQuery( this ).children( 'a' ).length ) {
							jQuery( this ).append( '<a href="#">' + jQuery( this ).text() + '</a>' );
						}
					});

					if( ! jQuery(this).find('.zolo-megamenu-title').length ) {

						var parent_li = jQuery(this);

						jQuery( this ).find( '.sub-menu').each( function() {
							parent_li.after( jQuery( this ) );

						});
						jQuery( this ).remove();
					}
				}
				jQuery( this ).prepend( jQuery( this ).find( '.zolo-megamenu-title a, > a' ) );

				jQuery( this ).find( '.zolo-megamenu-title' ).remove();
			});
			jQuery( this ).closest( '.mobile-nav-item' ).append( jQuery( this ) );
		});

		jQuery( this ).find( '.zolo-megamenu-wrapper, .caret, .zolo-megamenu-bullet' ).remove();
	});
	
	// Make mobile menu sub-menu toggles
	
	jQuery('.mobile-nav-holder .nav li').each(function() {
		var classes = 'mobile-nav-item';
	
		if(jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery( this ).attr( 'class', classes );
	
		if( jQuery( this ).find( ' > ul' ).length ) {
			jQuery( this ).prepend('<span href="#" aria-haspopup="true" class="open-submenu"></span>' );
	
			jQuery( this ).find( ' > ul' ).hide();
		}
	});
	
	jQuery('.mobile-nav-holder .open-submenu').click( function(e) {
	
		e.stopPropagation();
		jQuery( this ).parent().children( '.sub-menu' ).slideToggle(200,'linear');
	
	});


});
