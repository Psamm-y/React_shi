import React, { useState} from 'react';
function MyComponent() {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const updateName = () => {
    setName("Adutwumwaa Theresa");
  }


  const incrementAge=() => {
    setAge(age + 2)
  }

  const setInitial = () => {
    setAge(0);
  }
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      
          <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={setInitial}>Set Initial</button>
      
          <p>Name: {name}</p>
      <button onClick = {updateName}>Toggle status</button>
  </>)
}
export default MyComponent;