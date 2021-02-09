import styled from 'styled-components';
import { Link } from '@reach/router';

export const DivArticle = styled.article`
  margin: 1rem;
  margin-right: 4rem;
  padding: 1em;
  background-color: #f3f2ed;
  /* border: red solid 1px; */
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  /* align-content: center; */
  align-items: center;
  /* max-height: 100%; */
  @media (max-width: 1050px) {
    margin-right: 2rem;
    @media (max-width: 870px) {
      margin: 0.8rem;
      padding: 0.8em;
      > p {
        font-size: 0.8rem;
      }
      /* > h4 {
        font-size: 18px;
      } */
      @media (max-width: 690px) {
        margin: 5px;
      }
    }
  }
`;

export const P = styled.p`
  color: #40bf4f;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const H4 = styled.h4`
  font-size: 20px;
  color: #0d3c00;
  /* margin-bottom: 8px; */
  font-weight: 600;
`;

export const ArticleParagraph = styled.p`
  color: #5a5a5a;
  /* border: 1px solid red; */
  font-size: 1rem;
  font-weight: 300;
  /* margin-bottom: 15px; */
  /* min-height: 6rem; */
  text-align: justify;
`;

export const Button = styled(Link)`
  color: #40bf4f;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
`;
