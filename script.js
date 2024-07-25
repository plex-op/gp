var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 7.5,
      spaceBetween: 40,
    },
  },
});

// triger function for calling original function
window.onscroll = function () {
  changeNavbarBackground();
};

// orginal function for changing navigation bar background
function changeNavbarBackground() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}
