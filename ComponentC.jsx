import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";
function ComponentC(){

  return(
    <div className="box">
    <h1>Component C</h1>
      <h2>Hi Again {user}</h2>
    <ComponentD/>
    </div>
  )

}
export default ComponentC;