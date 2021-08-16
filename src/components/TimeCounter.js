import React, {useEffect, useState} from 'react';
import {Animated, Text} from 'react-native';
import Strings from '../assets/strings';
import AnimatedFade from '../hooks/AnimatedFade';
import {fullOnTime, secondsToFullTime} from '../utils/Time';

const TimeCounter = ({seconds}) => {
  const [timeLeft, setTimeLeft] = useState(secondsToFullTime(seconds));

  useEffect(() => {
    if (seconds >= 0) {
      setTimeLeft(secondsToFullTime(seconds));
    }
  }, [seconds]);

  return (
    <Animated.View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 10}}>
        {timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds}
      </Text>
      <AvailableOn seconds={seconds} />
    </Animated.View>
  );
};

const AvailableOn = ({seconds}) => {
  const opacity = AnimatedFade(seconds);
  return (
    <Animated.View style={{alignItems: 'center', opacity}}>
      <Text>{Strings[0][0]}</Text>
      <Text>{fullOnTime(seconds)}</Text>
    </Animated.View>
  );
};

export default TimeCounter;
