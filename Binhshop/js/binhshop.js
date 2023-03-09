let menu = document.querySelector('#menubtn');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('#closebtn');

menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})
close.addEventListener('click',()=>{
    navbar.classList.remove('active');
})


var swiper = new Swiper(".item-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".shop-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
       
      },
      1000:{
        slidesPerView:4,
      }

    },
  });

