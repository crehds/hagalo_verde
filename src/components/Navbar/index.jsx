import React, { useEffect, useState } from 'react';
import { DivLogo, DivTitleLogo, H3, Nav, P, Img, DivImg } from './styles';
import logo from '../../assets/hagaloverde_logo_86x90.png';
import { Menu } from '../Menu/index';

export const NavBar = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const onScroll = (e) => {
      const showOrNot = window.scrollY > 200;
      // show !== showOrNot && setShow(showOrNot)
      if (showOrNot) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [show]);

  useEffect(() => {
    const onMouseEvent = (e) => {
      const showOrNot = window.scrollY < 200;
      const mouseMove = window.event.clientY <= 90;
      if (mouseMove || showOrNot) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    document.addEventListener('mousemove', onMouseEvent);
    return () => {
      document.removeEventListener('mousemove', onMouseEvent);
    };
  }, [show]);

  return (
    <Nav show={show}>
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
