// JavaScript Real-Time Validation for the Subscribe Page
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('subscriptionForm');   

    // Event listeners for real-time validation
    form.fullName.addEventListener('input', validateFullName);
    form.username.addEventListener('input', validateUsername);
    form.password.addEventListener('input', validatePassword);
    form.confirmPassword.addEventListener('input', validatePassword);
    form.email.addEventListener('input', validateEmail);
    form.confirmEmail.addEventListener('input', validateEmail);
    form.phone.addEventListener('input', validatePhone);
    form.age.addEventListener('input', validateAge);
    form.buildingNumber.addEventListener('input', validateBuildingNumber);
    form.streetName.addEventListener('input', validateStreetName);
    form.newsletter.addEventListener('change', validateNewsletter);

    // Full Name Validation
    function validateFullName() {
        const fullName = form.fullName.value.trim();
        const errorDiv = document.getElementById('error-fullname');
        var namePattern = /^[A-Za-z\s]+$/;  // Only alphabets and spaces allowed
        if (!namePattern.test(fullName)) {
            errorDiv.textContent = "Full name must only contain letters and spaces.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Username Validation
    function validateUsername() {
        const username = form.username.value.trim();
        const errorDiv = document.getElementById('error-username');
        if (!username) {
            errorDiv.textContent = "Username is required.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Password and Confirm Password Validation
    function validatePassword() {
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const errorDiv = document.getElementById('error-password');
        if (password && confirmPassword && password !== confirmPassword) {
            errorDiv.textContent = "Passwords do not match.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Email and Confirm Email Validation
    function validateEmail() {
        const email = form.email.value.trim();
        const confirmEmail = form.confirmEmail.value.trim();
        const errorDiv = document.getElementById('error-email');
        if (email && confirmEmail && email !== confirmEmail) {
            errorDiv.textContent = "Email addresses do not match.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Phone Validation
    function validatePhone() {
        const phone = form.phone.value.trim();
        const phoneRegex = /^\+974\d{8}$/;
        const errorDiv = document.getElementById('error-phone');
        if (!phone.match(phoneRegex)) {
            errorDiv.textContent = "Phone number must start with +974 and followed by 8 digits.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Age Validation
    function validateAge() {
        const age = form.age.value.trim();
        const errorDiv = document.getElementById('error-age');
        if (age < 18) {
            errorDiv.textContent = "You must be at least 18 years old to subscribe.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Building Number Validation
    function validateBuildingNumber() {
        const buildingNumber = form.buildingNumber.value.trim();
        const errorDiv = document.getElementById('error-buildingNumber');
        if (!buildingNumber) {
            errorDiv.textContent = "Building Number is required.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Street Name Validation
    function validateStreetName() {
        const streetName = form.streetName.value.trim();
        const errorDiv = document.getElementById('error-streetName');
        if (!streetName) {
            errorDiv.textContent = "Street Name is required.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Newsletter Validation
    function validateNewsletter() {
        const newsletter = form.newsletter.checked;
        const errorDiv = document.getElementById('error-newsletter');
        if (!newsletter) {
            errorDiv.textContent = "You must agree to subscribe to the newsletter.";
        } else {
            errorDiv.textContent = "";
        }
    }

    // Prevent form submission until validation passes
    form.onsubmit = function(event) {
        validateFullName();
        validateUsername();
        validatePassword();
        validateEmail();
        validatePhone();
        validateAge();
        validateBuildingNumber();
        validateStreetName();
        validateNewsletter();

        // Check if there are any error messages
        const errors = document.querySelectorAll('.error-message');
        if (Array.from(errors).some(error => error.textContent !== "")) {
            event.preventDefault();  // Prevent form submission if any errors
            return false;
        }

        form.submit();
    };
});
