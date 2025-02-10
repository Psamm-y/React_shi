import { useState } from "react";

function Car() {
  const [car, setCar] = useState({year: 2024, make:"Ford", model:"Mustang"});  



  return (
    <>
      <div>
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </div>
    </>
  )
}
export default Car;