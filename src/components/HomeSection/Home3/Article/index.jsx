import React from 'react';
import { DivArticle, ArticleParagraph, H4, P, Button } from './styled';

export const Article = ({ ord, title, paragraph, link }) => {
  return (
    <DivArticle>
      <P>{ord}</P>
      <H4>{title}</H4>
      <ArticleParagraph>{paragraph}</ArticleParagraph>
      <Button to={link}>Leer Más</Button>
    </DivArticle>
  );
};
