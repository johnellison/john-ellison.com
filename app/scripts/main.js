/* jshint devel:true */

(function( $ ){
  'use strict';

  function listenForEscape() {
    $( document ).keyup( function ( e ) {
      if ( e.keyCode === 27 ) {
        $( 'iframe').attr('src', '//player.vimeo.com/video/121852108?autoplay=0&color=7e8b9e&title=0&byline=0&portrait=0');
      }
    });
  }

  $( document ).foundation();

  // video modal on index
  $('.play').click( function ( e ) {
    e.preventDefault();

    $('#video-modal').foundation( 'reveal', 'open' );
    $('iframe').attr( 'src', '//player.vimeo.com/video/121852108?autoplay=1&color=7e8b9e&title=0&byline=0&portrait=0' );
    listenForEscape();
  });

  $('.close-reveal-modal').click( function ( e ) {
    e.preventDefault();

    $('#video-modal').foundation( 'reveal', 'close' );
    $('iframe').attr('src', '//player.vimeo.com/video/121852108?autoplay=0&color=7e8b9e&title=0&byline=0&portrait=0');
  });

  // Hides the extra portfolio items on load
  $('.m-portfolio-list').hide();
  $('#projects').show();

  // Slide toggles when clicked...
  $('#projects').click( function ( e ) {
    var $this = $(this);
    e.preventDefault();
    $('.m-portfolio-list').slideToggle( 'slow', function() {
      if ($this.text() === 'Hide More Projects') {
        $this.text('View More Projects');
      } else {
        $this.text('Hide More Projects');
      }
    });
  });

  (function setCopyrightYear() {
    var currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
  })();

})( jQuery );
