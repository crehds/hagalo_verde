import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const UL = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  /* width:100%; */
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

  &:hover {
    color: #40bf4f;
    cursor: pointer;
  }

  &[aria-current] {
    color: #40bf4f;
  }
`;
