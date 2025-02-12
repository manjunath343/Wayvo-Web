import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const nav = useNavigate(); // State to manage password visibility

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setErrorMessage(''); // Clear previous error messages
        setSuccessMessage(''); // Clear previous success messages

        // Retrieve user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        // Validate input fields
        if (!email || !password) {
            setErrorMessage('Both fields are required.');
            return;
        }

        // Check if user data exists in local storage
        if (!storedUserData) {
            setErrorMessage('No user data found. Please sign up first.');
            return;
        }

        // Validate email and password
        if (email !== storedUserData.email || password !== storedUserData.password) {
            setErrorMessage('Invalid email or password.');
            return;
        }

        // If validation passes
        setSuccessMessage('Login successful!');
        console.log('User  logged in successfully!');

        // Reset form fields
        setEmail('');
        setPassword('');
        nav('/todo'); 
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Email/Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-container">
                    <input
                        className="login-input"
                        type={showPassword ? "text" : "password"} // Toggle input type
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className=" toggle-password"
                        id="togglePassword"
                        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                        aria-label={showPassword ? "Hide password" : "Show password"} // Accessibility
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
            
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
}

export default Login;