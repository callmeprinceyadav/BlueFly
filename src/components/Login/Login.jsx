import { textDecoration } from '@chakra-ui/react';
import React, { useState } from 'react';

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
    <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginTop: "50px" }}>
      <div style={{
        display: "flex",
        borderRadius:"5px",
        flexDirection: "column",
        width: "30%",
        padding: "30px",
        gap: "20px",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      }}>
        <h1 style={{ fontFamily: "Tiemann, serif", textAlign: "center",textDecoration:"underline" }}>
          LOGIN
        </h1>
        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
        <button
          style={{ padding: "10px", width: "20%", margin: "auto" ,cursor:"pointer",fontFamily:"Helvetica", fontWeight:"700"}}
          type='button'
          onClick={handleLogin}
          
        >
          LOGIN
        </button>
        
      </div>
    </div>
  );
}

export default Login;
