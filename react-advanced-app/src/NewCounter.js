import React, { useState } from 'react';

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [perviousClicks, setPerviousClicks] = useState(0);
  const inputChange = (event) => {
    setPerviousClicks(Number(event.target.value));
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <label pervious clciksL>
        <input type="text" value={perviousClicks} onChange={inputChange} />
      </label>
      <p>You clicked {perviousClicks + count} times</p>
      <button onClick={increase}>Click me </button>
    </div>
  );
}
