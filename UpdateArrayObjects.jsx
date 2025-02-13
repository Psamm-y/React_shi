import { useState } from "react";

function UpdateArrayObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
                    year: carYear,
                    make: carMake,
                    model: carModel
    }
    setCars(c=>[...c,newCar])
    }
  function handleRemoveCar() {
    
  }
  function handleYearChange(event) {
    setCarYear(event.target.value)
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value)
  }
  function handleModelChange(event) {
    setCarModel(event.target.value)
  }





  return (
    <div>
      <h3>List of Car Objects</h3>
      <ul>
        {cars.map((car, index)=> 
        <li key={index}>{car.year}</li>)
        }
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}/> <br/>
      <input type="text" value={carMake}onChange={handleMakeChange} placeholder="Enter car name"/> <br/>
      <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/> <br/>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}
export default UpdateArrayObjects;