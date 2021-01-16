import React from 'react';
import { MapWrapper, Iframe } from './styles';

export const Map = () => {
  return (
    <MapWrapper>
      <Iframe
        frameBorder='0'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        src='https://maps.google.com/maps?q=Shubert%20890&t=m&z=14&output=embed&iwloc=near'
        title='shubert 890'
        aria-label='shubert 890'
      />
    </MapWrapper>
  );
};
