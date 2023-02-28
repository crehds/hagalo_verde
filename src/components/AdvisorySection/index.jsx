import React from 'react';
import {
  P,
  H2,
  I,
  Section,
  Title,
  AdvsoryTopicsGrid,
  ColumnGrid,
  TopicName,
  AdvosoryTopic
} from './styles';

export const AdvisorySection = () => {
  return (
    <Section>
      <Title>
        <P>Asesoría</P>
        <H2>Temas de Interés</H2>
      </Title>
      <AdvsoryTopicsGrid>
        <ColumnGrid>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Proyectos Ambientales</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>ONGs Ambientalistas</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Legislación Ambiental</TopicName>
          </AdvosoryTopic>
        </ColumnGrid>
        <ColumnGrid>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Huella de Carbono</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Huella Crítica</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Compostaje</TopicName>
          </AdvosoryTopic>
        </ColumnGrid>
        <ColumnGrid>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Residuos Sólidos</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Reciclaje</TopicName>
          </AdvosoryTopic>
          <AdvosoryTopic>
            <I className='icon-check_circle'></I>
            <TopicName>Energías Renovables</TopicName>
          </AdvosoryTopic>
        </ColumnGrid>
      </AdvsoryTopicsGrid>
    </Section>
  );
};
