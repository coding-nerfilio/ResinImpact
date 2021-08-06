import React from 'react';
import {View, Text} from 'react-native';
import {MAX_RESIN} from '../constants';

const ResinCounter = ({resin}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>{resin}</Text>
      <Text>/ {MAX_RESIN}</Text>
    </View>
  );
};

export default ResinCounter;
