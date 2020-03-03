import styled , { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const DarkOverlay = styled.div`
  transition : 0.3s ease all;
  position : fixed;
  bottom:0;
  top:0;
  left:0;
  right:0;
  background-color : rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s linear;
`

export default DarkOverlay;