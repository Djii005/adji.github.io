// Script for handling the contact form submission

// Select the form element
const contactForm = document.getElementById('contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form fields
    contactForm.reset();
});
