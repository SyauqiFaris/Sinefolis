// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const promoButtons = document.querySelectorAll('.promo-button');
const ctaButton = document.querySelector('.cta-button');

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

// Promo button click effect
promoButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Simple alert for demo
        const promoTitle = this.closest('.promo-card').querySelector('.promo-card-title').textContent;
        alert('Promo code for "' + promoTitle + '" has been applied!');
        
        // Add a simple click animation
        this.style.transform = 'scale(0.95)';
        window.location.href = '../Now Showing Page/index (1).html';
        setTimeout(function() {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// CTA button click effect
ctaButton.addEventListener('click', function() {
    // Simple alert for demo
    alert('Redirecting to booking page...');
    
    // Add a simple click animation
    this.style.transform = 'scale(0.95)';
    window.location.href = '../Now Showing Page/index (1).html';
    setTimeout(function() {
        ctaButton.style.transform = 'scale(1)';
    }, 150);
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