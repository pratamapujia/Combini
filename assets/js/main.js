$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 100) {
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
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

  $(".owl-carousel").owlCarousel({
    margin: 20,
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
        items: 2,
        nav: false,
      },
    },
  });
});

$(".alur-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".alur",
});
$(".alur").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".alur-for",
  dots: true,
  centerMode: true,
  variableWidth: true,
});

// Sticky Scroll
var nav = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("sticky", "shadow");
  } else {
    nav.classList.remove("sticky", "shadow");
  }
});
