import React from 'react';
import { Article, Button, Div, H2, H5, Image, ImgWrapper, Paragraph } from './styles';
import image from '../../../assets/chair-computer-desk-1866784-1024x682.jpg';

export const Inicio2 = () => {
  return (
    <Div>
      <ImgWrapper>
        <Image src={image} alt='imagen referencial' />
      </ImgWrapper>
      <Article>
        <H5>Bienvenidos</H5>
        <H2>Todo Empezó</H2>
        <Paragraph>
          Una noche mientras mirabámos nuestra serie favorita, una joven pareja
          tenia un programa en youtube donde promovía el conocimiento de las
          banderas. Nosotros desde hace algunos meses...
        </Paragraph>
        <Button to='/conocenos'> Leer más</Button>
      </Article>
    </Div>
  );
};
