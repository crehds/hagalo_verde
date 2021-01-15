import React from 'react';
import { Img, Wrapper } from './styles';


export const ImageWrapper = ({src}) => {
  return (
    <Wrapper>
      <Img src={src} alt='Imagen de un micrófono' />
    </Wrapper>
  );
};
