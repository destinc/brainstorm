import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import { Route, Link,  withRouter } from 'react-router-dom'


import decode from 'jwt-decode'
import Login from './components/Login'
import Register from './components/Register'

import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'

class App extends Component {
  state = {
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  }
  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    })
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="header-title">Brainstorm</h1>
        </div>
        <div>
            {this.state.currentUser
              ?
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </>
              :
              <button onClick={this.handleLoginButton}>Login / Register</button>
            
            }
          </div>
        <Route exact path="/" render={ () => (
        <IdeasContainer /> 
        )}
        />
    
      <Route exact path="/login" render={() => (
        <Login
          handleLogin={this.handleLogin}
          handleChange={this.authHandleChange}
          formData={this.state.authFormData} />)} />
      <Route exact path="/register" render={() => (
        <Register
          handleRegister={this.handleRegister}
          handleChange={this.authHandleChange}
          formData={this.state.authFormData} />)} />
        
      </div>
    );

  }
}

export default withRouter(App) 