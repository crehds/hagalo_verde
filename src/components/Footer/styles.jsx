import styled from 'styled-components';

export const Footer = styled.footer`
  /* border: 1px solid red; */
  /* height: 100px; */
  background-color: #222821;
  /* height: 800px; */
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.4fr;
  padding: 30px 60px;
`;

export const Div = styled.div`
  /* border: 1px solid red; */
  &:nth-child(4) {
    padding: 4px 15px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Poppins';
  color: #f3f2ed;
  font-weight: 600;
  font-size: 22px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  color: #a8b0a6;
  font-family: 'Raleway';
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.85;
`;

export const I = styled.i`
  padding-right: 8px;
  font-size: 18px;
  color: #40bf4f;
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  /* text-align:center; */
  justify-content: center;
`;

export const H6 = styled.h6`
  color: #f3f2ed;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 600;
  padding-top: 10px;
  text-align: center;
`;
export const Sentence = styled.p`
  font-size: 14px;
  line-height: 1.85;
  color: #a8b0a6;
  font-size: 15px;
  font-family: 'Raleway';
  margin-top: 5px;
  text-align: justify;
`;

export const Author = styled.p`
  margin-top: 10px;
  color: #a8b0a6;
  font-size: 15px;
  font-family: 'Raleway';
  text-align: right;
`;
