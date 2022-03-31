import { useEffect, useState } from 'react';

export function useSetInterval(dispatch) {
  const [interval, setIntervalId] = useState({});
  const [statusInterval, setStatusInterval] = useState('start');

  function restartInterval(direction) {
    dispatch({ type: direction });
    clearInterval(interval.intervalId);
    setStatusInterval('stop');
  }

  useEffect(() => {
    let intervalId;
    if (statusInterval === 'start') {
      intervalId = setInterval(() => {
        dispatch({ type: 'right' });
      }, 10000);
      setIntervalId({ intervalId });
    } else {
      setStatusInterval('start');
    }
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusInterval]);

  return { restartInterval };
}
