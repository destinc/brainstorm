import React from 'react';
import { Link } from 'react-router-dom';



// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="auth-container">
      <h2 className="log-title">login</h2>
      <br />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <br/>
        <button className="Login">Login</button>
        <Link to='/register' className="register">Register</Link>
      </form>
    </div>
  );
}

export default Login;