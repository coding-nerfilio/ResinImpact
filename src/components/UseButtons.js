import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const UseButtons = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Text>-20</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>-40</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseButtons;
