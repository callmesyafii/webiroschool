const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Auth middleware
const checkAuth = (req, res, next) => {
    const isLoggedIn = req.session?.isLoggedIn;
    if (isLoggedIn) {
        next();
    } else {
        res.redirect('/login/login.html');
    }
};

// Routes
app.post('/auth/google', (req, res) => {
    const { credential } = req.body;
    if (credential) {
        // In a real app, you'd verify the credential with Google
        req.session.isLoggedIn = true;
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'No credential provided' });
    }
});

app.get('/', checkAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 