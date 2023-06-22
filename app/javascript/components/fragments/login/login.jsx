import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const location = useLocation(); // Move this line before using location
  const [message, setMessage] = useState(location?.state?.message || "");
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

      navigate('/', { state: { message: 'Successfully Signed In' } });
    } catch (error) {
      setMessage('Sign in failed');
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);



  return (
    <div className="sign-in-form">
      {message && <p style={{ color: "white", textAlign: "center" }}>{message}</p>}
      <h1 className="sign-in-title">Welcome, please LogIn to continue</h1>
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