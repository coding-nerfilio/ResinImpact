import React from 'react';
import ResinCounter from './src/components/ResinCounter';
import {Image, SafeAreaView, Text, View} from 'react-native';
import UseButtons from './src/components/UseButtons';
import TimeCounter from './src/components/TimeCounter';
import Resin from './src/hooks/Resin';

const App = () => {
  const {secondsLeft, resinAmount, modifyResin, useResin} = Resin();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <ResinCounter resin={resinAmount} modifyResin={modifyResin} />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./src/assets/Resin.png')} />
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
