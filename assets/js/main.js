$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // script slide up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // menghapus button scroll up
    $("html").css("scrollBehavior", "auto");
  });

  // Script Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
    },
  });
  $(".carouselTestimoni").owlCarousel({
    margin: 20,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("sticky", "shadow");
  } else {
    nav.classList.remove("sticky", "shadow");
  }
});
