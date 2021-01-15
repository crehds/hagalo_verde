import React from 'react';
import { TopicSection } from '../components/TopicSection';
import { TitlePage } from '../components/TitlePage';
import { AdvisorySection } from '../components/AdvisorySection';

export const Contenido = () => {
  return (
    <>
      <TitlePage title='Contenido' />
      <TopicSection />
      <AdvisorySection />
    </>
  );
};
