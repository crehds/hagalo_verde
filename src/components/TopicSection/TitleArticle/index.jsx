import React from 'react';
import { Div, P, H2 } from './styles';

export const TitleArticle = ({ord, title}) => {
  return (
    <Div>
      <P>{ord}</P>
      <H2>{title}</H2>
    </Div>
  );
};
