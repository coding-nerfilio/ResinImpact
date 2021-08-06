import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {secondsToFullTime} from '../utils/Time';

const TimeCounter = ({seconds}) => {
  const [timeLeft, setTimeLeft] = useState(secondsToFullTime(seconds));

  useEffect(() => {
    setTimeLeft(secondsToFullTime(seconds));
  }, [seconds]);

  return (
    <View>
      <Text>
        {timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds}
      </Text>
    </View>
  );
};

export default TimeCounter;
