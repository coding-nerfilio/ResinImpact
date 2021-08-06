import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const UseButtons = ({useResin}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          useResin(0);
        }}>
        <Text>-60</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          useResin(1);
        }}>
        <Text>-40</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          useResin(2);
        }}>
        <Text>-30</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          useResin(3);
        }}>
        <Text>-20</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          useResin(4);
        }}>
        <Text>+60</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseButtons;
