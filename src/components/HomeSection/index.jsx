import React from 'react';
import { Section } from './styles';
import { HomeContainer } from './container';
import { Provider } from '../../Context';

export const HomeSection = () => {
  return (
    <Section>
      <Provider>
        <HomeContainer />
      </Provider>
    </Section>
  );
};
