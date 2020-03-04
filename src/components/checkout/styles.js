import styled from 'styled-components';

const Container = styled.div`
  margin-top : 50px;
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
`

const StyledForm = styled.form`
  margin-top : 50px;
  display : flex;
  flex-direction : column;
  width : 40%;
  border : 1px solid rgba(0, 0, 0 ,0.1);
  border-radius : 6px;
  padding : 50px 30px
`

const StyledInput = styled.input`
  margin: 10px 0;
  height : 1.6rem;
  font-size : 1.1rem;
  border : 1px solid rgba(0, 0, 0 ,0.1);
  border-radius : 4px;
`

const StyledSubmit = styled.button`
  margin: 10px 0;
  height : 2rem;
  font-size : 0.9rem;
  width : 100px;
  font-weight : bold;
  background-color : rgb(21, 127, 251);
  color : rgba(255, 255, 255 ,1);
  border : 1px solid rgba(0, 0, 0 ,0.1);
  border-radius : 4px;
  cursor : pointer;
`

export {
  Container,
  StyledForm,
  StyledInput,
  StyledSubmit,
};
