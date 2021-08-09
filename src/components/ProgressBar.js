import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {MAX_RESIN} from '../constants';

const width = 50;
const calculateProgress = resin => {
  let value = (((resin * 100) / MAX_RESIN) * width) / 100;
  return value > width ? width : value;
};

const ProgressBar = ({resinAmount}) => {
  const barWidth = useRef(
    new Animated.Value(calculateProgress(resinAmount)),
  ).current;
  useEffect(() => {
    Animated.timing(barWidth, {
      toValue: calculateProgress(resinAmount),
      useNativeDriver: true,
    }).start();
  }, [resinAmount]);
  return (
    <View style={{width, backgroundColor: '#aaa', height: 20}}>
      <Animated.View
        style={{
          scaleX: barWidth,
          width: 2,
          backgroundColor: '#000',
          height: 20,
        }}></Animated.View>
    </View>
  );
};

export default ProgressBar;
