import React, {useState} from 'react';

const Resin = ({initialResin}) => {
  const [resinAmount, setResin] = useState(initialResin);
  const modifyResin = newValue => {
    setResin(newValue);
  };
  return {resinAmount, modifyResin};
};

export default Resin;
