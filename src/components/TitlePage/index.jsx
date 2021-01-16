import React from 'react';
import { Div, H2, H5, Section } from './styles';

export const TitlePage = ({ subtitle, title }) => {
  return (
    <Section>
      <Div>
        {subtitle && <H5>{subtitle}</H5>}
        <H2>{title}</H2>
      </Div>
    </Section>
  );
};
