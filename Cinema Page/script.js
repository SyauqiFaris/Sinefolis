// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const cinemaCards = document.querySelectorAll('.cinema-card');

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

// Cinema card click functionality
cinemaCards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Get cinema name and location from data attributes
        const cinemaName = this.getAttribute('data-name');
        const cinemaLocation = this.getAttribute('data-location');
        
        // Show alert with cinema information
        alert('Cinema: ' + cinemaName + '\n\nLocation: ' + cinemaLocation);
        
        // Add a simple click animation
        this.style.transform = 'scale(0.98)';
        
        // Reset the card after animation
        setTimeout(function() {
            card.style.transform = '';
        }, 150);
    });
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

// Simple page load animation
window.addEventListener('load', function() {
    const cinemaCards = document.querySelectorAll('.cinema-card');
    
    // Add cards one by one with a slight delay
    cinemaCards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Animate in
            setTimeout(function() {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
});