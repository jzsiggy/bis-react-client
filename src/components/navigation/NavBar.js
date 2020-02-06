import React , { Component } from 'react'

import AppContext from '../../context/AppContext';

import { StyledNavContainer , LogoutBtn } from './styles';
import Menu from './slide-menu/Menu';

class NavBar extends Component {

  logout = () => {
    this.context.logout();
  };

  render () {
    return (
      <AppContext.Consumer>
        {
          context => {
            return (
              <StyledNavContainer>
                <Menu />
                {
                  context.state.isAuthenticated ?
                  <>
                    <LogoutBtn onClick={this.logout}>Logout</LogoutBtn>
                  </>
                  :
                  ""
                }
              </StyledNavContainer>
            )
          }
        }
      </AppContext.Consumer>
    );
  };
};

NavBar.contextType = AppContext;

export default NavBar;