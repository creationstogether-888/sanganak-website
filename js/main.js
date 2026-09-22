// SANGANAK Website - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    console.log('SANGANAK website loaded successfully');

    // Initialize subject card selection
    initializeSubjectCards();

    // Smooth scroll for anchor links
    initializeSmoothScroll();

    // Form validation
    initializeFormValidation();
});

// Initialize subject card selection on booking page
function initializeSubjectCards() {
    const subjectCards = document.querySelectorAll('.subject-card');
    const selectedSubjectInput = document.getElementById('selected-subject');

    if (!subjectCards.length) return;

    subjectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            subjectCards.forEach(c => c.classList.remove('selected'));

            // Add active class to clicked card
            this.classList.add('selected');

            // Update hidden input
            const subject = this.getAttribute('data-subject');
            if (selectedSubjectInput) {
                selectedSubjectInput.value = subject;
            }

            console.log('Subject selected:', subject);
        });
    });
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('.booking-form, .contact-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Basic validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    field.style.borderWidth = '2px';
                } else {
                    field.style.borderColor = '';
                    field.style.borderWidth = '';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }

            // Email validation
            const emailField = this.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    e.preventDefault();
                    alert('Please enter a valid email address');
                    emailField.style.borderColor = '#ef4444';
                }
            }
        });
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Track page views (optional analytics)
function trackPageView() {
    const page = window.location.pathname;
    console.log('Page view:', page);
    // Can be extended to send data to analytics service
}

// Initialize on page load
window.addEventListener('load', function() {
    trackPageView();
});

// Add to CSS for selected subject card
const style = document.createElement('style');
style.textContent = `
    .subject-card.selected {
        border-color: #0d9488 !important;
        background-color: rgba(13, 148, 136, 0.05) !important;
        transform: translateY(-5px) !important;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
    }

    .subject-card.selected h3 {
        color: #0d9488 !important;
    }
`;
document.head.appendChild(style);
