import styled from 'styled-components';

export const Section = styled.section`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

export const Div = styled.div`
  text-align: center;
  padding: 0 30px;
  &:nth-child(1) {
    border-right: 1px solid #40bf4f;
  }

  &:nth-child(2) {
    border-left: 1px solid #40bf4f;
  }
`;

export const H2 = styled.h2`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const P = styled.p`
  font-size: 18px;
  font-family: 'Lato';
  font-weight: bold;
  margin: 0 40px;
  @media (max-width: 1050px) {
    margin: 0;
    text-align: justify;
  }
`;
