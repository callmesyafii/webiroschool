// js/login.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = form.username.value;
        const password = form.password.value;

        // For demo purposes, we'll do a simple redirect
        // In a real application, you would validate credentials against a backend
        if (username && password) {
            window.location.href = '../index.html';
        } else {
            alert('Please enter both username and password');
        }
    });
});