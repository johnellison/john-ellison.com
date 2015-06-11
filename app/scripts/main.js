/* jshint devel:true */

(function( $ ){
  'use strict'; 

  $( document ).foundation();
 
  $( '.play-button' ).click( function ( e ) {
    e.preventDefault();

    $( '#video-modal' ).foundation( 'reveal', 'open' );
    $( 'iframe' ).attr( 'src', '//player.vimeo.com/video/121852108?autoplay=1&color=7e8b9e&title=0&byline=0&portrait=0' );
    listenForEscape();
  });

  $( '.close-reveal-modal ').click( function ( e ) {
    e.preventDefault();

    $( '#video-modal' ).foundation( 'reveal', 'close' );
    $( 'iframe').attr('src', '//player.vimeo.com/video/121852108?autoplay=0&color=7e8b9e&title=0&byline=0&portrait=0');
  });

  function listenForEscape() {
    $( document ).keyup( function ( e ) {
      if ( e.keyCode == 27 ) {
        $( 'iframe').attr('src', '//player.vimeo.com/video/121852108?autoplay=0&color=7e8b9e&title=0&byline=0&portrait=0');
      }
    });
  }

})( jQuery );

