document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');  // Selecting form by class
    
    // Event listeners for real-time validation
    form.name.addEventListener('input', validateName);
    form.email.addEventListener('input', validateEmail);
    form.subject.addEventListener('input', validateSubject);
    form.message.addEventListener('input', validateMessage);
    form.contactPreference.forEach(radio => radio.addEventListener('change', validateContactPreference));
    
    // Name Validation
    function validateName() {
        const name = form.name.value.trim();
        const errorDiv = document.getElementById('error-name');
        var namePattern = /^[A-Za-z\s]+$/;  // Only alphabets and spaces allowed
        if (name === "") {
            errorDiv.textContent = "Name is required.";
        } else if (!namePattern.test(name)) {
            errorDiv.textContent = "Name must only contain letters and spaces.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Email Validation
    function validateEmail() {
        const email = form.email.value.trim();
        const errorDiv = document.getElementById('error-email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "") {
            errorDiv.textContent = "Email is required.";
        } else if (!emailPattern.test(email)) {
            errorDiv.textContent = "Please enter a valid email address.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Subject Validation
    function validateSubject() {
        const subject = form.subject.value.trim();
        const errorDiv = document.getElementById('error-subject');
        if (subject === "") {
            errorDiv.textContent = "Subject is required.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Message Validation
    function validateMessage() {
        const message = form.message.value.trim();
        const errorDiv = document.getElementById('error-message');
        if (message === "") {
            errorDiv.textContent = "Message is required.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Contact Preference Validation (Radio Buttons)
    function validateContactPreference() {
        const contactPreference = form.contactPreference.value;
        const errorDiv = document.getElementById('error-contact-preference');
        if (!contactPreference) {
            errorDiv.textContent = "Please select a contact preference.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Prevent form submission until validation passes
    form.onsubmit = function(event) {
        validateName();
        validateEmail();
        validateSubject();
        validateMessage();
        validateContactPreference();

        // Check if there are any error messages
        const errors = document.querySelectorAll('.error-message');
        if (Array.from(errors).some(error => error.textContent !== "")) {
            event.preventDefault();  // Prevent form submission if validation fails
            return false;
        }

        return true;
    };
});
