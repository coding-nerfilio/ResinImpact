import React from 'react';
import {View, Text} from 'react-native';
import {MAX_RESIN} from '../constants';
import ProgressBar from './ProgressBar';

const ResinCounter = ({resin}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{resin}</Text>
        <Text>/{MAX_RESIN}</Text>
      </View>
      <ProgressBar resinAmount={resin} />
    </View>
  );
};

export default ResinCounter;
