import { useState } from "react";

function UpdateArrays() {
  const [foods, setFoods] = useState(["Jollof","Fried Rice","Bread"]);

  
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(()=> [...foods,newFood])
  }

  function handleRemoveFood() {
    setFoods.filter(_,i)
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
      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  )
}

export default UpdateArrays;