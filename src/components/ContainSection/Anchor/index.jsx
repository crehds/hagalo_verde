import React from 'react';
import { Div, A, I } from './styles';

export const Anchor = ({ href, icon, text }) => {
  return (
    <Div>
      <A href={href} target='_blank'>
        <I className={icon}></I>
        {text}
      </A>
    </Div>
  );
};
