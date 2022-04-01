import styled from 'styled-components';
import { Link } from '@reach/router';

export const Div = styled.div`
  height: inherit;
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`;

export const ImgWrapper = styled.div`
  margin: 2em;
  padding: 3em;
  @media (max-width: 870px) {
    margin: 1.5em 0.5em;
    padding: 1em 1.5em;
    padding-right: 0.8em;
    @media (max-width: 550px) {
      margin: 1.1em 0.4em;
      padding: 0.8em 1.5em;
      padding-right: 0.7em;
    }
  }
  @media (max-width: 550px) {
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 680px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const Article = styled.article`
  margin: auto 0;
  padding: 15px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  & button {
    align-self: center;
  }
  @media (max-width: 870px) {
    padding: 8px;
    padding-left: 0px;
    > h5 {
      font-size: 17px;
      @media (max-width: 550px) {
        font-size: 15px;
      }
    }
    > h2 {
      font-size: 35px;
      @media (max-width: 550px) {
        font-size: 28px;
      }
    }
    > p {
      line-height: 1.6;
      font-size: 15px;
      padding-left: 0px;
      @media (max-width: 550px) {
        font-size: 14px;
      }
    }
  }
`;

export const H5 = styled.h5`
  font-size: 19px;
  font-family: 'Raleway';
  color: #0d3c00;
`;

export const H2 = styled.h2`
  margin-top: 8px;
  font-size: 42px;
  font-family: 'Raleway';
  color: #0d3c00;
`;

export const Paragraph = styled.p`
  color: #7a7a7a;
  line-height: 1.85;
  margin-top: 10px;
  font-family: 'Raleway';
  text-align: justify;
  padding: 10px 10px;
  padding-right: 2em;
`;
export const Button = styled(Link)`
  margin: 0 auto;
  margin-top: 8px;
  padding: 12px 20px;
  display: flex;
  border-radius: 3px;
  font-family: 'Poppins';
  background-color: #40bf4f;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    background-color: #07bf1d;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    padding: 10px;
    font-size: 15px;
  }
`;
