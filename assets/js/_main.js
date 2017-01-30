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
$(function() {
	$("article").fitVids();
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
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


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 200
});
} )( jQuery );