import React from 'react';
import ResinCounter from './src/components/ResinCounter';
import {SafeAreaView, Text, View} from 'react-native';
import UseButtons from './src/components/UseButtons';
import EditButton from './src/components/EditButton';
import TimeCounter from './src/components/TimeCounter';
import Resin from './src/hooks/Resin';

const App = () => {
  const {secondsLeft, resinAmount, modifyResin, useResin} = Resin();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <ResinCounter resin={resinAmount} />
        <EditButton modifyResin={modifyResin} />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>IMAGE PLACEHOLDER</Text>
        <TimeCounter seconds={secondsLeft} />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <UseButtons useResin={useResin} />
      </View>
    </SafeAreaView>
  );
};

export default App;

/*
  <View style={{flexDirection: 'row'}}>
        <ResinCounter resin={resinAmount} />
        <EditButton modifyResin={modifyResin} />
      </View>
      <Text>IMAGE PLACEHOLDER</Text>
      <TimeCounter seconds={secondsLeft} />
      <UseButtons useResin={useResin} />
      */
