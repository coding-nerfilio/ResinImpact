import React, {useEffect, useState} from 'react';
import {MAX_RESIN} from '../constants';
import Storage from '../utils/Storage';
import {AS as AppState} from './AppState';

const Resin = initialResin => {
  const [resinAmount, setResin] = useState(initialResin);
  const [secondsLeft, setSecondsLeft] = useState(
    (MAX_RESIN - initialResin) * 480,
  );

  const updateSeconds = resin => {
    setSecondsLeft((MAX_RESIN - resin) * 480);
  };

  const modifyResin = newValue => {
    setResin(newValue);
    updateSeconds(newValue);
  };

  const {appStateVisible} = AppState();

  const useResin = i => {
    let newResineAmount;
    switch (i) {
      case 0:
        newResineAmount = resinAmount >= 60 ? resinAmount - 60 : resinAmount;
        break;
      case 1:
        newResineAmount = resinAmount >= 40 ? resinAmount - 40 : resinAmount;
        break;
      case 2:
        newResineAmount = resinAmount >= 30 ? resinAmount - 30 : resinAmount;
        break;
      case 3:
        newResineAmount = resinAmount >= 20 ? resinAmount - 20 : resinAmount;
        break;
      case 4:
        newResineAmount = resinAmount + 60;
        break;
      case 5:
        newResineAmount = resinAmount + 1 > 160 ? 160 : resinAmount + 1;
    }
    setResin(newResineAmount);
    updateSeconds(newResineAmount);
  };

  useEffect(() => {
    if (appStateVisible === 'active') {
      const getSavedData = async () => {
        let data = await Storage.RetrieveData();
        if (data === null) {
          return;
        }
        const timeElapsed = Math.floor((Date.now() - data.date) / 1000);
        setResin(
          data.resine + Math.floor(timeElapsed / 480) > 160
            ? 160
            : data.resine + Math.floor(timeElapsed / 480),
        );
        setSecondsLeft(data.seconds - timeElapsed);
      };
      getSavedData();
    }
    if (appStateVisible === 'background') {
      Storage.SaveData(secondsLeft, resinAmount);
    }
  }, [appStateVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft => (secondsLeft > 0 ? secondsLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {secondsLeft, resinAmount, modifyResin, useResin};
};

export default Resin;
