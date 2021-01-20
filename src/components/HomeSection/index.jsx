import React from 'react';
import { Section } from './styles';
import { Arrow } from '../Arrows';
import { HomeContainer } from './container';
import { Provider } from '../../Context';

export const HomeSection = () => {
  return (
    <Section>
      <Provider>
        <Arrow icon='icon-arrow-left' direction='left'/>
        <Arrow icon='icon-arrow-right1' direction='right'/>
        <HomeContainer />
      </Provider>
    </Section>
  );
};
