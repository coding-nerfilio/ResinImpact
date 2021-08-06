import React, {useEffect, useState} from 'react';
import {MAX_RESIN} from '../constants';

const Resin = initialResin => {
  const [resinAmount, setResin] = useState(initialResin);
  const [secondsLeft, setSecondsLeft] = useState(
    (MAX_RESIN - initialResin) * 480,
  );

  const modifyResin = newValue => {
    setResin(newValue);
  };

  const useResin = i => {
    switch (i) {
      case 0:
        setResin(resinAmount >= 60 ? resinAmount - 60 : resinAmount);
        break;
      case 1:
        setResin(resinAmount >= 40 ? resinAmount - 40 : resinAmount);
        break;
      case 2:
        setResin(resinAmount >= 30 ? resinAmount - 30 : resinAmount);
        break;
      case 3:
        setResin(resinAmount >= 20 ? resinAmount - 20 : resinAmount);
        break;
      case 4:
        setResin(resinAmount + 60);
        break;
    }
  };

  useEffect(() => {
    setSecondsLeft((MAX_RESIN - resinAmount) * 480);
  }, [resinAmount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft => (secondsLeft > 0 ? secondsLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {secondsLeft, resinAmount, modifyResin, useResin};
};

export default Resin;
