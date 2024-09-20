import React, { useState } from 'react';
import './Signup.css'; // Use the same CSS file
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required');
      return;
    }

    const existingEmail = localStorage.getItem("email");
    if (existingEmail === email) {
      setError("This email is already registered");
      return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setError('');
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className='mainbox'>
      <div className='formsection'>
        <h1>SIGN UP</h1>
        <label style={{ marginBottom:"-15px" }} htmlFor="FirstName">First Name</label>
        <input
          type="text"
          placeholder='Enter Your First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label style={{ marginBottom:"-15px" }} htmlFor="LastName">Last Name</label>
        <input
          type="text"
          placeholder='Enter Your Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label style={{ marginBottom:"-15px" }} htmlFor="Email">Email Address</label>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label style={{ marginBottom:"-15px" }} htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className='error'>{error}</div>}
        <button type='button' onClick={handleRegister}>
          SIGN UP
        </button>
        <h4 style={{ textAlign:"end", cursor:"pointer" }} onClick={handleLogin}>Already have an account? Login</h4>
      </div>
    </div>
  );
}

export default Signup;
