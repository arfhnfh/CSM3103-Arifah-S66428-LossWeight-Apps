document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('messageForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var title = document.getElementById('title').value;
        var message = document.getElementById('message').value;
        var photo = document.getElementById('photo').files[0];

        if (username === "" || title === "" || message === "") {
            alert("All fields except photo are required!");
        } else {
            alert("Message submitted!");
            // Redirect to History.html
            window.location.href = "History.html";
        }
    });
});
