import styled from 'styled-components';
import image from '../../assets/photography-of-pathway-surrounded-by-plants.jpg'
import overlay from '../../assets/white-shape-hero.svg'

export const Section = styled.section`
  background-image:url(${image});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  height: 600px;
  width: 100%;
  position:relative;
  text-align:center;
  margin-top: 7px;
`

export const Article = styled.article`
  position: absolute;
  top: 30%;
  /* left: 0; */
  z-index: 10;
  /* border: 1px solid red; */
  text-align: left;
  padding-left: 100px;
  /* display: inline-block; */
  max-height: 100%;
`

export const P = styled.p`
  color: #40bf4f;
  font-size: 35px;
  max-width:50%;
  font-weight: bold;
  font-family: 'Lato';
`

export const DivOverlay = styled.div`
  background-image: url(${overlay});
  position:absolute;
  top: 0px;
  left: -7px;
  background-position:top right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  opacity: 1;
`
export const H1 = styled.h1`
  font-size: 68px;
  color: #0d3c00;
  margin-bottom: 20px;
`

export const P2 = styled.p`
  margin-top: 15px;
  font-family: 'Lato';
  font-weight: 300;
  font-size: 18px;
  opacity: .9;
`