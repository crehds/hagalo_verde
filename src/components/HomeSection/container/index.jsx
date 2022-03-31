import React from 'react';
import { Inicio } from '../Home1';
import { Inicio2 } from '../Home2';
import { Inicio3 } from '../Home3';
import { Inicio4 } from '../Home4';
import { useStateValue } from '../../../Context.js';
import { useSetInterval } from '../../../hooks/useSetInterval';
import { Arrow } from '../../Arrows';

export const HomeContainer = () => {
  const [{ content }, dispatch] = useStateValue();
  const { restartInterval } = useSetInterval(dispatch);

  function handleContent() {
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
  }

  return (
    <>
      <Arrow
        restartInterval={restartInterval}
        icon='icon-arrow-left'
        direction='left'
      />
      <Arrow
        restartInterval={restartInterval}
        icon='icon-arrow-right1'
        direction='right'
      />
      {handleContent()}
    </>
  );
};
