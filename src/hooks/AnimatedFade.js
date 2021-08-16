import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const AnimatedFade = seconds => {
  const opacity = useRef(new Animated.Value(seconds > 0 ? 1 : 0)).current;

  useEffect(() => {
    if (opacity !== seconds > 0 ? 1 : 0) {
      Animated.timing(opacity, {
        toValue: seconds > 0 ? 1 : 0,
        useNativeDriver: true,
      }).start();
    }
  }, [seconds]);

  return opacity;
};

export default AnimatedFade;
