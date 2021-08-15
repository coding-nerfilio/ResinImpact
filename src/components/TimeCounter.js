import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {fullOnTime, secondsToFullTime} from '../utils/Time';

const TimeCounter = ({seconds}) => {
  const [timeLeft, setTimeLeft] = useState(secondsToFullTime(seconds));

  useEffect(() => {
    setTimeLeft(secondsToFullTime(seconds));
  }, [seconds]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>
        {timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds}
      </Text>
      <Text>Fully available on</Text>
      <Text>{fullOnTime(seconds)}</Text>
    </View>
  );
};

export default TimeCounter;
