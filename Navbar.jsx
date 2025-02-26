
function Navbar() {
  
  return (
    <>
      <nav>
        <div className="logo">
          QuickHomes
        </div>
        <input className="search-bar" type="text"/>
        <ul className="items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Ratings</li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar;