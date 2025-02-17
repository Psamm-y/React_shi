import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() =>
  {
    document.title=`Count: ${count}`
},[count])
  function addCount() {
    setCount(c => c + 1);
  }
  return (
    <>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  )
}
export default UseEffectHook;