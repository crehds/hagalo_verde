import React, { useEffect, useState } from 'react';
import {
  Article,
  Button,
  Div,
  H2,
  H5,
  Image,
  ImgWrapper,
  Paragraph
} from './styles';

import image2 from '../../../assets/chair-computer-desk-1866784-768x512.png';
import image4 from '../../../assets/chair-computer-desk-1866784-300x450.png';

export const Inicio2 = () => {
  const [src, setSrc] = useState(image4);
  useEffect(() => {
    const onResize = (e) => {
      const width = window.innerWidth < 620;

      if (width) {
        setSrc(image4);
      } else {
        setSrc(image2);
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, [src]);

  useEffect(() => {
    const width = window.innerWidth < 620;
    if (width) {
      setSrc(image4);
    } else {
      setSrc(image2);
    }
  }, []);

  return (
    <Div id='home2'>
      <ImgWrapper>
        <Image src={src} alt='imagen referencial' />
      </ImgWrapper>
      <Article>
        <H5>Bienvenidos</H5>
        <H2>Todo Empezó</H2>
        <Paragraph>
          Una noche mientras mirábamos nuestra serie favorita, una joven pareja
          tenia un programa en YouTube donde promovía el conocimiento de las
          banderas. Nosotros desde hace algunos meses...
        </Paragraph>
        <Button to='/conocenos'> Leer más</Button>
      </Article>
    </Div>
  );
};
