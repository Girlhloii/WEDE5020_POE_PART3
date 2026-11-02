document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Clear previous error messages
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("numberError").textContent = "";
        document.getElementById("messageError").textContent = "";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("number").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            document.getElementById("nameError").textContent = "Full Name is required.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (phone === "" || phone.length < 10) {
            document.getElementById("numberError").textContent = "Please enter a valid contact number (at least 10 digits).";
            isValid = false;
        }

        if (message === "") {
            document.getElementById("messageError").textContent = "Message field cannot be empty.";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Stop form submission if there are errors
        } else {
            event.preventDefault(); // Remove this line if you want the form to actually submit/refresh
            alert("Thank you! Your message has been successfully validated and sent.");
        }
    });
});