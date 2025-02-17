import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() =>
  {
    document.title=`Count: ${count}`
},[count])
  function addCount() {
    setCount(c => c + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  )
}
export default UseEffectHook;