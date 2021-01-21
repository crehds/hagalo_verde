import styled from 'styled-components';
import { Link } from '@reach/router'

export const DivArticle = styled.article`
  margin: 1rem;
  margin-right: 4rem;
  padding: 1em;
  background-color: #F3F2ED;
`;

export const P = styled.p`
  color: #40bf4f;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const H4 = styled.h4`
  font-size: 20px;
  color: #0d3c00;
  margin-bottom: 8px;
  font-weight: 600;
`;
export const ArticleParagraph = styled.p`
  color: #5a5a5a;
  /* border: 1px solid red; */
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 15px;
  min-height: 6rem;
`;

export const Button = styled(Link)`
  color: #40BF4F;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
`
