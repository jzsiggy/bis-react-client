import React , { Component } from "react";

import { Link } from 'react-router-dom';

import AppContext from '../../../context/AppContext';

import {
  StyledMenu,
  StyledIcon,
  MenuHeader,
  MenuBody,
  AuthBtnGroup,
  AuthBtn,
  MenuLink,
} from './styles';

class Menu extends Component {
  state = {
    isOpen : false,
  };

  toggleState = () => {
    this.setState({
      isOpen : !this.state.isOpen,
    });
  };

  render () {
    return (
      <React.Fragment>
        <StyledIcon onClick={this.toggleState} url="/icons/menuIcon.png" />
        <StyledMenu isOpen={this.state.isOpen}>
          <MenuHeader>
            <StyledIcon onClick={this.toggleState} url="/icons/close.png" />
          </MenuHeader>
          <MenuBody>
              <MenuLink to='/'>Home</MenuLink>
              <MenuLink to='/menu'>Menu</MenuLink>
            {
              !this.context.state.isAuthenticated ?
                <AuthBtnGroup>
                  <Link to='/signup'>
                    <AuthBtn primary>Signup</AuthBtn>
                  </Link>
                  <Link to='/login'>
                    <AuthBtn>Login</AuthBtn>
                  </Link>
                </AuthBtnGroup>
              :
              ""
            }
          </MenuBody>
        </StyledMenu>
      </React.Fragment>
    );
  };
};

Menu.contextType = AppContext;

export default Menu;