// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn('Target element not found for smooth scrolling:', this.getAttribute('href'));
        }
    });
});

// Simple form validation
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const name = this.querySelector('[name="name"]').value.trim();
    const email = this.querySelector('[name="email"]').value.trim();
    const subject = this.querySelector('[name="subject"]').value.trim();
    const message = this.querySelector('[name="message"]').value.trim();
    
    // Check if all fields are filled
    const successMessageElement = document.getElementById('success-message');
    if (name && email && subject && message) {
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            successMessageElement.textContent = 'Please enter a valid email address.';
            successMessageElement.style.color = 'red';
            return;
        }
        // Display success message
        successMessageElement.textContent = 'Thank you for your message!';
        successMessageElement.style.color = 'green';
        this.reset(); // Reset form fields
    } else {
        // Display error message
        successMessageElement.textContent = 'Please fill all the fields.';
        successMessageElement.style.color = 'red';
    }
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return; // Ensure the button exists

    // Show the button when the user scrolls down 20px from the top of the document
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 20 ? 'block' : 'none';
    });

    // Scroll to the top of the document when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

// Menu Toggle for Mobile
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.menu')?.classList.toggle('show');
});
