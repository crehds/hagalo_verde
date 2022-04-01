import styled from 'styled-components';
import image from '../../../assets/potted-plant-and-gardening-tool-1.png';

export const Div = styled.div`
  height: inherit;
  width: 100%;
  font-family: 'Poppins';
  color: #0d3c00;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-image: url(${image});
  background-position: top right;
  background-repeat: no-repeat;
  background-color: rgb(243, 242, 237);
  @media (max-width: 870px) {
    padding: 10px 28px 40px;
  }
`;
export const Title = styled.h2`
  font-size: 30px;
  font-size: 2.5rem;
  margin-bottom: 20px;
  @media (max-width: 870px) {
    font-size: 2rem;
  }
`;
export const Span = styled.span`
  border-top: 2px #40bf4f solid;
  width: 48px;
`;

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 50px 0 20px;
  @media (max-width: 550px) {
    padding-top: 10px;
  }
`;
