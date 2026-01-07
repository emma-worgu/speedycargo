jQuery(document).ready(function($) {
  "use strict";

  // ACCORDION
  if ($(".accordion-header")[0]) {
    $('.accordion-header').on('click', function(e) {
        $(this).toggleClass('open');
        $(this).siblings('.accordion-content').slideToggle();
        $(this).parent().siblings().find('.accordion-content').slideUp();
        $(this).parent().siblings().find('.accordion-header').removeClass('open');
    });
  }



  // HOVER VIDEO CONTROL
  $('.product-masonry-grid > div, .product-single .product-image, .download-item').each(function() {
    const $container = $(this);
    const $video = $container.find('video');

    if ($video.length) {
      $container.on('mouseenter', function() {
        $video.get(0).play();
      });

      $container.on('mouseleave', function() {
        $video.get(0).pause();
      });
    }
  });


  // MOBILE MENU
  $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu .hamburger').toggleClass('active');
        $('body').toggleClass('overflow');
        $('.mobile-navigation').toggleClass('active');
      });


  // MOBILE MENU TOGGLE
  $('.mobile-navigation .main-menu li.menu-item-has-children > svg').on('click', function (e) {
    $(this).parent().children('.mobile-navigation .main-menu li ul').toggle();
    $(this).toggleClass('rotated');
    return true;
  });

  // CUSTOM BUTTON
  $(function() {
    $('.custom-button a, .navbar-button a')
      .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });
  });


  // IMAGE LITEBOX
  $(function() {
    Fancybox.bind(".gallery a, .wp-block-gallery a", {
      captions: true
    });
  });


  // IMAGE CARD CAROUSEL
  const swiper = new Swiper('.image-card-carousel', {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  // PRODUCT CAROUSEL
  const swiperz = new Swiper('.product-carousel', {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  // MARQUEE
  const $marquee = $(".logos-marquee");

  if ($marquee.length) {
    const $original = $marquee.find("ul");

    for (let i = 0; i < 3; i++) {
      $marquee.append($original.clone());
    }

    function startMarquee() {
      const totalWidth = $marquee[0].scrollWidth;
      const duration = totalWidth * 9;

      $marquee.animate({ marginLeft: -totalWidth / 2 }, duration, "linear", function () {
        $marquee.css("margin-left", 0);
        startMarquee();
      });
    }

    startMarquee();
  }



});
