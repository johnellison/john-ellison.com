(function() {
  'use strict';

  //vimeo analytics events
  ga('send', 'event', 'Video', 'Started video', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Paused video', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Resumed video', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Completed video', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Skipped video forward or backward', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Played video: 25%', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Played video: 50%', 'Journey & Passion', undefined, {'nonInteraction': 1});
  ga('send', 'event', 'Video', 'Played video: 75%', 'Journey & Passion', undefined, {'nonInteraction': 1});

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

  $("[data-event='view-resume'").on('click', function() {
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'View Resume'
    });
  })

  });
}());
 