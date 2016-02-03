$j(window).load(function(){
	setTimeout(function(){
		$j("#panel").animate({marginLeft: "0px"});
		$j("a.open").addClass('opened');
		$j("#panel").addClass('opened-panel');
	},1000);
});


$j(document).ready(function() {
	
	$j('#panel select').sSelect();
	
	$j("#panel a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel").css("margin-left");
		if (margin_left == "-208px"){
			$j("#panel").animate({marginLeft: "0px"});
			$j("#panel").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel").animate({marginLeft: "-208px"});
			$j(this).removeClass('opened');
			$j("#panel").removeClass('opened-panel');
		}
		return false;
	});
	
	$j('#tootlbar_header_top').change(function(){
		if($j(this).val() != ""){
			
    	$j.post(root+'updatesession.php', {header_top : $j(this).val()}, function(data){
					location.reload();
			});
		}
	});
	
	$j('#tootlbar_pattern').change(function(){
		jQuery('#tootlbar_pattern_css').remove();
		
		if($j(this).val() != "no"){
			$j('#tootlbar_boxed').getSetSSValue('boxed');
			$j('#tootlbar_background').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+$j(this).val()+".png'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('#tootlbar_background').change(function(){
	
	jQuery('#tootlbar_background_css').remove();
		if($j(this).val() != "no"){
			$j('#tootlbar_boxed').getSetSSValue('boxed');
			$j('#tootlbar_pattern').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+$j(this).val()+".jpg'); \
									background-position: 0px 0px; \
									background-repeat: no-repeat; \
									background-attachment: fixed; \
									-webkit-background-size: cover; \
									-moz-background-size: cover; \
									background-size: cover; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('#tootlbar_boxed').change(function(){
	
		$j('body').removeClass('boxed');
		$j('body').addClass($j(this).val());
		
		if($j(this).val() != "boxed"){
			$j('#tootlbar_pattern').getSetSSValue('no');
			$j('#tootlbar_background').getSetSSValue('no');
		}
	});
	
	
	$j('#tootlbar_colors .color').each(function(){
		$j(this).on('click',function(){
				$j('#tootlbar_colors .color').removeClass('active');
				$j(this).addClass('active');
				var color = $j(this).data('color');
				
				if($j(this).hasClass('color1')){
					var logo_image = "logo_retina_blue";
					var footer_logo_image = "s7_blue";
					var hart_image = "qode_like_blue";
					var quote_image = "quote_blue";
					var right_arrow = "pagination_arrow_right_blue";
					var right_arrow_last = "pagination_arrow_right_last_blue";
					var left_arrow = "pagination_arrow_left_blue";
					var left_arrow_first = "pagination_arrow_left_first_blue";
					var social_share = "social_share_blue";
					var facebook_share = "facebook_share_blue";
					var twitter_share = "twitter_share_blue";
					var google_share = "google_share_blue";
					var toolbar_logo = "toolbar_logo_blue";
					var list_circle = "list_circle_blue";
                                        var info_icon   = "info_icon_blue";
				}else if($j(this).hasClass('color2')){
					var logo_image = "logo_retina_light_blue";
					var footer_logo_image = "s7_light_blue";
					var hart_image = "qode_like_light_blue";
					var quote_image = "quote_light_blue";
					var right_arrow = "pagination_arrow_right_light_blue";
					var right_arrow_last = "pagination_arrow_right_last_light_blue";
					var left_arrow = "pagination_arrow_left_light_blue";
					var left_arrow_first = "pagination_arrow_left_first_light_blue";
					var social_share = "social_share_light_blue";
					var facebook_share = "facebook_share_light_blue";
					var twitter_share = "twitter_share_light_blue";
					var google_share = "google_share_light_blue";
					var toolbar_logo = "toolbar_logo_light_blue";
					var list_circle = "list_circle_light_blue";
                                        var info_icon   = "info_icon_light_blue";
				}else if($j(this).hasClass('color3')){
					var logo_image = "logo_retina_green";
					var footer_logo_image = "s7_green";
					var hart_image = "qode_like_green";
					var quote_image = "quote_green";
					var right_arrow = "pagination_arrow_right_green";
					var right_arrow_last = "pagination_arrow_right_last_green";
					var left_arrow = "pagination_arrow_left_green";
					var left_arrow_first = "pagination_arrow_left_first_green";
					var social_share = "social_share_green";
					var facebook_share = "facebook_share_green";
					var twitter_share = "twitter_share_green";
					var google_share = "google_share_green";
					var toolbar_logo = "toolbar_logo_green";
					var list_circle = "list_circle_green";
                                        var info_icon   = "info_icon_green";
				}else if($j(this).hasClass('color4')){
					var logo_image = "logo_retina_green2";
					var footer_logo_image = "s7_green2";
					var hart_image = "qode_like_green2";
					var quote_image = "quote_green2";
					var right_arrow = "pagination_arrow_right_green2";
					var right_arrow_last = "pagination_arrow_right_last_green2";
					var left_arrow = "pagination_arrow_left_green2";
					var left_arrow_first = "pagination_arrow_left_first_green2";
					var social_share = "social_share_green2";
					var facebook_share = "facebook_share_green2";
					var twitter_share = "twitter_share_green2";
					var google_share = "google_share_green2";
					var toolbar_logo = "toolbar_logo_green2";
					var list_circle = "list_circle_green2";
                                        var info_icon   = "info_icon_green2";
				}else if($j(this).hasClass('color5')){
					var logo_image = "logo_retina_orange";
					var footer_logo_image = "s7_orange";
					var hart_image = "qode_like_orange";
					var quote_image = "quote_orange";
					var right_arrow = "pagination_arrow_right_orange";
					var right_arrow_last = "pagination_arrow_right_last_orange";
					var left_arrow = "pagination_arrow_left_orange";
					var left_arrow_first = "pagination_arrow_left_first_orange";
					var social_share = "social_share_orange";
					var facebook_share = "facebook_share_orange";
					var twitter_share = "twitter_share_orange";
					var google_share = "google_share_orange";
					var toolbar_logo = "toolbar_logo_orange";
					var list_circle = "list_circle_orange";
                                        var info_icon   = "info_icon_orange";
				}else if($j(this).hasClass('color6')){
					var logo_image = "logo_retina_magenta";
					var footer_logo_image = "s7_magenta";
					var hart_image = "qode_like_magenta";
					var quote_image = "quote_magenta";
					var right_arrow = "pagination_arrow_right_magenta";
					var right_arrow_last = "pagination_arrow_right_last_magenta";
					var left_arrow = "pagination_arrow_left_magenta";
					var left_arrow_first = "pagination_arrow_left_first_magenta";
					var social_share = "social_share_magenta";
					var facebook_share = "facebook_share_magenta";
					var twitter_share = "twitter_share_magenta";
					var google_share = "google_share_magenta";
					var toolbar_logo = "toolbar_logo_magenta";
					var list_circle = "list_circle_magenta";
                                        var info_icon   = "info_icon_magenta";
				}else{
					var logo_image = "logo_retina_blue";
					var footer_logo_image = "s7_blue";
					var hart_image = "qode_like_blue";
					var quote_image = "quote_blue";
					var right_arrow = "pagination_arrow_right_blue";
					var right_arrow_last = "pagination_arrow_right_last_blue";
					var left_arrow = "pagination_arrow_left_blue";
					var left_arrow_first = "pagination_arrow_left_first_blue";
					var social_share = "social_share_blue";
					var facebook_share = "facebook_share_blue";
					var twitter_share = "twitter_share_blue";
					var google_share = "google_share_blue";
					var toolbar_logo = "toolbar_logo_blue";
					var list_circle = "list_circle_blue";
                                        var info_icon   = "info_icon_blue";
				}
				
				if ($j("#toolbar_colors_css").length > 0){
					$j("#toolbar_colors_css").remove();
				}
				
				$j('.logo img').attr('src', 'http://demo.qodeinteractive.com/satellite/demo_images/'+logo_image+'.png');
				$j('footer .footer_logo').attr('src', 'http://demo.qodeinteractive.com/satellite/demo_images/'+footer_logo_image+'.png');
				$j('.testimonial_text_holder img').attr('src', 'http://demo.qodeinteractive.com/satellite/demo_images/'+quote_image+'.png');
				
				$j('.message, .dropcap').each(function(){
					if($j(this).inlineStyle("background-color")) {
						$j(this).css('background-color',color);
					}
				});
				
				newSkin ="table th,\
						table tr:nth-child(odd) td,\
						.blog_holder article.blockquote .post_content_holder:hover .blockquote_holder,\
						.blog_holder article.link .post_content_holder:hover .link_holder,\
						.filter_holder ul li.active,\
						.button,\
						#submit_comment,\
						.load_more a,\
						.icon_inner,\
						.progress_bars_with_image_content .bar .bar_noactive, \
						.progress_bars_with_image_content .bar .bar_active,\
						.highlight,\
						.tabs .tabs-nav li.active a,\
						.accordion_holder.accordion h3.ui-state-active > span,\
						.accordion_holder.accordion h3:hover > span,\
						.progress_bars .progress_content,\
						.price_table_inner.active,\
						.price_table_inner:hover,\
						.list.number_with_background ul>li:before,\
						.progress_bars_with_image_content .bar,\
						.footer_top .social_menu.transparent li a,\
						.pie_graf_legend ul li .color_holder,\
						.line_graf_legend ul li .color_holder,\
						.widget .tagcloud a:hover,\
						.mejs-overlay-loading,\
						.mejs-container .mejs-controls,\
						.mejs-captions-text,\
						.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector,\
						.mejs-postroll-layer,\
						.mejs-postroll-close, \
                                                .woocommerce .product .onsale, \
                                                .woocommerce ul.tabs li.active a, \
                                                .woocommerce input[type='submit'], \
                                                .woocommerce .widget_price_filter .ui-slider .ui-slider-handle, \
                                                .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle, \
                                                .woocommerce .widget_price_filter .ui-slider-horizontal .ui-slider-range, \
                                                .woocommerce-page .widget_price_filter .ui-slider-horizontal .ui-slider-range \
						{ \
						background-color: "+color+"; \
						} \
						.social_menu li a{ \
						 background-color: "+color+" !important; \
						}\
						h2 a, \
						h3 a,\
						h5 a,\
						a:hover,\
						p a:hover,\
						.header_top #lang_sel ul > li:hover > a,\
						.header_top #lang_sel_click ul > li:hover > a,\
						.header_top #lang_sel ul li ul li a:hover,\
						.header_top #lang_sel_click ul li ul li a:hover,\
						.header_top #lang_sel_list ul li a,\
						.header_top #lang_sel_list ul li a:visited,\
						.header_top #lang_sel_list ul li a:hover,\
						.header_top #lang_sel_list ul li a.lang_sel_other:hover,\
						nav.main_menu > ul > li:hover > a,\
						nav.main_menu > ul > li.active > a,\
						.drop_down .second .inner ul li:hover a,\
						.drop_down .second .inner ul li.sub ul li:hover a,\
						.drop_down .wide .second ul li a,\
						.drop_down .wide .second .inner ul li h5,\
						.drop_down .wide .second ul li a:hover,\
						.drop_down .wide .second .inner ul li.sub ul li a:hover,\
						.drop_down .wide .second .inner ul li.sub .flexslider ul li a:hover,\
						.drop_down .wide .second ul li .flexslider ul li  a:hover,\
						.drop_down .wide .second .inner ul li .flexslider h5,\
						.drop_down .wide .second .inner ul li.sub .flexslider ul li  h5 a,\
						.drop_down .wide .second .inner ul li .flexslider ul li  h5 a,\
						.drop_down .wide.icons  .second i,\
						.blog_holder article .post_info .date,\
						.blog_holder article .post_info .blog_like:hover span,\
						.portfolio_like:hover span,\
						.blog_holder article .post_info .blog_like a.liked span,\
						.portfolio_like a.liked span,\
						.comment_holder .comment .text .replay, \
						.comment_holder .comment .text .comment-reply-link,\
						.pagination ul li span,\
						.pagination ul li.next a:hover,\
						.pagination ul li.prev a:hover,\
						.pagination ul li.last a:hover,\
						.pagination ul li.first a:hover,\
						.pagination ul li a:hover,\
						.portfolio_navigation .portfolio_prev a:hover,\
						.portfolio_navigation .portfolio_next a:hover,\
						.counter_holder span.counter,\
						.progress_bars .progress_number,\
						.price_table_inner ul li.table_title,\
						.price_in_table .value,\
						.price_in_table .price,\
						.price_in_table .mark,\
						.dropcap,\
						.ordered ol li,\
						.list.circle ul>li,\
						.list.number ul>li,\
						.list.number_with_background ul>li,\
						.list.number ul>li:before,\
						.social_share_holder:hover .social_share_icon,\
						.social_share_dropdown ul li span.share_title,\
						.social_share_dropdown ul li:hover .share_text,\
						.latest_post_bottom .latest_post_like a.liked span,\
						.latest_post_bottom .latest_post_like a:hover span,\
						aside .widget li a:hover,\
						.widget.widget_rss li a.rsswidget:hover,\
						aside #lang_sel_list ul li a:hover,\
						aside #lang_sel_list a.lang_sel_sel:hover,\
						aside #lang_sel_list ul li a.lang_sel_sel,\
						aside #lang_sel ul li ul li:hover a,\
						aside #lang_sel_click ul li ul li:hover a,\
						aside #lang_sel_click a.lang_sel_sel:hover,\
						aside #lang_sel a.lang_sel_sel:hover,\
						.widget .tagcloud a,\
						.footer_top ul li a:hover,\
						.footer_top .widget li a:hover,\
						.widget.widget_rss li a.rsswidget:hover,\
						.footer_top #lang_sel_list ul li a:hover,\
						.footer_top #lang_sel_list a.lang_sel_sel:hover,\
						.footer_top #lang_sel_list ul li a.lang_sel_sel,\
						.footer_top #lang_sel ul li ul li:hover a,\
						.footer_top #lang_sel_click ul li ul li:hover a,\
						.footer_top #lang_sel_click a.lang_sel_sel:hover,\
						.footer_top #lang_sel a.lang_sel_sel:hover,\
						#lang_sel_footer ul li a.lang_sel_sel,\
						#lang_sel_footer ul li a:hover,\
						#lang_sel_footer ul li a.lang_sel_sel:hover,\
						.stylish-select .newListHover, \
                                                .woocommerce .amount, \
                                                .woocommerce aside ul.product_list_widget li span.amount, \
                                                .woocommerce .select2-results li.select2-highlighted, \
                                                .woocommerce-page .select2-results li.select2-highlighted, \
                                                .woocommerce-checkout .chzn-container .chzn-results li.active-result.highlighted, \
                                                .woocommerce ul.products li.product .price, \
                                                .woocommerce ul.products li.product .added_to_cart, \
                                                .woocommerce-pagination ul.page-numbers li span.current, \
                                                .woocommerce div.cart-collaterals h2 a span, \
                                                .woocommerce ul.products li.product:hover h3, \
                                                .woocommerce-page ul.products li.product:hover h3 \
                                                { \
							color: "+color+"; \
						}\
						.testimonial_name{\
							color: "+color+" !important; \
						}\
						.blog_holder article .post_info .blog_like:hover,\
						.portfolio_like:hover,\
						.blog_holder article.blockquote .blockquote_holder,\
						.blog_holder article.link .link_holder,\
						#respond textarea:focus,\
						#respond input[type='text']:focus,\
						.contact_form input[type='text']:focus,\
						.contact_form  textarea:focus,\
						.pagination ul li span,\
						.pagination ul li.next a:hover,\
						.pagination ul li.prev a:hover,\
						.pagination ul li.last a:hover,\
						.pagination ul li.first a:hover,\
						.filter_holder ul li.active,\
						.button.with_border,\
						.icon_holder,\
						.tabs .tabs-nav li.active a,\
						.accordion_holder.accordion h3 > span,\
						.price_table_inner,\
						.dropcap,\
						.list.number ul>li:before,\
						.list.number_with_background ul>li:before,\
						.message,\
						.call_to_action,\
						.social_menu li a,\
						.widget .tagcloud a,\
						.side_menu .widget.widget_search form.form_focus,\
						.widget.widget_search form.form_focus,\
						.header_top .searchform.form_focus,\
						.footer_top_inner .searchform.form_focus,\
						.open, \
                                                .woocommerce div.message, \
                                                .woocommerce .woocommerce-message, \
                                                .woocommerce .woocommerce-error, \
                                                .woocommerce .woocommerce-info, \
                                                .woocommerce textarea:focus, \
                                                .woocommerce-page textarea:focus, \
                                                .woocommerce ul.products li.product .added_to_cart, \
                                                .woocommerce-pagination ul.page-numbers li a.prev:hover, \
                                                .woocommerce-pagination ul.page-numbers li a.next:hover, \
                                                .woocommerce input[type='text']:focus, \
                                                .woocommerce input[type='password']:focus, \
                                                .woocommerce input[type='email']:focus, \
                                                .woocommerce-page input[type='text']:focus, \
                                                .woocommerce-page input[type='password']:focus, \
                                                .woocommerce-page input[type='email']:focus, \
                                                .widget #searchform.form_focus, \
                                                .woocommerce .widget_price_filter .ui-slider .ui-slider-handle, \
                                                .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle, \
                                                .woocommerce-pagination ul.page-numbers li span.current \
						{\
							border-color: "+color+";\
						}\
						.projects_holder article span.text_holder, .portfolio_gallery .image_hover{\
							background-color: rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+", 0.6); \
						}\
						.latest_post_bottom .latest_post_like a:hover,\
						.latest_post_bottom .latest_post_like a.liked,\
						.blog_holder article .post_info .blog_like:hover a,\
						.portfolio_like:hover a,\
						.blog_holder article .post_info .blog_like a.liked,\
						.portfolio_like a.liked,\
						.blog_holder.massonary article .post_info_bottom .blog_like:hover a,\
						.blog_holder.massonary article .post_info_bottom .blog_like a.liked{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+hart_image+".png');\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
							.blog_holder article .post_info .blog_like:hover a,\
							.portfolio_like:hover a,\
							.blog_holder article .post_info .blog_like a.liked,\
							.portfolio_like a.liked,\
							.blog_holder.massonary article .post_info_bottom .blog_like:hover a,\
							.blog_holder.massonary article .post_info_bottom .blog_like a.liked {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+hart_image+"@1_5x.png');\
							}\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
							.blog_holder article .post_info .blog_like:hover a,\
							.portfolio_like:hover a,\
							.blog_holder article .post_info .blog_like a.liked,\
							.portfolio_like a.liked,\
							.blog_holder.massonary article .post_info_bottom .blog_like:hover a,\
							.blog_holder.massonary article .post_info_bottom .blog_like a.liked {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+hart_image+"@2x.png');\
							}\
						}\
						.pagination ul li.next a {\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+right_arrow+".png');\
						}\
						.pagination ul li.last a {\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+right_arrow_last+".png');\
						}\
						.pagination ul li.prev a{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+left_arrow+".png');\
						}\
						.pagination ul li.first a{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+left_arrow_first+".png');\
						}\
						.social_share_holder:hover .social_share_icon{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+social_share+".png');\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
							.social_share_holder:hover .social_share_icon{\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+social_share+"@1_5x.png');\
							}\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
							.social_share_holder:hover .social_share_icon{\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+social_share+"@2x.png');\
							}\
						}\
						.social_share_holder ul li.facebook_share .social_image .social_image_inner {\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+facebook_share+".png');\
						}\
						.social_share_holder ul li.twitter_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+twitter_share+".png');\
						}\
						.social_share_holder ul li.google_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+google_share+".png');\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
							.social_share_holder ul li.facebook_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+facebook_share+"@1_5x.png');\
							}\
							.social_share_holder ul li.twitter_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+twitter_share+"@1_5x.png');\
							}\
							.social_share_holder ul li.google_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+google_share+"@1_5x.png');\
							}\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
							.social_share_holder ul li.facebook_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+facebook_share+"@2x.png');\
							}\
							.social_share_holder ul li.twitter_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+twitter_share+"@2x.png');\
							}\
							.social_share_holder ul li.google_share .social_image .social_image_inner {\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+google_share+"@2x.png');\
							}\
						}\
						#panel-admin h4{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+toolbar_logo+".png');\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min--moz-device-pixel-ratio:1.5), only screen and (-o-min-device-pixel-ratio:150/100), only screen and (min-device-pixel-ratio:1.5), only screen and (min-resolution:160dpi) {\
							#panel-admin h4{\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+toolbar_logo+"@1_5x.png');\
							}\
						}\
						@media only screen and (-webkit-min-device-pixel-ratio:2.0), only screen and (min--moz-device-pixel-ratio:2.0), only screen and (-o-min-device-pixel-ratio:200/100), only screen and (min-device-pixel-ratio:2.0), only screen and (min-resolution:210dpi) {\
							#panel-admin h4{\
								background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+toolbar_logo+"@2x.png');\
							}\
						}\
						.list.circle ul>li{\
							background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+list_circle+".png');\
						}\
                                                .woocommerce .woocommerce-info, \
                                                .woocommerce-page .woocommerce-info {\
                                                        background-image: url('http://demo.qodeinteractive.com/satellite/demo_images/"+info_icon+".png'); \
                                                } \
						";
				jQuery('body').append('<style id="toolbar_colors_css" type="text/css">'+newSkin+'</style>');
				
		});
	});
	
	
}); 

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


$j.fn.inlineStyle = function (prop) {
	 var styles = this.attr("style"),
		 value;
	 styles && styles.split(";").forEach(function (e) {
		 var style = e.split(":");
		 if ($j.trim(style[0]) === prop) {
			 value = style[1];           
		 }                    
	 });   
	 return value;
};
