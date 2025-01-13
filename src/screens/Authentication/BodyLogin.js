import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function BodyLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Dashboard'); // Remplacez par le chemin de la page de destination
};

  const handleLogin = (event) => {
    event.preventDefault(); 

    
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
    } else {
      console.log('Invalid credentials'); 
    }
  };

  return (
    <div className="login-container">
       <div className="loginIcon">
        <FontAwesomeIcon icon={faUser} size="5x" /> 
      </div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
            Login
        </button>
      </form>
    </div>
  );
}

export default BodyLogin;
