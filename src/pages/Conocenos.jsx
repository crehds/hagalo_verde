import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { MissionAndVision } from '../components/MissionAndVision';
import { TitlePage } from '../components/TitlePage';

export const Conocenos = () => {
  return (
    <>
      <TitlePage title='Nosotros' />
      <MissionAndVision />
      <ContactSection/>
    </>
  );
};
