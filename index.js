// Enable dropdown on hover for desktop
document.addEventListener('DOMContentLoaded', function () {
    // Only apply on screens wider than 768px (md and up)
    if (window.innerWidth > 700) {
      document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
          let dropdownToggle = this.querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            let dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownToggle.classList.add('show');
            dropdownMenu.classList.add('show');
          }
        });
        dropdown.addEventListener('mouseleave', function () {
          let dropdownToggle = this.querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            let dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownToggle.classList.remove('show');
            dropdownMenu.classList.remove('show');
          }
        });
      });
    }
  });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
});
