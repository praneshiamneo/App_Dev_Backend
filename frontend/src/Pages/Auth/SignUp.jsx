import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setLoginEmail, setLoginPassword }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = formData;

  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !fullname) {
      return alert("Please provide all details");
    }
    setLoginEmail(email); // setting email in login page state
    setLoginPassword(password); // setting password in login page state
    console.log(formData);
  };

  return (
    <>
      <label>
        Email
        <input
          value={email}
          onChange={onChangeInput}
          name="email"
          type="email"
        />
      </label>
      <label>
        Full Name
        <input
          value={fullname}
          onChange={onChangeInput}
          name="fullname"
          type="text"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={onChangeInput}
          name="password"
          type="password"
        />
      </label>
      <Link to="/login">
        <button type="submit" onClick={onSubmitHandler}>
          Register
        </button>
      </Link>
      <div>
        <p>
          Don't have an account? <Link to="/login"> Login </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
