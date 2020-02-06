import React from 'react';
import './App.css';

import { Route , Switch } from 'react-router-dom';


import ContextProvider from './context/ContextProvider';

import NavBar from './components/navigation/NavBar';
import LoginForm from './components/authentication/user-login/LoginForm'
import SignupForm from './components/authentication/user-signup/SignupForm'


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component='' />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
