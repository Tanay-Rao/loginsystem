const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Handle login submission
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (result.success) {
            // Redirect to loggedin.html if login is successful
            window.location.href = 'loggedin.html';
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        errorMessage.textContent = error.message;
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    }
});

// Handle registration
document.getElementById('register').addEventListener('click', async (e) => {
    e.preventDefault();

    const username = prompt('Enter a new username:');
    const password = prompt('Enter a new password:');

    if (username && password) {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    }
});

// Handle logout
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            try {
                await fetch('/logout', { method: 'POST' });
                window.location.href = '/'; // Redirect to login page after logout
            } catch (err) {
                console.error('Logout failed:', err);
            }
        });
    }
});
