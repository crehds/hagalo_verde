import React from 'react';
import { Div, DivOverlay, Article, H1, P, P2 } from './styles';

export const Inicio = () => {
  return (
    <Div>
      <DivOverlay />
      <Article>
        <H1>Ruway Q'umir</H1>
        <P>
          Creemos que la naturaleza y las personas pueden convivir en armonía
        </P>
        <P2>
          Descubre con nosotros ideas creativas para cuidar nuestro planeta
        </P2>
      </Article>
    </Div>
  );
};
