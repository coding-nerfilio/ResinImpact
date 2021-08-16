import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Strings from '../assets/strings';
import {fullOnTime, secondsToFullTime} from '../utils/Time';

const TimeCounter = ({seconds}) => {
  const [timeLeft, setTimeLeft] = useState(secondsToFullTime(seconds));

  useEffect(() => {
    setTimeLeft(secondsToFullTime(seconds));
  }, [seconds]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 10}}>
        {timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds}
      </Text>
      <Text>{Strings[0][0]}</Text>
      <Text>{fullOnTime(seconds)}</Text>
    </View>
  );
};

export default TimeCounter;
