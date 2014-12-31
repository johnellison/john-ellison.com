(function() {
  'use strict';

  //follow
  $("[data-event='twitter-follow']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Follow',
      'eventAction' : 'clicked',
      'eventLabel' : 'Follow @iamjohnellison',
      'eventValue' : 2
    });
  });

  //contact button-video
  $("[data-event='contact-button-video']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'Send Me an Email (video)',
      'eventValue' : 400
    });
  });

  //contact button
  $("[data-event='contact-button']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'Send Me an Email',
      'eventValue' : 400
    });
  });

  //contact form
  $("[data-event='contact-form']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'Send Message',
      'eventValue' : 400
    });
  });

  //contact from services
  $("[data-event='service-contact-button']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Contact',
      'eventAction' : 'sent',
      'eventLabel' : 'services.cta',
      'eventValue' : 400
    });
  });

  //subscribe
  $("[data-event='subscribe']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'Subscribe',
      'eventAction' : 'sent',
      'eventLabel' : 'Get Updates',
      'eventValue' : 10
    });
  });
}());
 