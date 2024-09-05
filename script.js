// Get the open Nav Button
const openMobileMenuBtn = document.getElementById('show-mobile-menu');
console.log(openMobileMenuBtn);

// Get the Close Nav Button
const closeMobileMenuBtn = document.getElementById('hide-mobile-menu');

// Get the Navigation Links container (nav bar)
const navBar = document.getElementById('nav-links');

// Add click event to Open Nav Button
openMobileMenuBtn.addEventListener('click', () => {
  navBar.classList.add('active');
  closeMobileMenuBtn.classList.add('close-btn');
});

// Add click event to Close Nav Button
closeMobileMenuBtn.addEventListener('click', () => {
  navBar.classList.remove('active');
  closeMobileMenuBtn.classList.remove('close-btn');
});

// Get all the navigation links (li elements or a elements inside the li)
const navLinks = navBar.querySelectorAll('li');

// Loop through each link and add a click event listener to remove the active class
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    closeMobileMenuBtn.classList.remove('close-btn');
  });
});

// Add click event to close the navbar when clicking outside of it
document.addEventListener('click', (event) => {
  // Check if the click is outside the navBar or the open button
  if (!navBar.contains(event.target) && !openMobileMenuBtn.contains(event.target)) {
    navBar.classList.remove('active');
    closeMobileMenuBtn.classList.remove('close-btn');
  }
});

console.log(navLinks);
