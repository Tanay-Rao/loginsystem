# Simple Login System with Session Management

This project is a simple login system implemented using Node.js and Express. It features user registration, login, and session management to restrict access to a logged-in area.

## Features

- User registration with username and password
- User login with session management
- Logout functionality
- Protected route for logged-in users
- Simple front-end interface using HTML and CSS

## Technologies Used

- **Backend**: Node.js, Express, Body-Parser, Express-Session
- **Database**: Replit Database
- **Frontend**: HTML, CSS, JavaScript

## Project Structure

```
/project-directory
│
├── public
│   ├── index.html         # Login page
│   ├── loggedin.html      # Protected page after login
│   └── style.css          # Styles for the application
│
├── server.js              # Main server file
└── package.json           # Project dependencies
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/simple-login-system.git
   cd simple-login-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Register a new user by providing a username and password on the login page.
2. Log in with the registered credentials.
3. After successful login, you will be redirected to a protected page.
4. You can log out using the logout button, which will clear the session.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, suggestions, or improvements are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).

