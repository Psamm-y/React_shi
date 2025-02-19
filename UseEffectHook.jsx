import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");


  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

 

  useEffect(() =>
  {
    document.title=`Count: ${count} ${color}` 
},[count, color])
  function addCount() {
    setCount(c => c + 1);
  }
  function changeColor() {
    setColor(c=>c==="green"?"red":"green")
  }

  useEffect(() =>
  {
    window.addEventListener("resize", handleResize);
  console.log("Event listener added ")
  },[])
  
  
  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  return (
    <>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={changeColor}>Change Color</button>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  )
}
export default UseEffectHook;