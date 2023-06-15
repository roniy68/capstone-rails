import React, { useState } from 'react';
import './log.css';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        // Username saved successfully
        console.log('Username saved successfully');
      } else {
        // Failed to save username
        console.error('Failed to save username');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
