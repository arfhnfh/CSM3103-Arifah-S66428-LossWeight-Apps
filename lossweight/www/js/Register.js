document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
        } else {
            alert("Registration successful!");
            // Add your registration logic here
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const logoutBtn = document.getElementById('logout-btn');

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    logoutBtn.addEventListener('click', function () {
        // Add your logout logic here (e.g., clear session, local storage, etc.)
        alert("Logged out successfully!");
        window.location.href = "Login.html"; // Redirect to login page
    });
});