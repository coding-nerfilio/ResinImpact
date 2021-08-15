import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const UseButtons = ({useResin}) => {
  const Button = ({text, index}) => {
    return (
      <TouchableOpacity
        style={{padding: 16, borderWidth: 1, margin: 5}}
        onPress={() => {
          useResin(index);
        }}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <Button text={'-40'} index={1} />
      <Button text={'-30'} index={2} />
      <Button text={'-20'} index={3} />
      <Button text={'+60'} index={4} />
    </View>
  );
};

export default UseButtons;
