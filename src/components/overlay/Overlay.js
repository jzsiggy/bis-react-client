import React , { Component } from 'react';

import DarkOverlay from './styles';
import AppContext from '../../context/AppContext';

class Overlay extends Component {
  render () {
    return (
      <AppContext.Consumer>
        {
          context => {
            return (
              <DarkOverlay />
            )
          }
        }
      </AppContext.Consumer>
    )
  }
}

export default Overlay;