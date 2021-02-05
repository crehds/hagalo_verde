import styled from 'styled-components';

export const Article = styled.article`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 1fr;
  grid-column-gap: 5px;
  /* border: 1px solid red; */
  grid-template-areas: 'title' 'description' 'image';
  @media(max-width: 970px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .2fr 1fr;
    grid-template-areas: 'title image' 'description image';
  }
`;