import React from 'react';
import { Anchor } from '../Anchor';

import { Div, Span, P } from './styles';

export const DescriptionArticle = ({ description, href, icon, text }) => {
  return (
    <Div>
      <Span></Span>
      <P>{description}</P>
      <Anchor href={href} icon={icon} text={text} />
    </Div>
  );
};
