import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './log.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Function to sign in
  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        'api/v1/users/signin',
        {
          username,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      sessionStorage.setItem('username', response.data.username);
      setMessage('Sign in successful');
      navigate('/home');
    } catch (error) {
      setMessage('Sign in failed');
    }
  };


  return (
    <div className="sign-in-form">
      <h1 className="sign-in-title">Welcome, please sign in to continue</h1>
      <p>{message}</p>
      <div className="sign-in-inputs">
        <input
          className="username-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="btn">
        <button className="sign-in-button" type="button" onClick={handleSignIn}>
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Login;
