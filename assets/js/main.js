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
  $(".topWeek").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // $(".carousel").owlCarousel({
  //   margin: 20,
  //   center: true,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     400: {
  //       items: 2,
  //       nav: false,
  //     },
  //     600: {
  //       items: 3,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 5,
  //       nav: false,
  //     },
  //   },
  // });

  $(".owl-carousel").owlCarousel({
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
  // $(".carouselTestimoni").owlCarousel({
  //   margin: 20,
  //   center: true,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     600: {
  //       items: 1,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: false,
  //     },
  //   },
  // });
});

var nav = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("sticky", "shadow");
  } else {
    nav.classList.remove("sticky", "shadow");
  }
});
