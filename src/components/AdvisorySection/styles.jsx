import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f3f2ed;
  color: #0d3c00;
  padding: 40px 0 50px;
  margin-top: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Raleway';
`;

export const P = styled.p`
  /* color: #0d3c00; */
  font-size: 20px;
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-size: 40px;
`;
export const AdvsoryTopicsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px 10px;
  @media (max-width: 1070px) {
    margin: 5px;
  }
`;

export const ColumnGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 750px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const AdvosoryTopic = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  @media (max-width: 1070px) {
    > p {
      font-size: 18px;
    }
    > i {
      font-size: 15px;
    }
    @media (max-width: 750px) {
      > p {
        font-size: 16px;
      }
      > i {
        font-size: 13px;
      }
    }
  }
`;
export const TopicName = styled.p`
  font-size: 23px;
  padding-left: 10px;
  font-weight: bold;
  font-family: 'Raleway';
`;

export const I = styled.i`
  color: #40bf4f;
  font-size: 20px;
`;
