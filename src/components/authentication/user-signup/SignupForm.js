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

class SignupForm extends Component {

  constructor () {
    super()
    this.service = Service;

    this.state = {
      email : '',
      password : '',
      id : '',
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
    this.service.post('/signup', this.state)
    .then( response => {
      console.log('response :', response);
      this.setState({
        email : '',
        password : '',
        id : '',
        errorMessage : '',
      });
      this.context.authenticate(response.data);
      this.props.history.push('/');
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
        <h1>Signup</h1>
        <AuthForm>
          <AuthCluster>
            <label>Email:</label>
            <AuthInput name='email' value={this.state.email} onChange={this.handleChange}/>
          </AuthCluster>
          <AuthCluster>
            <label>Password:</label>
            <AuthInput name='password' value={this.state.password} onChange={this.handleChange}/>
          </AuthCluster>
          <AuthCluster>
            <label>ID:</label>
            <AuthInput name='id' value={this.state.id} onChange={this.handleChange}/>
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
    );
  };
};

SignupForm.contextType = AppContext;

export default SignupForm;