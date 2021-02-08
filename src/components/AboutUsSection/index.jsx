import React from 'react';
import { ImageWrapper, Paragraph, Section, Title, H5, P, Span } from './styles';
import image from '../../assets/book-pen-open-731199-768x512.png';
import image2 from '../../assets/book-pen-open-731199-300x200.png'
export const AboutUsSection = () => {
  return (
    <Section>
      <Title>
        <H5>Bienvenidos</H5>
        <P>Todo Empezó</P>
        <Span></Span>
      </Title>
      <Paragraph>
        <p>
          Una noche mientras mirábamos nuestra serie favorita, una joven pareja
          tenía un programa en youtube donde promovía el conocimiento de las
          banderas. Nosotros desde hace algunos meses queriamos ayudar a otros a
          conocer como hacer de nuestro planeta un lugar sano y saludable para
          todos los que habitamos aquí, asi que al ver ese capítulo nos animamos
          a empezar este espacio. Somos un par de jóvenes con el sueño de hacer
          de este planeta un lugar sano y saludable. En este espacio te daremos
          información relevante sobre el cuidado del planeta, ideas creativas
          que puedes incorporar a tu día a día
        </p>
      </Paragraph>
      <ImageWrapper>
        <img src={image} alt='Imagen de un libro' />
      </ImageWrapper>
    </Section>
  );
};
