import React from 'react';
import {
  Author,
  Content,
  Div4,
  Overlay,
  DivImage,
  Sentence,
  I
} from './styles';

export const Inicio4 = () => {
  return (
    <Div4>
      <DivImage>
        <Overlay />
        <Content>
          <I className='icon-play2'></I>
          <Sentence>
            Produce una inmesa tristeza pensar que la naturaleza habla mientras
            el ser humano no escucha
          </Sentence>
          <Author>- Victor Hugo</Author>
        </Content>
      </DivImage>
    </Div4>
  );
};
