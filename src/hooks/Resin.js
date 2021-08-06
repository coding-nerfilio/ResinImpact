import React, {useState} from 'react';

const Resin = initialResin => {
  const [resinAmount, setResin] = useState(initialResin);

  const modifyResin = newValue => {
    setResin(newValue);
  };

  const decreaseResin = i => {
    switch (i) {
      case 0:
        setResin(resinAmount >= 20 ? resinAmount - 20 : 0);
        break;
      case 1:
        setResin(resinAmount >= 40 ? resinAmount - 40 : 0);
        break;
    }
  };

  return {resinAmount, modifyResin, decreaseResin};
};

export default Resin;
