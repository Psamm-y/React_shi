import { useState } from 'react';

function Login() {
  const [password, setPassword] = useState();

  function handlePassword(event) {
    setPassword = event.target.value;
  }

  return (
    <>
      <div className="login">
        <form>
          <p>Login</p> <br />
          <label htmlFor="email">Email:</label> <br />
          <input
            id="email"
            type="text"
            placeholder="ampadupsamuel1@gmail.com"
            required
          />
          <br />
          <label htmlFor="email">New Password:</label> <br />
          <input id="password" type="text" placeholder="•••••••••••" />
          <p className="redirect-to-signup">
            New to QuickHomes? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </>
  );
}
export default Login;
