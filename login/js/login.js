// js/login.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = form.username.value;
        const password = form.password.value;

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            if (data.redirect) {
                window.location.href = data.redirect;
            } else {
                // Handle login error (e.g., show an error message)
                console.error('Login failed:', data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});