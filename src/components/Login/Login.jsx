import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setError('');
      alert('Login successful');
      // Redirect or perform any further actions
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = () => {
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setError('');
    alert('Registration successful');
  };

  return (
    <div className='mainbox'>
      <div className='formsection'>
        <h1>LOGIN</h1>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className='error'>{error}</div>}
        <button type='button' onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
