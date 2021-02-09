import styled from 'styled-components';
import image from '../../../assets/photography-of-pathway-surrounded-by-plants.jpg';
import overlay from '../../../assets/white-shape-hero.svg';

export const Div = styled.div`
  background-image: url(${image});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  height: inherit;
  width: 100%;
  position: relative;
  text-align: center;
  /* margin-top: 7px; */
  @media (max-width: 870px) {
    background-size: cover;
    > div {
      /* background-position: -10px -10px; */
    }
  }
`;

export const DivOverlay = styled.div`
  background-image: url(${overlay});
  position: absolute;
  top: 0px;
  left: -7px;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  @media (max-width: 870px) {
    left: 0;
    background-position: top center;
  }
`;

export const Article = styled.article`
  position: absolute;
  top: 25%;
  /* left: 0; */
  z-index: 10;
  /* border: 1px solid red; */
  text-align: left;
  padding-left: 100px;
  /* display: inline-block; */
  max-height: 100%;
  @media (max-width: 1040px) {
    top: 20%;
    padding-left: 60px;
    > h1 {
      font-size: 50px;
    }
    > p:nth-of-type(1) {
      font-size: 27px;
    }
    > p:nth-of-type(2) {
      font-size: 16px;
    }
    @media (max-width: 870px) {
      top: 15%;
      padding-left: 30px;
      > p:nth-of-type(1) {
        max-width: 70%;
      }
      > p:nth-of-type(2) {
        max-width: 70%;
      }
    }
    @media(max-width: 720px) {
      top: 8%;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 68px;
  color: #0d3c00;
  margin-bottom: 20px;
`;

export const P = styled.p`
  color: #40bf4f;
  font-size: 35px;
  max-width: 50%;
  font-weight: bold;
  font-family: 'Lato';
`;

export const P2 = styled.p`
  margin-top: 15px;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 18px;
  opacity: 0.9;
`;
