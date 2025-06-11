import { useState } from 'react';

const initialValue = 10;

export function useCounter(value = initialValue) {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return;

    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
