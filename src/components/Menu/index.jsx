import React from 'react';
import { Li, UL } from './styled';

export const Menu = () => {
  return (
    <UL>
      <Li to='/inicio'>Inicio</Li>
      <Li to='/conócenos'>Conócenos</Li>
      <Li to='/contenido'>Contenido</Li>
      <Li to='/contactanos'>Contáctanos</Li>
      <Li to='/blog'>Blog</Li>
    </UL>
  );
};
