import React from 'react';
import { DivLogo, DivTitleLogo, H3, Nav, P, Img, DivImg } from './styles';
import logo from '../../assets/hagaloverde_logo_86x90.png';
import { Menu } from '../Menu/index';

export const NavBar = () => {
  return (
    <Nav>
      <DivLogo to='/'>
        <DivImg>
          <Img src={logo} alt='logo de hagalo verde' />
        </DivImg>
        <DivTitleLogo>
          <H3>Hágalo Verde</H3>
          <P>Un paso a la vez</P>
        </DivTitleLogo>
      </DivLogo>
      <Menu />
    </Nav>
  );
};
