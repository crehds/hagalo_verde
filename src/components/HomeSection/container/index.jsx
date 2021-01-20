import React from 'react';
import { Inicio } from '../Home1';
import { Inicio2 } from '../Home2';
import { Inicio3 } from '../Home3';
import { Inicio4 } from '../Home4';
import { useStateValue } from '../../../Context.js';

export const HomeContainer = () => {
  const [{ content }] = useStateValue();
  switch (content) {
    case 1:
      return <Inicio />;
    case 2:
      return <Inicio2 />;
    case 3:
      return <Inicio3 />;
    case 4:
      return <Inicio4 />;
    default:
      break;
  }
};
