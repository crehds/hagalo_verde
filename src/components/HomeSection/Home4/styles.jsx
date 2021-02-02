import styled from 'styled-components';
import image from '../../../assets/WEB-1-2-scaled.jpg';

export const Div4 = styled.div`
  height: inherit;
  width: 100%;
  /* border: 1px solid green; */
  padding: 1rem 2.5rem;
  /* position: relative; */
`;

export const DivImage = styled.div`
  background-image: url(${image});
  background-position: center center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin: auto 0; */
  /* display: flex; */
  position: relative;
  padding-left: 2rem;
`;

export const Content = styled.div`
  /* border: 1px solid red; */
  margin-right: 40%;
  position: absolute;
  top: 32%;
`;

export const Sentence = styled.h2`
  font-family: 'Poppins';
  line-height: 1.5;
  font-size: 2.5rem;
  color: #ffffff;
`;

export const Author = styled.h5`
  font-family: 'Poppins';
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(180deg, rgba(34, 40, 33, 0.16) 0%, #222821 100%);
  opacity: 0.8;
  transition:background 0.3s, border-radius 0.3s, opacity 0.3s;
`
export const I = styled.i`
  border-radius: 50%;
  background: #40bf4f;
  padding: 0.8rem;
  padding-top: 0.75rem;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .3s;
  &:hover {
    color: #40bf4f;
    background-color: #ffffff;
    
  }
`;
