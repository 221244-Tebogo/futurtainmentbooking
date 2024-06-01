import React, { useState } from 'react';
import './Login.css';
// import logo from '../path_to_your_logo/logo.png'; // Adjust the path to your actual logo

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    password: '',
    keepLoggedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1>Welcome Back</h1>
        <p>Welcome Back! Please enter your login details</p>
        <div className="form-toggle">
          <span>Register</span>
          <span className="active">Login</span>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            First Name <span>*</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <div className="form-options">
            <label>
              <input
                type="checkbox"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
              />
              Keep me logged in
            </label>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
