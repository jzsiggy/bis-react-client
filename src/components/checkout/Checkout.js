import React , { Component } from 'react';
import AppContext from '../../context/AppContext';
import Service from '../../config/Service';

import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import pagarme from 'pagarme';

import { Container , StyledForm , StyledInput , StyledSubmit } from './styles'

class Checkout extends Component {
  constructor (props) {
    super (props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
      errorMessage : null,
      successMessage : null,
    };
    this.service = Service;
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.service.post('/order/create', {
      cart : this.context.state.cart,
      amount : this.context.state.totalPrice,
      deliveryAddress : null,
      delivered : false,
    })
    .then(reponse => {
      pagarme.client.connect({ api_key: 'ak_test_rygwWy1jZlYlEuCBRQ9UHHax3T7tXe' })
      .then(client => {
        client.transactions.create(
          {
            amount: this.context.state.totalPrice,
            card_number: this.state.number,
            card_holder_name: this.state.name,
            card_expiration_date: this.state.expiry,
            card_cvv: this.state.cvc,
          }
        )
        .then(response => { 
          console.log(response);
          if ( response.status === 'paid' ) {
            this.context.clearCart();
            this.setState({
              successMessage : 'Your order has been placed',
              errorMessage : null,
            });
            // redirect to menu
          } else {
            this.throwErr()
          }
        })
        .catch(err => { // ERROR ON CREATING TRANSACTION
          console.log(err.response);
          this.throwErr()
        })
      })
      .catch(err => { // ERROR ON CONNECTING TO PAGARME
        console.log(err.response);
        this.throwErr()
      })
    })
    .catch(err => { // ERROR ON CONNECTING TO BACKEND API
      console.log(err.response);
      this.throwErr()
    })
  };

  throwErr = () => {
    this.setState({
      errorMessage : 'There was a problem processing your request.',
      successMessage : null,
    });
  };
  
  render() {
    return (
      <Container>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <StyledForm>
        	<StyledInput
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <StyledInput
            type="tel"
            name="name"
            placeholder="Johnny Appleseed"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <StyledInput
            type="tel"
            name="expiry"
            placeholder="e.g. 06/27"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <StyledInput
            type="password"
            name="cvc"
            placeholder="123"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <StyledSubmit onClick={this.handleSubmit}>Submit</StyledSubmit>
        </StyledForm>
        {
          this.state.errorMessage   ? 
            <span style={{'marginTop' : '30px'}}>{this.state.errorMessage}</span>     :
          this.state.successMessage ?
            <React.Fragment>
              <span style={{'marginTop' : '30px'}}>{this.state.successMessage}</span>   
              <Link to={'/menu'}>Back to menu</Link>     
            </React.Fragment>                                                          :
            ''
        }
      </Container>
    );
  }
}

Checkout.contextType = AppContext;

export default Checkout;