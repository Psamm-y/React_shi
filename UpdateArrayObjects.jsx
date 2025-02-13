import { useState } from "react";

function UpdateArrayObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    
  }
  function handleRemoveCar() {
    
  }
  function handleYearChange() {
    
  }
  function handleMakeChange() {
    
  }
  function handleModelChange() {
    
  }





  return (
    <div>
      <h3>List of Car Objects</h3>
      <ul>

      </ul>
      <input type="number" />
      <input type="text" />
      <input type="text" />
    </div>
  )
}
export default UpdateArrayObjects;