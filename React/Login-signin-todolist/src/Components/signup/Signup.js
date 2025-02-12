// import React, { useState } from "react";
// import './Signup.css'; // Import the CSS file

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission
//         setErrorMessage(''); // Clear previous error messages

//         // Validate email format
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             setErrorMessage('Please enter a valid email address.');
//             return;
//         }
//         if (phone.length !== 10) {  // Validate phone number
//             setErrorMessage('Please enter a valid phone number.');
//             return;
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             setErrorMessage('Passwords do not match.');
//             return;
//         }

//         // Basic validation
//         if (!email || !phone || !username || !password || !confirmPassword) {
//             setErrorMessage('All fields are required.');
//             return;
//         }

//         // If all validations pass, you can proceed with form submission logic
//         console.log('Form submitted successfully!');
//         const userData = {
//             email,
//             phone,
//             username,
//             password, 
//         };

//         localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in local storage
//         console.log('Form submitted successfully! User data stored in local storage.');

//         // Reset form fields
//         setEmail('');
//         setPhone('');
//         setUsername('');
//         setPassword('');
//         setConfirmPassword('');
//     };

//     return (
//         <div className="signup-container">
//             <h1 className="signup-title">Sign up</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className="signup-input"
//                     type="text"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     className="signup-input"
//                     type="text"
//                     placeholder="Phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                 />
//                 <input
//                     className="signup-input"
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     className="signup-input"
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <input
//                     className="signup-input"
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value )}
//                     required
//                 />
//                 <button className="signup-button" type="submit">Submit</button>
//             </form>
//             {errorMessage && <div className="signup-error-message">{errorMessage}</div>}
//         </div>
//     );
// }

// export default Signup;
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Signup.css'; // Import the CSS file

function Signup() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setErrorMessage(''); // Clear previous error messages

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (phone.length !== 10) {  // Validate phone number
            setErrorMessage('Please enter a valid phone number.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // Basic validation
        if (!email || !phone || !username || !password || !confirmPassword) {
            setErrorMessage('All fields are required.');
            return;
        }

        // If all validations pass, you can proceed with form submission logic
        console.log('Form submitted successfully!');
        const userData = {
            email,
            phone,
            username,
            password, 
        };

        localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in local storage
        console.log('Form submitted successfully! User data stored in local storage.');
        setSuccessMessage(true);

        // Reset form fields
        setEmail('');
        setPhone('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value )}
                    required
                />
                <button className="signup-button" type="submit">Submit</button>
            </form>
            {errorMessage && <div className="signup-error-message">{errorMessage}</div>}
            <div className="signup-footer">
                <p>Already have an account? <Link to="/login" className="signup-link">Login</Link></p>
                {successMessage && <div className="success-message">Signup successful! Please login</div>}
            </div>
        </div>
    );
}

export default Signup;