import { useState } from 'react';

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const addCounter = () => {
    const newCounter = { ...counter };
    newCounter.counter1 = newCounter.counter1 + 1;
    setCounter(newCounter);
  };

  return (
    <>
      <h1>Counter: {counter.counter1}</h1>
      <h1>Counter: {counter.counter2}</h1>
      <h1>Counter: {counter.counter3}</h1>
      <hr />
      <button onClick={addCounter}>+1</button>
    </>
  );
};
