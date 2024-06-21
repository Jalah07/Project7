import React from 'react';
import Header from '../components/Header.jsx';
import axios from "axios"
import { useState } from "react"


const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = e => {
    // Prevent the default submit and page reload
    e.preventDefault()

    // Handle validations
    axios
      .post("http://localhost:3000/api/auth/signup", { email, password })
      .then(response => {
        console.log(response)
        // Handle response
      })
  }
  return (
    
    <div className="signup-container">
      <Header />
    <h2>Signup</h2>
    <form method="post" onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />

    <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />

      <button type="submit">Signup</button>
    </form>
  </div>
  );
};

export default Signup;
