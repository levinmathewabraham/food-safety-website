// document.addEventListener('DOMContentLoaded', function () {
    // Only apply on screens wider than 768px (md and up)
    // if (window.innerWidth > 700) {
    //   document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    //     dropdown.addEventListener('mouseenter', function () {
    //       let dropdownToggle = this.querySelector('.dropdown-toggle');
    //       if (dropdownToggle) {
    //         let dropdownMenu = this.querySelector('.dropdown-menu');
    //         dropdownToggle.classList.add('show');
    //         dropdownMenu.classList.add('show');
    //       }
    //     });
    //     dropdown.addEventListener('mouseleave', function () {
    //       let dropdownToggle = this.querySelector('.dropdown-toggle');
    //       if (dropdownToggle) {
    //         let dropdownMenu = this.querySelector('.dropdown-menu');
    //         dropdownToggle.classList.remove('show');
    //         dropdownMenu.classList.remove('show');
    //       }
    //     });
    //   });
    // }

//     const viewMoreBtn = document.getElementById('view-more-sectors');
//     const viewLessBtn = document.getElementById('view-less-sectors');
//     const sectorsGrid = document.getElementById('sectors-grid');
//     const hiddenSectors = sectorsGrid.querySelectorAll('.col.d-none');

//     if(viewMoreBtn) {
//       viewMoreBtn.addEventListener('click', function() {
//         hiddenSectors.forEach(function(card) {
//           card.classList.remove('d-none');
//         });
//         viewMoreBtn.classList.add('d-none');
//         viewLessBtn.classList.remove('d-none');
//       });
//     }

//     if(viewLessBtn) {
//       viewLessBtn.addEventListener('click', function() {
//         hiddenSectors.forEach(function(card) {
//           card.classList.add('d-none');
//         });
//         viewLessBtn.classList.add('d-none');
//         viewMoreBtn.classList.remove('d-none');
//       });
//     }
// });

$('.owl-carousel').owlCarousel({
  items:4,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false
      },
      1200:{
          items:4,
          nav:false
      }
  }
});

AOS.init({
    duration: 1000,
    // once: true
});

// Phone number validation
// document.addEventListener('DOMContentLoaded', function() {
//     const phoneInput = document.querySelector('input[name="phone"]');
    
//     if (phoneInput) {
//         phoneInput.addEventListener('input', function(e) {
//             // Remove any non-numeric characters except +, -, (, ), and space
//             let value = e.target.value;
//             let cleaned = value.replace(/[^0-9+\-()\s]/g, '');
            
//             // Update the input value with cleaned version
//             if (value !== cleaned) {
//                 e.target.value = cleaned;
//             }
//         });
        
//         // Also validate on form submission
//         const form = phoneInput.closest('form');
//         if (form) {
//             form.addEventListener('submit', function(e) {
//                 const phoneValue = phoneInput.value;
//                 const phoneRegex = /^[0-9+\-()\s]+$/;
                
//                 if (!phoneRegex.test(phoneValue)) {
//                     e.preventDefault();
//                     alert('Please enter a valid phone number (only numbers, spaces, hyphens, and parentheses allowed)');
//                     phoneInput.focus();
//                     return false;
//                 }
//             });
//         }
//     }
// });
