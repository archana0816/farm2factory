import React, { useState, useEffect } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user details from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, []);

  const handleLogin = async () => {
    setError('');

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:9000/login', { email, password });

      if (response.data) {
        // Store user in local storage
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redirect based on email domain
        if (email.endsWith('@skct.edu.in')) {
          navigate('/buyerCombine');
        } else if (email.endsWith('@gmail.com')) {
          navigate('/seller');
        } else if (email.endsWith('@farm2factory.in')) {
          navigate('/admin');
        } else {
          setError('Invalid E-mail');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="banner">
          <br /><br />
          <h2 className='font'>Farm to Factory</h2>
          <h3 className='font1'>Enter your account to buy, sell, and trade farming products with ease and security</h3>
        </div>
        <div className="form">
          <FontAwesomeIcon icon={faUser} className='icon' />
          <small>Need an Account? <a className='changecolor' onClick={handleRegisterClick} style={{cursor: 'pointer'}}> Register</a></small>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
