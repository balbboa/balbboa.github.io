/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
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
      'scrollTop': target.offset().top + 10
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
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
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

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["[Abzu@localhost ~]$ python whoami.py^2000 \n\n Ol??, eu sou Arthur Balboa. Sou pesquisador e desenvolvedor web. Possuo T??cnico em Redes de computadores, sou Bacharel em Ci??ncias e Tecnologia e estudante de Engenharia da Computa????o pela Universidade Federal do Rio Grande do Norte (UFRN).\n\n Possuo experi??ncia nas ferramentas: HTML5, CSS3, Sass, Bootstrap, JQuery, React, Next.Js, NodeJS, Wordpress e Angular. E nas linguagens de programa????o: Python, JavaScript, PHP, C, C# e C++.\n\n Usu??rio Linux, amante do Front-end e entusiasta da seguran??a da informa????o.\n\n Louco por ch?? mate gelado, esportes e m??sica."],
      typeSpeed: 0,
      loop: false,
    }
    );
  });

  // Call the functions
  magnifPopup();

});
