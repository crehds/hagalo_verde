import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  /* border: 1px solid red; */
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  margin: 80px 40px 20px;
  @media(max-width: 870px) {
    margin-right: 20px;
    margin-left: 20px;
    grid-template-rows: 1fr 1.5fr;
    grid-row-gap: 10px;
  }
`;
export const Title = styled.div`
  grid-row: 1 / 3;
  /* border: 1px solid blue; */
  /* padding-top: 70px; */
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1050px) {
    grid-row: 1 / 2;
    @media (max-width: 870px) {
      padding-left: 0;
      padding-right: 8px;
      > h5 {
        font-size: 17px;
      }
      > p {
        font-size: 35px;
      }
    }
  }
`;

export const H5 = styled.h5`
  font-size: 19px;
  color: #0d3c00;
`;

export const P = styled.p`
  margin-top: 10px;
  font-size: 42px;
  color: #0d3c00;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Span = styled.span`
  border-top: 2px #40bf4f solid;
  width: 48px;
`;

export const Paragraph = styled.div`
  /* border: 1px solid red; */
  margin-top: 10px;
  columns: 2;
  font-family: 'Raleway';
  line-height: 1.85;
  font-weight: 300;
  text-align: justify;
  @media(max-width: 870px) {
    columns: 1;
    line-height: 1.5;
    > p {
      font-size: 14px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%;
  height: 100%; */
  @media (max-width: 1050px) {
    grid-column: 1 / 3;
    /* grid-row: 2 / 3; */
    > img {
      width: 100%;
      /* height: auto; */
    }
  }

  /* border: 1px solid green; */
  /* margin: 15px 20px; */
`;
