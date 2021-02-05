import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const UL = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  /* width:100%; */
  @media (max-width: 800px) {
    position: fixed;
    flex-direction: column;
    right: -130px;
    top: 0;
    height: 100vh;
    width: auto;
    padding-top: 80px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 30px;
    transition: .5s;
    background-color: #f9f9f9;
    &.is-active {
      right: 0px;
      > a:hover {
        border: 2px solid #eaeaea;
        /* border-color: #eaeaea; */
      }
    }
  }
`;

export const Hamburguer = styled.div`
  border: 1px solid #40bf4f;
  position: fixed;
  right: 35px;
  top: 30px;
  /* position: absolute; */
  padding: 0.6em;
  border-radius: 50%;
  display: none;
  transition: .3s;
  &.is-active {
    display: block;
    /* right: 50px; */
  }
`;

export const I = styled.i`
  font-size: 20px;
  color: #40bf4f;
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
`;

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
