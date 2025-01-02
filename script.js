var acc = document.getElementsByClassName("toggle_btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

   
    
    var panel = document.getElementsByClassName("nav_links-mobile");
    panel[0].classList.toggle("active-bar");
 if (panel[0].style.maxHeight) {
      panel[0].style.maxHeight = null;
 }
 else{
      panel[0].style.maxHeight = panel[0].scrollHeight + "px";
 }
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// let slideIndex = 1;
// showSlides(slideIndex);

// // Media query for screens smaller than or equal to 768px
// const mediaQuery = window.matchMedia('(max-width: 768px)'); // Matches screen width <= 768px

// // This function will be called whenever the screen size changes
// function handleScreenSizeChange(e) {
//   if (!e.matches) {
//     // If the screen is greater than 768px, stop the slideshow (do nothing)
//     hideAllSlides();  // Hide all slides when the screen is larger than 768px
//   } else {
//     // If the screen is 768px or smaller, show the slides
//     showSlides(slideIndex);
//   }
// }

// // Add the event listener for media query changes
// mediaQuery.addEventListener('change', handleScreenSizeChange);

// // Initial call to handle the current screen size
// handleScreenSizeChange(mediaQuery);

// // Next/previous controls
// function plusSlides(n) {
//   if (mediaQuery.matches) {  // Only allow slideshow to work if the screen width is <= 768px
//     showSlides(slideIndex += n);
//   }
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   if (mediaQuery.matches) {  // Only allow slideshow to work if the screen width is <= 768px
//     showSlides(slideIndex = n);
//   }
// }

// // Function to show slides
// function showSlides(n) {
//   // If the screen is greater than 768px, do nothing (slideshow is stopped)
//   if (!mediaQuery.matches) {
//     return;
//   }

//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   // Ensure the slideIndex is within bounds
//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length; }

//   // Hide all slides and remove active class from dots
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   // Show the current slide and activate the corresponding dot
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// // Function to hide all slides (used when screen is larger than 768px)
// function hideAllSlides() {
//   let slides = document.getElementsByClassName("mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// }













































