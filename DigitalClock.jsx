import { useState } from "react";

function DigitalClock() {

  const [time, setTime]= useState(new Date())
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