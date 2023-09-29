$(document).ready(function(){

  $(".show-popup-Infak").click(function(){
    $(".wrapper-popup").addClass('show');
   
  });
  $(".close-popup").click(function(){
  $(".wrapper-popup").removeClass('show');
  });
    $('.hamburger').click(function(){
        $(".top-menu").css("right","0");
    });
    $('.close').click(function(){
    $(".top-menu").css("reight","-100vw");
  });

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay:false,
        
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
   
    var swiper = new Swiper(".Swiper-kegiatan", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
