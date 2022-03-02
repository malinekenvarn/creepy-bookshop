

/*A script that makes a function that shows the navigation links when clicking the hamburger menu link on a mobile version*/

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('navlinks')[0];

hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/* Function to open search field when clicking on search icon*/
const searchIcon = document.getElementById('searchIcon');
const search = document.getElementsByClassName('toggle-search')[0];

searchIcon.addEventListener('click', ()=>{
  search.classList.toggle('active');
})


/* Function to show a form when clicking the button to confirm order and checkout*/
const checkout = document.getElementById('checkout-button');
const checkoutForm = document.getElementsByClassName('checkoutForm')[0];

checkout.addEventListener('click', ()=>{
  checkoutForm.classList.toggle('active');
})




