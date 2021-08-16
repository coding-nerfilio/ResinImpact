import React from 'react';
import ResinCounter from './src/components/ResinCounter';
import {Image, SafeAreaView, Text, View} from 'react-native';
import UseButtons from './src/components/UseButtons';
import TimeCounter from './src/components/TimeCounter';
import Resin from './src/hooks/Resin';
import AboutButton from './src/components/AboutButton';

const App = () => {
  const {secondsLeft, resinAmount, modifyResin, useResin} = Resin();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <ResinCounter resin={resinAmount} modifyResin={modifyResin} />
        <AboutButton />
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
