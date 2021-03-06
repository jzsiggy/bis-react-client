import React , { Component } from 'react';

import Service from '../../../config/Service';

import AppContext from '../../../context/AppContext';

import {
  AuthForm,
  AuthContainer,
  AuthInput,
  AuthCluster,
  SubmitBtn,
} from '../styles';

class LoginForm extends Component {

  constructor () {
    super()
    this.service = Service;

    this.state = {
      email : '',
      password : '',
      errorMessage : '',
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.service.post('/auth/login', this.state)
    .then( response => {
      this.setState({
        email : '',
        password : '',
        errorMessage : '',
      });
      this.context.authenticate(response.data);
      this.props.history.push(`/menu`);
    })
    .catch( err => {
      console.log('error :', err.response.data);
      this.setState({
        errorMessage : err.response.data.message,
      });
    });
  };

  render () {
    return (
      <AuthContainer>
        <h1>Login</h1>
        <AuthForm>
          <AuthCluster>
            <label>Email:</label>
            <AuthInput name='email' value={this.state.email} onChange={this.handleChange}/>
          </AuthCluster>
          <AuthCluster>
            <label>Password:</label>
            <AuthInput type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          </AuthCluster>
          <SubmitBtn onClick={this.handleSubmit}>Submit</SubmitBtn>
        </AuthForm>
        {
          this.state.errorMessage ?
          <p>{this.state.errorMessage}</p>
          :
          ""
        }
      </AuthContainer>
    )
  };
};

LoginForm.contextType = AppContext;

export default LoginForm;