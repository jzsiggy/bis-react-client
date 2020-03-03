import styled from 'styled-components';

const Container = styled.div`
  margin-top : 50px;
  display : flex;
  flex-wrap : wrap;
  width : 80%;
`

const ProductContainer = styled.div`
  width : 25%;
  min-width : 170px;
  height : 300px;
`

const CheckoutBar = styled.div`
  z-index : 1;
  position : fixed;
  right : 0;
  top : 0;
  width : 25%;
  min-width : 250px;
  height : 100vh;
  background-color : rgb(240, 240, 240);
  display : flex;
  flex-direction : column;
  align-items : center;
  padding-top : 50px;
  overflow-y : scroll;
`

const CartItem = styled.div`
  margin : 20px 0;
  width : 80%;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  padding-bottom : 5px;
  border-bottom : 1px solid rgba(255, 255, 255, 1);
`

const CartItemName = styled.span`
  font-weight : bold;
`

const CartItemPrice = styled.span`

`

export {
  Container,
  ProductContainer,
  CheckoutBar,
  CartItem,
  CartItemName,
  CartItemPrice,
};