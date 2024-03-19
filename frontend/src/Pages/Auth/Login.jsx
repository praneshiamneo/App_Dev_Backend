import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ loginEmail, loginPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);
    console.log("Stored Email:", loginEmail);
    console.log("Stored Password:", loginPassword);
    
    if (email === loginEmail && password === loginPassword) {
      console.log("Login Successful");
      // Navigate to AdminPage or perform any necessary action upon successful login
      window.location.href = "/admin"; // Redirecting to admin page
    } else {
      console.log("Invalid credentials");
      setError("Invalid credentials");
    }
  };
  

  return (
    <>
      {error && (
        <div>{error}</div>
      )}
      <form onSubmit={onSubmitHandler}>
        <label>
          Email
          <input
            onChange={onChangeInput}
            value={email}
            name="email"
            required // Adding required attribute for validation
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={onChangeInput}
            name="password"
            type="password"
            required // Adding required attribute for validation
          />
        </label>
        <button
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </>
  );
};

export default Login;
