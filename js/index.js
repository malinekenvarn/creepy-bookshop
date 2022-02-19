/*A script that makes a function that shows the navigation links when clicking the hamburger menu link on a mobile version*/

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('navlinks')[0];

hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}