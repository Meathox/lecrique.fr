/*
  Author: Mathieu Lecrique
*/

/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';
  
    // ========================================================================= //
    //  //LANGUAGE SWITCH
    // ========================================================================= //

    $('#language_switch').on('click', function(e) {
      $('.eng').each(function(){
        this.classList.toggle('active-language')
      });
      $('.fr').each(function(){
        this.classList.toggle('active-language')
      });
    });

    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //
  
  
    $(document).on("scroll", onScroll);
  
    $('a.smoothScroll').on('click', function(e) {
      e.preventDefault();
      $(document).off("scroll");
  
      $('a').each(function() {
        $(this).removeClass('active');
        if ($(window).width() < 768) {
          $('.nav-menu').slideUp();
        }
      });
  
      $(this).addClass('active');
  
      var target = this.hash,
          menu = target;
  
      target = $(target);
      $('html, body').stop().animate({
        'scrollTop': target.offset().top - 80
      }, 500, 'swing', function() {
        window.location.hash = target.selector;
        $(document).on("scroll", onScroll);
      });
    });
  
  
    function onScroll(event) {
      if ($('.home').length) {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
        });
      }
    }
  
    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //
  
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 200 ) {
        $("#main-nav, #main-nav-subpage").slideDown(70);
        $("#main-nav-subpage").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(70);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    });
  
    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //
  
    var typed_eng = $(".typed-eng");
  
    $(function() {
      typed_eng.typed({
        strings: ["Mathieu Lecrique.^150", 
        "A Lead Developer.^150", 
        "A Support player.^150", 
        "The Dungeon Master.^150"],
        typeSpeed: 100,
        loop: true,
      });
    });

    var typed_fr = $(".typed-fr");
  
    $(function() {
      typed_fr.typed({
        strings: ["Mathieu Lecrique.^150", 
        "Chef de projet.^150", 
        "joueur de support.^150", 
        "le maitre du donjon.^150"],
        typeSpeed: 100,
        loop: true,
      });
    });
  
    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //
  
  
    $('.services-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
      });
  
  
    // ========================================================================= //
    //  Konami JS
    // ========================================================================= //
    var easter_egg = new Konami('mariage.html');

  });
  
  