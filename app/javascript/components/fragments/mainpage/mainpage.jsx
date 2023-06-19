
import React, { useState } from 'react';
import Login from './login/login';

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          {/* Display user page UI */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Main;
