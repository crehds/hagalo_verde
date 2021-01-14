import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  /* border: 1px solid red; */
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr;
  margin: 0 40px;
  margin-top: 80px;
`;
export const Title = styled.div`
  grid-row: 1 / 3;
  /* border: 1px solid blue; */
  /* padding-top: 70px; */
  padding-left: 30px;
  display: flex;
  flex-direction: column;
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
  font-weight:300;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
  /* margin: 15px 20px; */
`;
