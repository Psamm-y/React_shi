import React, { useState} from 'react';
function MyComponent() {
  const [name, setName] = useState();
  
  const updateName = () => {
    setName("SpongeBob");
  }

  return (
    <>
      <p>Name: {name}</p>
      <button onclick = {updateName}>SetName</button>
  </>)
}
export default MyComponent;