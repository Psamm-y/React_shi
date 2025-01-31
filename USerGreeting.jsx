
function UserGreeting(props) {
  // if(props.isLoggedIn){
  //   return <h1>Welcome back, {props.userName}</h1>;
  // }
  //   return <h2>Please log in to continue</h2>

  return(props.isLoggedIn ? "Welcome Back" : "Please log in to continue");
  }


export default UserGreeting;