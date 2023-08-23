import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import events from './utils/Events';

const useSingletonState = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const eventName = `${key}-singleton-state`;
  const [value, setValue] = useState(defaultValue);

  const handleValueEvent = (newValue: T) => {
    setValue(newValue);
  };

  useEffect(() => {
    events.on(eventName, handleValueEvent);

    return () => {
      events.off(eventName, handleValueEvent);
    };
  }, [eventName]);

  useEffect(() => {
    events.emit(eventName, value);
  }, [value]);

  return [value, setValue];
};

export default useSingletonState;
