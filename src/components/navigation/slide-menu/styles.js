import styled , { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
  transition : all 0.3s ease;
  width : 300px;
  height : 100vh;
  background-color : white;
  position : fixed;
  left : -300px;
  background-color : antiquewhite;

  ${props => props.isOpen && css`
    left : 0;
  `}
`

const StyledIcon = styled.div`
  width : 35px;
  height : 35px;
  background-size : contain;
  background-repeat : no-repeat;
  margin : 20px;
  ${props => props.url && css`
    background-image : url(${props.url});
  `}
`

const MenuHeader = styled.div`
  display : flex;
  justify-content : flex-end;
`

const MenuBody = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
`

const AuthBtnGroup = styled.div`
  width : 80%;
  display : flex;
  flex-direction : row;
  justify-content : space-evenly;
`

const AuthBtn = styled.button`
  background : transparent;
  border-radius : 3px;
  border : 2px solid rgba(38, 131, 204, 1);
  color : rgba(38, 131, 204, 1);
  margin : 0.5em 1em;
  padding : 0.7em 1em;
  width : 100px;
  font-size : 1.1rem;
  font-weight : bold;

  ${props => props.primary && css`
    background: rgba(38, 131, 204, 1);
    color: white;
  `}
`

const MenuLink = styled(Link)`
  font-weight : bold;
  font-size : 1.2rem;
  color : rgba(38, 131, 204, 1);
  margin-bottom : 30px;
  text-decoration : none;
`

export {
  StyledMenu, 
  StyledIcon,
  MenuHeader,
  MenuBody,
  AuthBtnGroup,
  AuthBtn,
  MenuLink,
};