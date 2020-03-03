import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Image = styled.div`
  background-image : url(${props => props.imgUrl});
  background-size : contain;
  background-repeat : no-repeat;
  height : 150px;
  width : 150px;
`

const ProductContainer = styled(Link)`
  display : flex;
  flex-direction : column;
  transition : 0.3s ease all;
  margin : 30px;
  text-align : left;
  text-decoration : none;
  color : black;
  &:hover {
    transform : scale(1.1);
  }
`

const ProductName = styled.span`
  font-weight : bold;
`

const ProductPrice = styled.span`
  margin-bottom : 10px;
`

export {
  Image,
  ProductContainer,
  ProductName,
  ProductPrice,
};