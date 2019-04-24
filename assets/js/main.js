/*(function($){
    "use strict";
}) 

jQuery(document).ready(function($){
	
});

jQuery(window).load(function(){
    
});

}(jQuery));
*/

(function ($) {
    "use strict";

        jQuery(document).ready(function($) {
            
            $(".logo-carousel").owlCarousel({
                margin: 30,
                loop: true,
                dots: false,
                nav: false,
				responsive : {
					// breakpoint from 0 up
					0 : {
						items: 1
					},
					// breakpoint from 480 up
					300 : {
						items: 2
					},
					// breakpoint from 480 up
					480 : {
						items: 2
					},
					// breakpoint from 480 up
					768 : {
						items: 4
					},
					// breakpoint from 768 up
					992 : {
						items: 6
					}
				}
            });
            
            
            $(".case-studies-carousel").owlCarousel({
                margin: 30,
                loop: true,
                dots: true,
                nav: false,
				responsive : {
					// breakpoint from 0 up
					0 : {
						items: 1
					},
					// breakpoint from 480 up
					480 : {
						items: 1
					},
					// breakpoint from 480 up
					768 : {
						items: 2
					},
					// breakpoint from 768 up
					992 : {
						items: 3
					}
				}
            });
            
            $(".testimonial-carousel").owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                nav: false,
            });
            
            $(".testimonial-carousel-2").owlCarousel({
                items: 1,
                margin: 30,
                loop: true,
                dots: true,
                nav: false,
            });
            
            $(".homepage-slides").owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                nav: true,
                navText: ["<i class='zmdi zmdi-arrow-left'></i>",
                         "<i class='zmdi zmdi-arrow-right'></i>"],
            });
            
			//Off Canvas Menu
            $(".menu-trigger").on('click', function() {
                $(".off-canvas-menu").addClass("show-off-canvas-menu");
                $(".off-canvas-menu-shade").addClass("active");
            });
                 
            
            $(".menu-close, .off-canvas-menu-shade" ).on('click', function() {
                $(".off-canvas-menu").removeClass("show-off-canvas-menu");
                $(".off-canvas-menu-shade").removeClass("active");
            });
			
            // Search Bar
            $(".search-trigger").on('click', function() {
                $(".search-bar-wrap").addClass("active");
            });
                 
            
            $(".search-close" ).on('click', function() {
                $(".search-bar-wrap").removeClass("active");
            });
			

			$(".single-testimonial-box").hover(function()	{
				$(".single-testimonial-box").removeClass('active');
				$(this).addClass('active');				
			});
			
			$('.video-play-btn').magnificPopup({type:'video'});
			
			$('#mobile-menu').slicknav({
			  prependTo: '#mobile-menu-wrap'
			});
                         
        });
    
    jQuery(Window).load(function(){
     
        
    });
    
}(jQuery));
 