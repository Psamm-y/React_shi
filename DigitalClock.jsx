import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {

  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(), 1000)
    })
  }, []);
  return (
    <>
      <div className="clock">
        <div className="clock-container">
          <span>00:00:00</span>
        </div>
        
      </div>
    </>
  )
}
export default DigitalClock;