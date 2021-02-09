import styled from 'styled-components';
import { Link } from '@reach/router';

export const Div = styled.div`
  height: inherit;
  width: 100%;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  /* @media(max-width: 680px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    > div {
      grid-row: 2 / 3;
    }
    > article {
      grid-row: 1 / 2;
    }
  } */
`

export const ImgWrapper = styled.div`
  /* border: 1px solid brown; */
  margin: 2em;
  padding: 3em;
  @media(max-width: 870px) {
    margin: 1.5em .5em;
    /* margin-top: 2em; */
    padding: 1em 1.5em;
    padding-right: .8em;
    /* max-width: 100%;
    max-height: 100%; */
    /* width: 100%;
    height: 100%; */
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media(max-width: 680px) {
    max-width: 100%;
    height: 100%;
  } 
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
  @media(max-width: 870px) {
    padding: 8px;
    padding-left: 0px;
    > h5 {
      font-size: 17px;
    }
    > h2 {
      font-size: 35px;
    }
    > p {
      line-height: 1.6;
      font-size: 15px;
      /* padding: 5px 5px; */
      padding-left: 0px;
    }
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