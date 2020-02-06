import React , { Component } from 'react';

import AppContext from './AppContext';

class ContextProvider extends Component {
  constructor () {
    super()
    this.state = {
      isAuthenticated : false,
    };
  };

  componentDidMount () {
    if (localStorage.getItem('currentUser')) {
      this.setState({
        isAuthenticated : true,
      });
    };
  };

  authenticate = (user) => {
    this.setState({
      isAuthenticated : true,
    });
    localStorage.setItem('currentUser', user.email);
    console.log('authenticated');
  };

  render () {
    const contextValues = {
      state : this.state,
      authenticate : this.authenticate,
    };
    
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default ContextProvider;