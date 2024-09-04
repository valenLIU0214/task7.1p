import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            window.location.href = "/home";  // Redirect to home page on success
        } catch (error) {
            setError("Invalid email or password");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}

            {/* Add a link to the registration page */}
            <p>
                Don't have an account? <Link to="/register">Sign up here</Link>
            </p>
        </div>
    );
};

export default Login;

