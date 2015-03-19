(function() {
  'use strict';

  //contact button-video
  $("[data-title='play']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Video',
      'eventAction' : 'Play'
    });
  });

  //contact button
  $("[data-event='contact-button']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'Contact Me',
      'eventValue' : 400
    });
  });


  //contact from services
  $("[data-event='service-contact-button']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'Learn More',
      'eventValue' : 400
    });
  });
}());
 