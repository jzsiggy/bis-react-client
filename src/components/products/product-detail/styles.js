import styled , { keyframes , css } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Modal = styled.div`
  transition : 1s ease all;
  position : fixed;
  bottom : 100px;
  top : 100px;
  left : 100px;
  right : 100px;
  background-color : white;
  border-radius : 30px;
  z-index : 3;
  animation : ${fadeIn} 0.3s linear;
`

const CloseLink = styled(Link)`
  width : 25px;
  height : 25px;
  background-size : contain;
  background-repeat : no-repeat;
  margin : 20px;
  cursor : pointer;
  background-image : url("/icons/close.png");
  display : block;
`

const Image = styled.div`
  background-image : url(${props => props.imgUrl});
  background-size : contain;
  background-repeat : no-repeat;
  height : 400px;
  width : 400px;
`

const AddToCartBtn = styled.button`
  transition : 0.3s ease all;
  background : transparent;
  border-radius : 3px;
  border : 2px solid rgba(38, 131, 204, 1);
  color : rgba(38, 131, 204, 1);
  margin : 0.5em 1em;
  padding : 0.7em 1em;
  width : 100px;
  font-size : 1.1rem;
  font-weight : bold;
  cursor : pointer;
  width : 200px;

  &:active {
    transform : scale(1.1);
  }

  ${props => props.primary && css`
    background: rgba(38, 131, 204, 1);
    color: white;
  `}
`

export {
  Modal,
  CloseLink,
  Image,
  AddToCartBtn
};