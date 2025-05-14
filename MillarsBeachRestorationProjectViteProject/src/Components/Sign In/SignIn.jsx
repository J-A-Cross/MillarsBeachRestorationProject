import React from 'react';
import './SignIn.css';

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log('Sign-in form submitted');
    };

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;