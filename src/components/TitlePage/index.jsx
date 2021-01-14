import React from 'react';
import { Div, H2, Section } from './styles';

export const TitlePage = ({ title }) => {
  return (
    <Section>
      <Div>
        <H2>{title}</H2>
      </Div>
    </Section>
  );
};
