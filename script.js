const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

    //Toggle mobile menu visibility//
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");

});

     //Close menu when click the closed button//
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    //Close menu when the navlink is clicked//
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper //
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
    0:  {
        slidesPerView: 1
     },
     768:  {
        slidesPerView: 2
     },
     1024:  {
        slidesPerView: 3
     },
    }
   });
