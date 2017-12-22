(function ($, root, undefined) {$(function () {'use strict'; // on ready start


  $('.site-nav__item--overview .site-nav__link').attr('href', '#day-one');


// ======================================
//    Waypoints
//    nav highlight on sticky header
// ======================================

$('.section--day').waypoint(function(direction) {
   if (direction === 'up') {
    // highlight previous region
    var previousRegionId = $('#' + this.element.id).prev().attr('id');
     $('.itinerary-nav__item.is-active').removeClass('is-active');
     $('.itinerary-nav__item--' + previousRegionId).addClass('is-active');
   } else if (direction === 'down') {
     // highlight current section
     var currentRegionId = this.element.id;
     $('.itinerary-nav__item.is-active').removeClass('is-active');
     $('.itinerary-nav__item--' + currentRegionId).addClass('is-active');
   }
 });


});})(jQuery, this); // on ready end