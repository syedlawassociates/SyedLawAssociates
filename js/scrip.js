// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
   let menu = document.querySelector('#menu-btn');
   let navbar = document.querySelector('.header .navbar');

   menu.onclick = () => {
       menu.classList.toggle('fa-times');
       navbar.classList.toggle('active');
   };

   window.onscroll = () => {
       menu.classList.remove('fa-times');
       navbar.classList.remove('active');
   };

   var homeSwiper = new Swiper(".index-slider", {
       loop: true,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
   });

   var reviewsSwiper = new Swiper(".reviews-slider", {
       grabCursor: true,
       loop: true,
       autoHeight: true,
       spaceBetween: 20,
       breakpoints: {
           0: {
               slidesPerView: 1,
           },
           700: {
               slidesPerView: 2,
           },
           1000: {
               slidesPerView: 3,
           },
       },
   });

   let loadMoreBtn = document.querySelector('.packages .load-more .btn');
   let currentItem = 3;

   loadMoreBtn.onclick = () => {
       let boxes = [...document.querySelectorAll('.packages .box-container .box')];
       for (var i = currentItem; i < currentItem + 3; i++) {
           if (boxes[i]) {
               boxes[i].style.display = 'inline-block';
           }
       }
       currentItem += 3;
       if (currentItem >= boxes.length) {
           loadMoreBtn.style.display = 'none';
       }
   };
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var teamBox = document.getElementById("teamBox");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the team box, open the modal 
teamBox.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

