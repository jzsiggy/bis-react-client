import styled , { css } from 'styled-components';

const AuthContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`

const AuthForm = styled.form`
  display : flex;
  flex-direction : column;
  width : 80%;
  max-width : 450px;
`

const AuthInput = styled.input`
  margin-bottom : 30px;
  height : 2rem;
  font-size : 1.2rem;
  border : 1px solid rgba(0, 0, 0, 0.1);
  border-radius : 5px;
  width : 100%;
`

const AuthCluster = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;
`

const SubmitBtn = styled.button`
  background : transparent;
  border-radius : 3px;
  border : 2px solid rgba(38, 131, 204, 1);
  color : rgba(38, 131, 204, 1);
  padding : 0.7em 1em;
  width : 100px;
  font-size : 1.1rem;
  font-weight : bold;

  ${props => props.primary && css`
    background: rgba(38, 131, 204, 1);
    color: white;
  `}
`

export {
  AuthForm,
  AuthContainer,
  AuthInput,
  AuthCluster,
  SubmitBtn,
};