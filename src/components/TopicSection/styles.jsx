import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 80px;
  margin-top: 10px;
  @media (max-width: 1070px) {
    margin: 0 30px;
    display: grid;
    grid-row-gap: 15px;
    grid-template-rows: 0.9fr 0.9fr 0.9fr;
    @media (max-width: 850px) {
      margin: 0 15px;
    }
  }
`;
