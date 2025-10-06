// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const feedbackForm = document.getElementById('feedbackForm');

// Form fields
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const location = document.getElementById('location');
const comment = document.getElementById('comment');

// Error message elements
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const locationError = document.getElementById('locationError');
const commentError = document.getElementById('commentError');

// Hamburger menu toggle
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Remove active class from all links
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 26, 47, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 26, 47, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Form validation
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    fullNameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
    locationError.textContent = '';
    commentError.textContent = '';
    
    // Check if fields are empty
    let isValid = true;
    
    if (fullName.value.trim() === '') {
        fullNameError.textContent = 'Please enter your full name';
        isValid = false;
    }
    
    if (email.value.trim() === '') {
        emailError.textContent = 'Please enter your email address';
        isValid = false;
    }
    
    if (age.value.trim() === '') {
        ageError.textContent = 'Please enter your age';
        isValid = false;
    } else if (isNaN(age.value) || age.value <= 0) {
        ageError.textContent = 'Please enter a valid age';
        isValid = false;
    }
    
    if (location.value === '') {
        locationError.textContent = 'Please select a cinema location';
        isValid = false;
    }
    
    if (comment.value.trim() === '') {
        commentError.textContent = 'Please enter your feedback or comments';
        isValid = false;
    }
    
    // If all fields are valid, submit the form
    if (isValid) {
        alert('Thank you for your feedback! We will review it shortly.');
        feedbackForm.reset();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});