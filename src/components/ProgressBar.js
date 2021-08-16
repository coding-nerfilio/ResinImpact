import React from 'react';
import {View, Animated} from 'react-native';
import AnimatedProgress from '../hooks/AnimatedProgress';

const width = 50;

const ProgressBar = ({resinAmount}) => {
  const barWidth = AnimatedProgress(resinAmount);
  return (
    <View
      style={{
        width: 50,
        backgroundColor: '#aaa',
        height: 20,
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}>
      <Animated.View
        style={{
          scaleX: barWidth,
          marginLeft: -width,
          width: width * 2,
          backgroundColor: '#000',
          height: 20,
        }}
      />
    </View>
  );
};

export default ProgressBar;
