import styled from 'styled-components';
import { Link } from '@reach/router';

export const DivArticle = styled.article`
  margin: 1rem;
  margin-right: 4rem;
  padding: 1em;
  background-color: rgba(235, 232, 215, 0.93);
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  align-items: center;
  @media (max-width: 1050px) {
    margin-right: 2rem;
    @media (max-width: 870px) {
      margin: 0.8rem;
      padding: 0.8em;
      @media (max-width: 690px) {
        margin: 5px;
        font-size: 0.65rem;
        :nth-of-type(1) {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }
        :nth-of-type(2) {
          grid-column: 3 / 5;
          grid-row: 1/ 2;
        }
        :nth-of-type(3) {
          grid-column: 2 / 4;
        }
      }
      @media (max-width: 550px) {
        padding: 0.6em;
      }
    }
  }
`;

export const P = styled.p`
  color: #40bf4f;
  margin-bottom: 8px;
  font-weight: 600;
  @media (max-width: 870px) {
    font-size: 0.8rem;
  }
  @media (max-width: 550px) {
    margin-bottom: 4px;
    font-size: 0.7rem;
  }
`;

export const H4 = styled.h4`
  font-size: 20px;
  color: #0d3c00;
  font-weight: 600;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

export const ArticleParagraph = styled.p`
  color: #5a5a5a;
  font-size: 1rem;
  font-weight: 300;
  text-align: justify;
  @media (max-width: 870px) {
    font-size: 0.8rem;
  }
  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled(Link)`
  color: #40bf4f;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
`;
