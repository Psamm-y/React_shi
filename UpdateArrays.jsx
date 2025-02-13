import { useState } from "react";

function UpdateArrays() {
  const [foods, setFoods] = useState(["Jollof","Fried Rice","Bread"]);

  
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods(()=> [...foods,newFood])
  }

  function handleRemoveFood(index) {
    // setFoods(foods.filter((_, i) => i !== index));
    const resultFoodIndex = parseInt((document.getElementById("foodRemove").value));
        document.getElementById("foodRemove").value = "";

    if (resultFoodIndex >= 0 && resultFoodIndex < foods.length) {
          setFoods((f) => f.filter((_, i) => i !== resultFoodIndex));
    } else {
      alert("Invalid index")
    }
  }
  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) =>
          <li key={index}  >
            {food}
          </li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Please enter food name" />
      <button onClick={handleAddFood}>Add food</button> <br />
      <input id="foodRemove" type="number" placeholder="Enter index of food" />
      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  )
}

export default UpdateArrays;