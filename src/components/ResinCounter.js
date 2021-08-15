import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MAX_RESIN} from '../constants';
import EditResin from './EditResin';
import ProgressBar from './ProgressBar';

const ResinCounter = ({resin, modifyResin}) => {
  const ModifyResin = EditResin(modifyResin);

  return (
    <TouchableOpacity
      onPress={ModifyResin.handleVisibility}
      style={{flexDirection: 'column', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{resin}</Text>
        <Text>/{MAX_RESIN}</Text>
      </View>
      <ProgressBar resinAmount={resin} />
      {ModifyResin.component}
    </TouchableOpacity>
  );
};

export default ResinCounter;
