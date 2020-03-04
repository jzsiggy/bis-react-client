import styled from 'styled-components';

const CategoryContainer = styled.div`
  display : flex;
  flex-direction : column;
  width : 80%;
  align-items : flex-start;
  margin : 100px auto;
`

const Title = styled.span`
  font-size : 2rem;
  font-weight : bold;
`

const SubTitle = styled.span`
  margin-top : 15px;
  color : gray;
  font-size : 1rem;
`

const ProductsContainer = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  overflow-x : scroll;
  overflow-y : hidden;
`

export {
  CategoryContainer,
  Title,
  SubTitle,
  ProductsContainer,
};