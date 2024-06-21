import React from 'react';
import Header from '../components/Header.jsx';

const Login = () => {
  return (
    <div className="login-container">
      <Header />
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

