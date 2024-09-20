import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedFirstName = localStorage.getItem("firstName");

    

    if (email === storedEmail && password === storedPassword) {
      setError("");
      alert("Login successful");
      // Store first name in session storage for display
      sessionStorage.setItem("firstName", storedFirstName);
      navigate("/homelog");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="mainbox">
      <div className="formsection">
        <h1>LOGIN</h1>
        <label style={{ marginBottom: "-15px" }} htmlFor="Email">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label style={{ marginBottom: "-15px" }} htmlFor="Password">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="button" onClick={handleLogin}>
          LOGIN
        </button>
        <h4 style={{ textAlign: "end", cursor: "pointer" }}>
          Forget Password ?
        </h4>
        <h3
          style={{
            textAlign: "center",
            cursor: "pointer",
            fontFamily: "Tiemann, serif",
          }}
          type="button"
          onClick={handleSignup}
        >
          Create New Account
        </h3>
      </div>
    </div>
  );
};

export default Login;
