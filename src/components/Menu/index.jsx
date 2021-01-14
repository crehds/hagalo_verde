import React from 'react';
import { Li, UL } from './styled';

export const Menu = () => {
  return (
    <UL>
      <Li to='/'>Inicio</Li>
      <Li to='/conocenos'>Conócenos</Li>
      <Li to='/contenido'>Contenido</Li>
      <Li to='/contactanos'>Contáctanos</Li>
      <Li to='/blog'>Blog</Li>
    </UL>
  );
};
