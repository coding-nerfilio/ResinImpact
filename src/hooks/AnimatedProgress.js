import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {MAX_RESIN} from '../constants';

const calculateProgress = resin => (resin * 100) / MAX_RESIN / 100;

const AnimatedProgress = resinAmount => {
  const barWidth = useRef(
    new Animated.Value(calculateProgress(resinAmount)),
  ).current;

  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: calculateProgress(resinAmount),
      useNativeDriver: true,
    }).start();
  }, [resinAmount]);

  return barWidth;
};

export default AnimatedProgress;
