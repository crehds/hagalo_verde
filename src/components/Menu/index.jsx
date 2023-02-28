import React, { useEffect } from 'react';
import { Li, UL, Hamburguer, I } from './styles';

export const Menu = () => {
  useEffect(() => {
    const onResize = (e) => {
      handleIsActive();
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  function clickOnMenu(e) {
    const isMenu = document.getElementById('menu').contains(e.target);
    if (!isMenu) {
      handleMenuIsActive();
    }
  }

  function handleIsActive() {
    const width = window.innerWidth <= 800;
    const hamburguer = document.getElementById('hamburguer');
    if (width) {
      hamburguer.classList.add('is-active');
    } else {
      hamburguer.classList.remove('is-active');
    }
  }

  useEffect(() => {
    const onLoad = (e) => {
      return handleIsActive();
    };
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  function handleMenuIsActive(e) {
    const menu = document.getElementById('menu');
    const hamburguer = document.getElementById('icon-menu');
    if (menu.classList.contains('is-active')) {
      hamburguer.classList.remove('icon-x');
      hamburguer.classList.add('icon-menu');
      menu.classList.remove('is-active');
      document.removeEventListener('click', clickOnMenu);
    } else {
      hamburguer.classList.remove('icon-menu');
      hamburguer.classList.add('icon-x');
      menu.classList.add('is-active');
      document.addEventListener('click', clickOnMenu);
    }
  }

  return (
    <UL id='menu'>
      <Hamburguer id='hamburguer' onClick={handleMenuIsActive}>
        <I id='icon-menu' className='icon-menu'></I>
      </Hamburguer>
      <Li to='/'>Inicio</Li>
      <Li to='/conocenos'>Conócenos</Li>
      <Li to='/contenido'>Contenido</Li>
      <Li to='/contactanos'>Contáctanos</Li>
      <Li to='/blog'>Blog</Li>
    </UL>
  );
};
