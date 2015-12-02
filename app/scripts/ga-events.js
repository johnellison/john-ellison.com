(function() {
  'use strict';

  //contact button
  $('[data-event="contact-button"]').on('click', function(){
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'Contact',
      'eventAction': 'sent',
      'eventLabel': 'Contact Me',
      'eventValue': 400
    });
  });

  $('[data-event="view-resume"').on('click', function() {
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'View Resume'
    });
  });
}());
