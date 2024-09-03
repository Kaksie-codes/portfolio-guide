// get the open Nav Button
const openMobileMenuBtn = document.getElementById('show-mobile-menu');
console.log(openMobileMenuBtn);

// Get the Close Nav Button
const closeMobileMenuBtn = document.getElementById('hide-mobile-menu');

// Get the Navigation Links
const navLinks = document.getElementById('nav-links');

// Add click event to Open Nav Button
openMobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.add('active');
  closeMobileMenuBtn.classList.add('close-btn');
});

closeMobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeMobileMenuBtn.classList.remove('close-btn');
});
