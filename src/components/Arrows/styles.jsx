import styled, { css, keyframes } from 'styled-components';

export const ArrowDiv = styled.div`
  position: absolute;
  top: 45%;
  z-index: 1000;
  /* background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% ); */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* background-image: radial-gradient( circle 759px at -6.7% 50%,  rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% ); */
  background-image: linear-gradient(
    109.6deg,
    rgba(33, 103, 43, 1) 11.3%,
    rgba(117, 162, 61, 1) 91.1%
  );
  &.right {
    right: 10px;
    ${() => css`
       {
        ${arrowAnimation({ arrow: 'right' })}
      }
    `}
  }
  &.left {
    left: 10px;
    ${() => css`
       {
        ${arrowAnimation({ arrow: 'left' })}
      }
    `}
  }
`;

export const I = styled.i`
  font-size: 25px;
  color: black;
`;

const arrowAnimation = ({ time = '1s', type = 'ease', arrow } = {}) => css`
  animation: ${time} ${arrow === 'right' ? right : left} ${type} infinite;
`;

const right = keyframes`
  0% {
    right: 12px;
  }
  100%{
    right: 8px;
  }
`;

const left = keyframes`
  0% {
    left: 12px;
  }
  100%{
    left: 8px;
  }
`;
