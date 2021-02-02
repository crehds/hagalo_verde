import styled from 'styled-components';
import { Link } from '@reach/router';

export const Div = styled.div`
  height: inherit;
  width: 100%;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`

export const ImgWrapper = styled.div`
  /* border: 1px solid brown; */
  margin: 2em;
  padding: 3em;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Article = styled.article`
  /* border: 1px solid blue; */
  margin: auto 0;
  padding: 15px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  & button {
    align-self: center;
  }
`

export const H5 = styled.h5`
  font-size: 19px;
  font-family: 'Raleway';
  color: #0d3c00;
`

export const H2 = styled.h2`
  margin-top: 8px;
  font-size: 42px;
  font-family: 'Raleway';
  color: #0d3c00;
`

export const Paragraph = styled.p`
  color: #7A7A7A;
  line-height: 1.85;
  margin-top: 10px;
  font-family:'Raleway';
  text-align: justify;
  padding: 10px 10px;
  padding-right: 2em;
  /* border: 1px solid red; */
`
export const Button = styled(Link)`
  margin: 0 auto;
  margin-top: 8px;
  padding: 12px 20px;
  display: flex;
  border-radius: 3px;
  font-family:'Poppins';
  background-color: #40bf4f;
  color: #ffffff;
  text-decoration:none;
  &:hover {
    background-color: #07bf1d;
    cursor: pointer;
  }
`