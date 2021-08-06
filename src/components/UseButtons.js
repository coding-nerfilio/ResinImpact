import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const UseButtons = ({decreaseResin}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          decreaseResin(0);
        }}>
        <Text>-20</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          decreaseResin(1);
        }}>
        <Text>-40</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseButtons;
