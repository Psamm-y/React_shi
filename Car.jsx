import { useState } from "react";

function Car() {
  const [car, setCar] = useState({year: 2024, make:"Ford", model:"Mustang"});  

  function handleYearChange(event) {
    setCar(c => ({...car, year : event.target, value}));
  }

  function handleMakeChange(event) {
    setCar(c=>({...car, make:event.target.value}))
  }

  function handleModelChange(event) {
    setCar(c=> ({...car,model:event.target}))
  }
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