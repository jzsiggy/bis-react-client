import React , { Component } from 'react'

import AppContext from '../../context/AppContext';

import { StyledNavContainer , StyledIcon , Cart , CartNumber } from './styles';
import Menu from './slide-menu/Menu';

class NavBar extends Component {
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
                    <Cart to={`/user/cart/${context.state.currentUser._id}`}>
                      <StyledIcon url='/icons/shopping-cart.png' />
                      <CartNumber>{context.state.cart.length}</CartNumber>
                    </Cart>
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