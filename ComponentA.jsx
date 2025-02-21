import { useState,createContext } from "react";
import ComponentB from "./ComponentB";


function ComponentA(){

  const [user, SetUser] = useState("Psammy");
  return(
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentB/>
    </div>
  )

}
export default ComponentA;