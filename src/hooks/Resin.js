import {useEffect, useState} from 'react';
import {MAX_SECONDS, SECONDS_PER_RESIN} from '../constants';
import Storage from '../utils/Storage';
import {AS as AppState} from './AppState';

const Resin = () => {
  const [secondsLeft, setSecondsLeft] = useState(MAX_SECONDS);
  const {appStateVisible} = AppState();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft => (secondsLeft > 0 ? secondsLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const modifyResin = newValue => {
    setSecondsLeft(MAX_SECONDS - newValue * SECONDS_PER_RESIN);
  };

  const useResin = i => {
    switch (i) {
      case 0:
        calculateResin(secondsLeft) >= 60 &&
          setSecondsLeft(secondsLeft + 60 * SECONDS_PER_RESIN);
        break;
      case 1:
        calculateResin(secondsLeft) >= 40 &&
          setSecondsLeft(secondsLeft + 40 * SECONDS_PER_RESIN);
        break;
      case 2:
        calculateResin(secondsLeft) >= 30 &&
          setSecondsLeft(secondsLeft + 30 * SECONDS_PER_RESIN);
        break;
      case 3:
        calculateResin(secondsLeft) >= 20 &&
          setSecondsLeft(secondsLeft + 20 * SECONDS_PER_RESIN);
        break;
      case 4:
        setSecondsLeft(secondsLeft - 60 * SECONDS_PER_RESIN);
        break;
    }
  };

  useEffect(() => {
    if (appStateVisible === 'background') {
      Storage.SaveData(secondsLeft);
    }
    if (appStateVisible === 'active') {
      const getSavedData = async () => {
        let data = await Storage.RetrieveData();
        if (data === null) {
          return;
        }
        let timeElapsed = Math.floor((Date.now() - data.date) / 1000);
        setSecondsLeft(data.secondsLeft - timeElapsed);
      };
      getSavedData();
    }
  }, [appStateVisible]);

  return {
    secondsLeft,
    resinAmount: calculateResin(secondsLeft),
    modifyResin,
    useResin,
  };
};

export default Resin;

const calculateResin = secondsLeft =>
  Math.floor((MAX_SECONDS - secondsLeft) / SECONDS_PER_RESIN);
