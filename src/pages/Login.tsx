import React, { useState } from 'react';
import './Login.css';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleLogin = async () => {
        setError(''); // Reset error message
        setShowSuccessMessage(false); // Reset success message

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                setError('User not found');
                return;
            }

            let userFound = false;
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (userData.password === password) {
                    console.log('Login successful');
                    userFound = true;
                    setShowSuccessMessage(!showSuccessMessage);
                    setTimeout(() => setShowSuccessMessage(false), 5000);
                    // Proceed with login success logic here
                }
            });

            if (!userFound) {
                setError('Invalid password');
            }
        } catch (error) {
            setError('Failed to log in');
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="login-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            {showSuccessMessage && <p className="success-message">Login successful</p>}
        </div>
    );
}

export default Login;