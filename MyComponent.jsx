import React, { useState} from 'react';
function MyComponent(props) {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName(props.name);
  }


  const incrementAge=() => {
    setAge(age + 2)
  }

  const setInitial = () => {
    setAge(0);
  }

  const setEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  }
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      
          <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={setInitial}>Set Initial</button>
      
          <p>Employement status: {isEmployed?"Employed" : "Looking for a job"}</p>
      <button onClick = {setEmploymentStatus}>Toggle status</button>
  </>)
}
export default MyComponent;