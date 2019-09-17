import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import { Route, withRouter } from 'react-router-dom'


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
    this.props.history.push('/notes')
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    this.props.history.push('/notes')
  }

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/')
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
              <p className='user-name'>Hello {this.state.currentUser.username}</p>
              <button className='logout'onClick={this.handleLogout}>Logout</button>
            </>
            :
            ''

          }
        </div>
        <Route exact path="/notes" render={() => (
          <IdeasContainer />
        )}
        />

        <Route exact path="/" render={() => (
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