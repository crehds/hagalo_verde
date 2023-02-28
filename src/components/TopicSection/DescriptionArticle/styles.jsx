import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  @media (max-width: 970px) {
    grid-area: description;
    font-size: 14px;
    & a {
      margin-top: 10px;
    }
    > p {
      line-height: 1.6;
    }
  }
`;
export const Span = styled.span`
  padding-top: 10px;
  margin-top: 5px;
  border-top: 2px #40bf4f solid;
  width: 48px;
`;

export const P = styled.p`
  font-family: 'Raleway';
  line-height: 1.85;
  padding-top: 20px;
  text-align: justify;
`;
