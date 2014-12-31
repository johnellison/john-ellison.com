/* jshint devel:true */
$(document).foundation();

// Use Strict IFFEE wrapper for all function calls and declarations
// Pass in jQuery $ as parameter to IFFEE for no-conflict mode
(function($){
  'use strict'; 
  smoothScroll();
  viewMore();
  updateName();

  function updateName() {
    // create name input variable
    var $name = $("[name='name']");
    // create nameFromAbove variable
    var $fromName = $("#name-from-above");
    //when name input variable changes, update nameFrom Above
    $name.change( function() {
      // alert($name.val());
      $fromName.text($name.val());
    });
  }

  //view-more reveal text-concealed
  function viewMore(){
    $('.view-more').click(function(e){
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      var $this = $(this);

      $this.next('.text-concealed').slideToggle(function(){
        var $viewToggle = $this.children('.view-more-link').children('.view-toggle');

        if($viewToggle.text() == 'Less' ) {
          $viewToggle.text('More');
        } else $viewToggle.text('Less');
        
      });
      
    });
  }

  //scrollTo #hash animations
  function smoothScroll(){
    $('a[href^="#"]').on('click',function (e) {
      //check for event object
      if (!e) {
        e = window.event;
      }

      //prevent default for both ie old and new
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      //grab the anchor target and wrap in jQuery object
      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
    });
  }
})(jQuery);

