const express = require('express');
const Database = require('@replit/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const db = new Database();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Session management
app.use(session({
    secret: 'your_secret_key', // Change this to a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Set to true if using HTTPS
}));

// Route to handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const storedPassword = await db.get(username);
        if (storedPassword === password) {
            req.session.username = username; // Set session variable
            return res.json({ success: true, message: 'Login successful!' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error: ' + error.message });
    }
});

// Route to handle registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        await db.set(username, password);
        res.json({ success: true, message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error: ' + error.message });
    }
});

// Route to handle logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Logout failed' });
        }
        res.json({ success: true, message: 'Logout successful!' });
    });
});

// Route to get logged in page (protected)
app.get('/loggedin', (req, res) => {
    if (req.session.username) {
        res.sendFile(path.join(__dirname, 'public', 'loggedin.html'));
    } else {
        res.redirect('/'); // Redirect to login if not authenticated
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
