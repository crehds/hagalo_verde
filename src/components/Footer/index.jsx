import React from 'react';
import { Author, Detail, Div, Footer, H3, H6, I, ImgWrapper, Sentence } from './styles';
import image from '../../assets/hagaloverde_logo_110x110_2.png';

export const FooterSection = () => {
  return (
    <Footer>
      <Div>
        <H3>Contáctanos</H3>
        <Detail>
          <I className='icon-location_on'></I>
          Shubert Nº 890
        </Detail>
        <Detail>
          <I className='icon-phone'></I>
          +51 920600942 <br />
          +51 944200630
        </Detail>
        <Detail>
          <I className='icon-mail-envelope-closed'></I>
          contacto@hagaloverde.com
        </Detail>
      </Div>
      <Div>
        <H3>Conócenos</H3>
        <Detail>Acerca de nosotros</Detail>
        <Detail>Contenido</Detail>
        <Detail>Contacto</Detail>
        <Detail>Blog</Detail>
      </Div>
      <Div>
        <H3>Síguenos</H3>
        <Detail>
          <I className='icon-youtube'></I>Youtube
        </Detail>
        <Detail>
          <I className='icon-facebook2'></I>Facebook
        </Detail>
        <Detail>
          <I className='icon-spotify'></I>Spotify
        </Detail>
      </Div>
      <Div>
        <ImgWrapper>
          <img src={image} alt='' />
        </ImgWrapper>
        <H6>UN PASO A AL VEZ</H6>
        <Sentence>
          "El Hombre es la especie más insensata; venera a un Dios invisible y
          masacra a una naturaleza visible, sin saber que esta naturaleza que él
          masacra es ese Dios invisible que él venera."
        </Sentence>
        <Author>- Hubert Reeves</Author>
      </Div>
    </Footer>
  );
};
