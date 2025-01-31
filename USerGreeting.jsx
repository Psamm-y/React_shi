import Student from "./Student";
import propType from 'prop-types';
function UserGreeting(props) {
  // if(props.isLoggedIn){
  //   return <h1>Welcome back, {props.userName}</h1>;
  // }
  //   return <h2>Please log in to continue</h2>

  //return(props.isLoggedIn ? "Welcome Back" : "Please log in to continue");

  const welcomeMessage = <h2 className="welcomeMsg">
                          Welcome {props.userName}
                          </h2>;
  const loginPrompt = <h2 className="loginPrompt">
                      Please log in to continue
                      </h2>;
  
  return (props.isLoggedIn ? welcomeMessage : loginPrompt);
  }

UserGreeting.propTypes = {
  isLoggedIn: propType.bool,
  userName: propType.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest"
}

export default UserGreeting;