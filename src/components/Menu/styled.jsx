import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const UL = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  /* width:100%; */
`;

const bell = keyframes`
  0% {
    transform: rotate(35deg);
  }
  12.5% {
    transform: rotate(-30deg);
  }
  25% {
    transform: rotate(25deg);
  }
  37.5% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(15deg);
  }
  62.5% {
    transform: rotate(-10deg);
  }
  75 % {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const Li = styled(LinkRouter)`
  /* display:inline-flex; */
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  padding: 0 10px;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 18px;
  color: black;
  /* animation: 1s ${bell} ease 1; */
  &:hover {
    color: #40bf4f;
    cursor: pointer;
    animation: 1s ${bell} ease 1;
  }

  &[aria-current] {
    color: #40bf4f;
  }
`;