/*! Plugin options and other jQuery stuff */

// Responsive Nav
var navigation = responsiveNav("#site-nav", { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 200, // Integer: Speed of the transition, in milliseconds
  label: "<i class='fa fa-bars'></i> Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});

$('html').click(function() {
  //Hide the menus if visible
  if ($(navigation.wrapper).hasClass('opened')) {
  	navigation.toggle();
  }
});

$('#site-nav').click(function(event){
    event.stopPropagation();
});

// FitVids options
// $(function() {
// 	$("article").fitVids();
// });

// Add lightbox class to all image links
//$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  // $('.image-popup').magnificPopup({
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  //   },
  //   image: {
  //     tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
  //   },
  //   removalDelay: 300, // Delay in milliseconds before popup is removed
  //   // Class that is added to body when popup is open. 
  //   // make it unique to apply your CSS animations just to this exact popup
  //   mainClass: 'mfp-fade'
  // });

// var $grid = $('.grid').masonry({
//       "itemSelector": ".grid-item",
//       "columnWidth": 400,
//       fitWidth: true
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });

// var $container = $('#slide-2');
// $container.imagesLoaded(function(){
//   $container.masonry({
//     itemSelector : '.item',
//     columnWidth : 240
//   });
// });


    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash); 
        if($(target).attr('id').substring(0,4) != 'tab-'){
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 55
            }, 1000);
            return false;
          }
        }
      }
    });
    // var aboutOffset = $("#slide-2").offset().top - 200;
    // var portfolioOffset = $("#slide-3").offset().top - 200;
    // var $w = $(window).scroll(function(){
    //   if ( $('#about-link').hasClass('active') ) {
    //     if ( $w.scrollTop() > aboutOffset ) {   
    //       $('#about-link').removeClass('active');
    //       $('#portfolio-link').addClass('active');
    //     }
    //   }
    //   if ( $('#portfolio-link').hasClass('active') ) {
    //     if ( $w.scrollTop() < aboutOffset ) {   
    //       $('#about-link').addClass('active');
    //       $('#portfolio-link').removeClass('active');
    //     }
    //     if ( $w.scrollTop() > portfolioOffset ) {   
    //       $('#contact-link').addClass('active');
    //       $('#portfolio-link').removeClass('active');
    //     }
    //   }
    //   if ( $('#contact-link').hasClass('active') ) {
    //     if ( $w.scrollTop() < portfolioOffset ) {   
    //       $('#contact-link').removeClass('active');
    //       $('#portfolio-link').addClass('active');
    //     }
    //   }
    // });


  $('.js-show-bio, #about-toggle').click(function(e) {
    e.preventDefault();
    $('.user-card-bio').addClass('user-card-bio-visible').removeClass('user-card-bio-hidden');
  });
  $('.js-hide-bio').click(function() {
    $('.user-card-bio').removeClass('user-card-bio-visible').addClass('user-card-bio-hidden');
  });
});

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 200);
	});
	
	function adjustWindow(){

	    // Get window size
	    winH = $window.height();
	    winW = $window.width();

	    // Keep minimum height 550
	    if(winH <= 480) {
	        winH = 480;
	    }

	    // Init Skrollr for 768 and up
	    if( winW >= 480) {

	        // Init Skrollr
	        var s = skrollr.init({
	            forceHeight: false
	        });

	        // Resize our slides
	        // $slide.height(winH);

	        // s.refresh($('.homeSlide'));

	    } else {

	        // Init Skrollr
	        var s = skrollr.init();
	        s.destroy();
	    }
	
		// Check for touch
	   	if(Modernizr.touch) {

			// Init Skrollr
			var s = skrollr.init();
			s.destroy();
	   	}

	}
	
	function initAdjustWindow() {
	    return {
	        match : function() {
	            adjustWindow();
	        },
	        unmatch : function() {
	            adjustWindow();
	        }
	    };
	}

	enquire.register("screen and (min-width : 480px)", initAdjustWindow(), false);


// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });


 $('#myTabs').tabCollapse();
  
} )( jQuery );