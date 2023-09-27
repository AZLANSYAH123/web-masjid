$(document).ready(function(){
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
});