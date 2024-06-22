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
            // Add your message submission logic here, e.g., sending data to the server.
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

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCK5bnQc3yYc7cU2UdpNaBy2btHyAczXiY",
        authDomain: "lossweight-a9e39.firebaseapp.com",
        projectId: "lossweight-a9e39",
        storageBucket: "lossweight-a9e39.appspot.com",
        messagingSenderId: "814223253419",
        appId: "1:814223253419:web:b5c00514f8d689662b7cee"
    };
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    document.addEventListener('DOMContentLoaded', function () {
        const burger = document.getElementById('burger');
        const navLinks = document.getElementById('nav-links');
        const logoutBtn = document.getElementById('logout-btn');

        burger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        logoutBtn.addEventListener('click', function () {
            alert("Logged out successfully!");
            window.location.href = "Login.html"; // Redirect to login page
        });

        document.getElementById('messageForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const message = document.getElementById('message').value;
            const photo = document.getElementById('photo').files[0];

            // Create a unique key for the new message
            const newMessageKey = firebase.database().ref().child('messages').push().key;

            if (photo) {
                const storageRef = firebase.storage().ref('photos/' + newMessageKey + '/' + photo.name);
                const uploadTask = storageRef.put(photo);

                uploadTask.on('state_changed', 
                    function(snapshot) {
                        // Observe state change events such as progress, pause, and resume
                    }, 
                    function(error) {
                        console.error("Error uploading photo: ", error);
                    }, 
                    function() {
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            const messageData = {
                                username: username,
                                title: title,
                                message: message,
                                photo: downloadURL,
                                timestamp: new Date().toISOString()
                            };

                            // Save the message in the database
                            firebase.database().ref('messages/' + newMessageKey).set(messageData)
                                .then(() => {
                                    alert("Message submitted!");
                                    window.location.href = "History.html"; // Redirect to history page
                                })
                                .catch(error => {
                                    console.error("Error submitting message: ", error);
                                });
                        });
                    }
                );
            } else {
                const messageData = {
                    username: username,
                    title: title,
                    message: message,
                    photo: null,
                    timestamp: new Date().toISOString()
                };

                // Save the message in the database
                firebase.database().ref('messages/' + newMessageKey).set(messageData)
                    .then(() => {
                        alert("Message submitted!");
                        window.location.href = "History.html"; // Redirect to history page
                    })
                    .catch(error => {
                        console.error("Error submitting message: ", error);
                    });
            }
        });
    });
