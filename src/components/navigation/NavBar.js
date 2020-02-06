import React , { Component } from 'react'

import StyledNavContainer from './styles';
import Menu from './slide-menu/Menu';

class NavBar extends Component {
  render () {
    return (
      <StyledNavContainer>
        <Menu />
      </StyledNavContainer>
    );
  };
};

export default NavBar;