import React from 'react';
import {View, Text} from 'react-native';

const ResinCounter = ({resin}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>{resin}</Text>
      <Text>/ 160</Text>
    </View>
  );
};

export default ResinCounter;
