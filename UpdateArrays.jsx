import { useState } from "react";

function UpdateArrays() {
  const [foods, setFoods] = useState(["Jollof","Fried Rice","Bread"]);

  
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
  }
  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) =>
          <li key={index} >
            {food}
          </li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Please Enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  )
}

export default UpdateArrays;