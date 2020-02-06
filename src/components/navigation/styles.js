import styled , { css } from 'styled-components';

const StyledNavContainer = styled.div`
  width : 100vw;
  display : flex;
  justify-content : space-between;
`

const LogoutBtn = styled.button`
  background : transparent;
  border-radius : 3px;
  border : 1px solid rgba(38, 131, 204, 1);
  color : rgba(38, 131, 204, 1);
  margin : 0.5em 1em;
  padding : 0px;
  width : 100px;
  height : 40px;
  font-size : 0.8rem;
  font-weight : bold;

  ${props => props.primary && css`
    background: rgba(38, 131, 204, 1);
    color: white;
  `}
`

export {
  StyledNavContainer,
  LogoutBtn,
};