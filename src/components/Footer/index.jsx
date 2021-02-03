import React from 'react';
import {
  Author,
  Detail,
  Div,
  Footer,
  H3,
  H6,
  I,
  ImgWrapper,
  Sentence,
} from './styles';
import image from '../../assets/hagaloverde_logo_110x110_2.png';
import { Link } from '@reach/router';

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
        <Link to='/conocenos' style={{ textDecoration: 'none' }}>
          <Detail className='socialMedia'>
            <span>Acerca de nosotros</span>
          </Detail>
        </Link>
        <Link to='/contenido' style={{ textDecoration: 'none' }}>
          <Detail className='socialMedia'>
            <span>Contenido</span>
          </Detail>
        </Link>
        <Link to='/contactanos' style={{ textDecoration: 'none' }}>
          <Detail className='socialMedia'>
            <span>Contacto</span>
          </Detail>
        </Link>
        <Link to='/blog' style={{ textDecoration: 'none' }}>
          <Detail className='socialMedia'>
            <span>Blog</span>
          </Detail>
        </Link>
      </Div>
      <Div>
        <H3>Síguenos</H3>
        <Detail
          className='socialMedia'
          href='https://www.youtube.com/channel/UCYDEfyOCa6KQ2QEYqMRyPaQ'
          target='_blank'
        >
          <I className='icon-youtube'></I>
          <span>Youtube</span>
        </Detail>
        <Detail
          className='socialMedia'
          href='https://www.facebook.com/H%C3%A1galo-Verde-100923345277576'
          target='_blank'
        >
          <I className='icon-facebook2'></I>
          <span>Facebook</span>
        </Detail>
        <Detail
          className='socialMedia'
          href='https://open.spotify.com/show/3iYug8FhS3Canwf3pzDLoq'
          target='_blank'
        >
          <I className='icon-spotify'></I>
          <span>Spotify</span>
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
