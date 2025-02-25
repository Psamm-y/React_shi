import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";
import { useContext } from "react";
function ComponentC() {
  const username = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>Hi Again {username}</h2>
      <ComponentD />
    </div>
  )

}
export default ComponentC;