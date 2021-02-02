import React, { useEffect } from 'react';
import { Article } from './Article';
import { ArticleContainer, Div, Span, Title } from './styles';

export const Inicio3 = () => {
  // useEffect(() => {
  //   return function cleanup() {
  //     console.log('desmontado');
  //   };
  // })
  return (
    <Div>
      <Title>Nuestro Planeta Primero</Title>
      <Span />
      <ArticleContainer>
        <Article
          ord='01.'
          title='Podcast'
          paragraph='Conversaciones amenas y educativas sobre temas de interés medio ambientales'
          link='/contenido'
        />
        <Article
          ord='02.'
          title='Blog'
          paragraph='Aquí encontraras diferentes temas e ideas creativas para cuidar nuestro planeta'
          link='/blog'
        />
        <Article
          ord='03.'
          title='Videos'
          paragraph='Te dejamos nuestra lista de videos educativos con ideas creativas y
            más'
          link='/contenido'
        />
      </ArticleContainer>
    </Div>
  );
};
