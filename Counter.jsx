import React, { useState } from 'react';
function Counter() {
  

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="counter-container">
        <h3>The Counter App</h3>
        <p className='count-display'>{count}</p>
        <button onClick={decrement}  className="count-container">Decrement</button>
        <button onClick={reset}  className="count-container">Reset</button>
        <button onClick={increment}  className="count-container">Increment</button>
        
    </div>
    </>
  )
}

export default Counter;