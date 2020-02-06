import React , { Component } from 'react';

import AppContext from './AppContext';

import Service from '../config/Service';

class ContextProvider extends Component {
  constructor () {
    super()
    this.service = Service;
    this.state = {
      isAuthenticated : false,
      currentUser : null,
    };
  };

  componentDidMount () {
    if (!!localStorage.getItem('currentUser')) {
      console.log(localStorage.getItem('currentUser'));
      this.setState({
        isAuthenticated : true,
      });
    };
  };

  authenticate = (user) => {
    this.setState({
      isAuthenticated : true,
      currentUser : user,
    });
    console.log('authenticated');
  };

  logout = () => {
    this.service.post('/logout')
    .then(response => {
      this.setState({
        isAuthenticated : false,
        currentUser : null,
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

  getCurrentUser = () => {
    this.service.get('/current-user')
    .then(response => {
      response.data._id ?
      this.authenticate(response.data)
      :
      this.setState({
        isAuthenticated : false,
        currentUser : null,
      });
    });
  };

  render () {
    const contextValues = {
      state : this.state,
      authenticate : this.authenticate,
      logout : this.logout,
    };
    
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default ContextProvider;