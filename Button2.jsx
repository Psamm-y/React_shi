function Button() {
  // let count = 0;
  // const handleCLick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`)
  //   } else {
  //     console.log(`${name} stop clicking me!`)
  //   }
  // };

  // const handleCLick = (e) => console.log(e);
  
  const handleClick = (e) => e.target.textContent = "Clicked ✅";
  return (
    // <button onClick={(e) => handleClick(e)}>Click me 😁</button>
    <button onDOubleClick={(e) => handleClick(e)}>Click me 😁</button>

  )
}
export default Button;