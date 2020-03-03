import styled , { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavContainer = styled.div`
  position : fixed;
  background-color : rgba(255, 255, 255, 0.3);
  width : 100vw;
  display : flex;
  justify-content : space-between;
  top : 0;
`

const StyledIcon = styled.div`
  width : 30px;
  height : 30px;
  background-size : contain;
  background-repeat : no-repeat;
  
  ${props => props.url && css`
    background-image : url(${props.url});
  `}
`

const Cart = styled(Link)`
  margin-right : 50px;
  display : flex;
  height : auto;
  align-items : center;
`

const CartNumber = styled.span`
  position : absolute;
  right : 29px;
  top : 9px;
  font-size : 1.1rem;
  color : black;
`

// rgba(38, 131, 204, 1)

export {
  StyledNavContainer,
  StyledIcon,
  Cart,
  CartNumber,
};