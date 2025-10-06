// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const ctaButton = document.getElementById('ctaButton');

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

// CTA button click effect
ctaButton.addEventListener('click', function() {
    // Simple alert for demo
    window.location.href = '../Promo Page/index (1).html';
    
    // Add a simple click animation
    ctaButton.style.transform = 'scale(0.95)';
    setTimeout(function() {
        ctaButton.style.transform = 'scale(1)';
    }, 150);
});

// Smooth scrolling for navigation links
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        
        // Only prevent default for anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Simple number animation for stats
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(function(stat) {
        const finalNumber = parseInt(stat.textContent);
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let currentNumber = 0;
        const increment = finalNumber / 50; // 50 steps
        
        const timer = setInterval(function() {
            currentNumber += increment;
            
            if (currentNumber >= finalNumber) {
                stat.textContent = finalNumber + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentNumber) + suffix;
            }
        }, 40);
    });
}

// Run number animation when page loads
window.addEventListener('load', function() {
    setTimeout(animateNumbers, 500);
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