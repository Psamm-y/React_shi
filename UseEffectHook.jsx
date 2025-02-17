import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);


  function addCount() {
    
  }
  return (
    <>
      <p>Count: {count}</p>
    </>
  )
}
export default UseEffectHook;