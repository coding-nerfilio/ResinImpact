import React from 'react';
import {View} from 'react-native';
import {MAX_RESIN} from '../constants';

const width = 50;
const calculateProgress = resin => {
  let value = (((resin * 100) / MAX_RESIN) * width) / 100;
  return value > width ? width : value;
};

const ProgressBar = ({resinAmount}) => {
  return (
    <View style={{width, backgroundColor: '#aaa', height: 20}}>
      <View
        style={{
          width: calculateProgress(resinAmount),

          backgroundColor: '#000',
          height: 20,
        }}></View>
    </View>
  );
};

export default ProgressBar;
