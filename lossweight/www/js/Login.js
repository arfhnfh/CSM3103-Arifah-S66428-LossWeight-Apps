document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === "" || password === "") {
            alert("All fields are required!");
        } else {
            alert("Login successful!");
            // Redirect to Bmi.html
            window.location.href = "Bmi.html";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});