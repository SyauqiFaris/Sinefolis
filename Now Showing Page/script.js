// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const showtimeButtons = document.querySelectorAll('.showtime-btn');

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

// Add click event listener to each showtime button
showtimeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get movie title and showtime from data attributes
        const movieTitle = this.getAttribute('data-movie');
        const showtime = this.getAttribute('data-time');
        
        // Show alert with movie and time information
        alert('You selected: ' + movieTitle + ' at ' + showtime);
        
        // Add a simple click animation
        this.style.transform = 'scale(0.95)';
        
        // Reset the button after animation
        setTimeout(function() {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add hover effect for movie cards
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        // Add a subtle glow effect on hover
        this.style.boxShadow = '0 20px 40px rgba(74, 144, 226, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        // Remove the glow effect when not hovering
        this.style.boxShadow = '';
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
    const movieCards = document.querySelectorAll('.movie-card');
    
    // Add cards one by one with a slight delay
    movieCards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Animate in
            setTimeout(function() {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
});