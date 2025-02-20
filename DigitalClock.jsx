import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {

  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(), 1000)
    })

     return () =>
  {
    clearInterval(intervalId)
  } 
  },[]);

  function formatTime() {
    const hours=time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  return (
    <>
      <div className="clock">
        <div className="clock-container">
          <span>{formatTime()}</span>
        </div>
        
      </div>
    </>
  )
}
export default DigitalClock;