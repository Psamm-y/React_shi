import { useState, createContext, useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentD() {

  const user = useContext(UserContext);
  return(
    <div className="box">
      <h3>Bye {user}</h3>
    <h1>Component D</h1>
    </div>
  )

}
export default ComponentD;