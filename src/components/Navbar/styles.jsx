import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  padding-left: 60px;
  position: fixed;
  width: 100%;
  top: ${(props) => (props.show ? '0' : '-130px')};
  height: auto;
  background-color: #f3f2ed;
  background-image: linear-gradient(1deg, #ffffff 0%, #f3f2ed 100%);
  z-index: 5000;
  transition: 0.5s;
`;

const test = keyframes`
  from {
    transform: scale(.1) rotate(10deg);
  }
  to {
    transform: scale(1) rotate(360deg);
  }
`;
const aux = keyframes`
  from {
    transform: rotateY(10deg);
  }
  to {
    transform:  rotateY(360deg);
  }
`;

export const DivLogo = styled(LinkRouter)`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  max-width: 100%;
  text-decoration: none;
  color: black;
  &:hover > div > img {
    animation: 1s ${aux} ease 1;
  }
`;

export const DivImg = styled.div`
  animation: 2s ${test} ease 1;
`;
export const DivTitleLogo = styled.div`
  max-width: 100%;
  margin: auto 0;
`;
const shine = keyframes`
  to {
    background-position: 200% center;
  }
}`;

export const H3 = styled.h3`
  padding-top: 5px;
  font-family: 'Noto Sans JP';
  font-weight: 400;
  animation: ${shine} 1s linear alternate-reverse;
  animation-iteration-count: 2;
  background-image: linear-gradient(
    to right,
    rgb(55, 65, 77) 20%,
    rgba(72, 85, 99, 1) 40%,
    #000 60%,
    rgba(127, 146, 166, 1) 80%,
    rgb(148, 173, 201) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const P = styled.p`
  font-family: 'Noto Sans JP';
  font-weight: 300;
  font-size: 15px;
  animation: ${shine} 1s linear alternate-reverse;
  animation-iteration-count: 2;
  background-image: linear-gradient(
    to right,
    rgb(55, 65, 77) 20%,
    rgba(72, 85, 99, 1) 40%,
    rgba(127, 146, 166, 1) 60%,
    #000 80%,
    rgb(148, 173, 201) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
