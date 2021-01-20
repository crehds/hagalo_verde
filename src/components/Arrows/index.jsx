import React from 'react';
import { useStateValue } from '../../Context';
import { ArrowDiv, I } from './styles';

export const Arrow = ({ icon, direction }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  return (
    <ArrowDiv
      className={direction}
      onClick={() => dispatch({ type: direction })}
    >
      <I className={`${icon}`}></I>
    </ArrowDiv>
  );
};
