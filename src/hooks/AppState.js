import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

export const AS = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };
  return {appStateVisible};
};
