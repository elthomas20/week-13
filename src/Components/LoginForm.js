import React from 'react';


const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
     
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
    </div>
  );
};

export default LoginForm;