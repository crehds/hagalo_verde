import React from 'react';
import { AboutUsSection } from '../components/AboutUsSection';
import { MissionAndVision } from '../components/MissionAndVision';
import { TitlePage } from '../components/TitlePage';

export const Conocenos = () => {
  return (
    <>
      <TitlePage title='Nosotros' />
      <MissionAndVision />
      <AboutUsSection/>
    </>
  );
};
