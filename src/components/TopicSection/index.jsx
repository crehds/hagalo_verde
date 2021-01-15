import React from 'react';
import { Section } from './styles';
import { Article } from './Article';
import image1 from '../../assets/microphone-audio-recording-2618102-p09gadnz94mdnkaskri0rcz6hfmc1z4d40zoaugmsw.jpg';
import image2 from '../../assets/business-computer-mobile-2846221-p09ftct7h5bfdt0zzel9lnmn67j0nbjdfrn3efpbhs.jpg'
import image3 from '../../assets/home-indoors-decor-2618511-p09h1rooec45yiijn3pnwy5pmmmdcgusjlc0q3unhs.jpg'

export const TopicSection = () => {
  return (
    <Section>
      <Article
        ord='01.'
        title='Podcast'
        description='Podrás encontrar conversaciones amenas de dos ingenieros especialistas
        en temas ambientales y todo el contenido de Hagalo Verde hecho podcast
        para Spotify.'
        href='https://open.spotify.com/show/3iYug8FhS3Canwf3pzDLoq'
        icon='icon-spotify'
        text='Haz Click Aquí'
        imageSrc={image1}
      />
      <Article
        ord='02.'
        title='Blog'
        description='En busca de poner un granito de arena para la conservación del lugar donde vivimos y en el cual moreremos, te presentamos diversos temas de interés con ideas creativas que esperamos te sirvan y les puedas sacar provecho para hacer de este un lugar mejor.'
        href='#'
        icon='icon-blogger1'
        text='Haz Click Aquí'
        imageSrc={image2}
      />
      <Article
        ord='03.'
        title='Videos'
        description='Hagalo Verde es una iniciativa ambientalista, que busca generar conciencia de manera proactiva para desarrollar diversos proyectos ambientales y brindarte ideas para ayudar a hacer de este mundo un lugar mejor para las generaciones posteriores.'
        href='https://www.youtube.com/channel/UCYDEfyOCa6KQ2QEYqMRyPaQ'
        icon='icon-youtube'
        text='Haz Click Aquí'
        imageSrc={image3}
      />
    </Section>
  );
};
