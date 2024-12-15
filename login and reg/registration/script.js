// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

    const submitButton = document.getElementById("submit");
    const usernameField = document.querySelector(".input-box input[placeholder='Username']");
    const emailField = document.querySelector(".input-box input[placeholder='Email']");
    const passwordField = document.querySelector(".input-box input[placeholder='Password']");
    const termsCheckbox = document.getElementById("check");


    submitButton.addEventListener("click", () => {
        const username = usernameField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        // Check if all fields are filled and terms are agreed
        if (!username || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        if (!termsCheckbox.checked) {
            alert("You must agree to the Terms & Conditions to register.");
            return;
        }

        // Show registration success message
        alert(`Registration successful! Welcome, ${username}.`);
    });
});
