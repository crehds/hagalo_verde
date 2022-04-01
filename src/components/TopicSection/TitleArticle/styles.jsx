import styled from 'styled-components';

export const Div = styled.div`
  padding: 0 40px;
  padding-top: 10px;
  @media (max-width: 1230px) {
    padding: 0 20px;
    @media (max-width: 970px) {
      > h2 {
        font-size: 23px;
      }
    }
  }
`;

export const P = styled.p`
  color: #40bf4f;
  font-weight: bold;
`;

export const H2 = styled.h2`
  color: #0d3c00;
  margin-top: 5px;
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 600;
`;
