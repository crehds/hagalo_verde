import React from 'react';
import { ArrowDiv, I } from './styles';

export const Arrow = ({ icon, direction, restartInterval }) => {
  return (
    <ArrowDiv className={direction} onClick={() => restartInterval(direction)}>
      <I className={`${icon}`}></I>
    </ArrowDiv>
  );
};
