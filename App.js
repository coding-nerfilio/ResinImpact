import React from 'react';
import ResinCounter from './src/components/ResinCounter';
import {SafeAreaView, Text, View} from 'react-native';
import UseButtons from './src/components/UseButtons';
import EditButton from './src/components/EditButton';
import Resin from './src/hooks/Resin';
import TimeCounter from './src/components/TimeCounter';

const App = () => {
  const {secondsLeft, resinAmount, modifyResin, decreaseResin} = Resin(120);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <ResinCounter resin={resinAmount} />
        <EditButton modifyResin={modifyResin} />
      </View>
      <Text>IMAGE PLACEHOLDER</Text>
      <TimeCounter seconds={secondsLeft} />
      <UseButtons decreaseResin={decreaseResin} />
    </View>
  );
};

export default App;
