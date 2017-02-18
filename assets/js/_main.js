/*! Plugin options and other jQuery stuff */

// Responsive Nav
var navigation = responsiveNav("#site-nav", { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 200, // Integer: Speed of the transition, in milliseconds
  label: "", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});

$(document).ready(function() {

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
      if( winW >= 600) {

          // Init Skrollr
          var s = skrollr.init({
              forceHeight: false
          });
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

  enquire.register("screen and (min-width : 600px)", initAdjustWindow(), false);


 $('#myTabs').tabCollapse();
  
} )( jQuery );