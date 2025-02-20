import { useState } from "react";
import ComponentB from "./ComponentB";
function ComponentA(){

  const [user, SetUser] = useState("Psammy");
  return(
    <div className="box">
      <h1>Component A</h1>
      <ComponentB/>
    </div>
  )

}
export default ComponentA;