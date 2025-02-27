import { useState } from 'react';

function Login() {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  function handlePassword(event) {
    setPassword = event.target.value;
  }

  function handleNewPassword(event) {
    setNewPassword = event.target.value;
    const message =
      password === newPassword ? 'Done!' : 'Passwords do not match';
    alert(message);
  }
  return (
    <>
      <div className="login">
        <form>
          <p>Sign Up</p> <br />
          <label htmlFor="email">Email:</label> <br />
          <input
            id="email"
            type="text"
            placeholder="ampadupsamuel1@gmail.com"
            required
          />
          <br />
          <label htmlFor="name">Name:</label> <br />
          <input id="name" type="text" placeholder="Fenuku Reynolds" /> <br />
          <label htmlFor="email">New Password:</label> <br />
          <input id="password" type="text" placeholder="•••••••••••" /> <br />
          <label htmlFor="email">Retype Password:</label> <br />
          <input
            id="password"
            type="text"
            placeholder="•••••••••••"
            onChange={handlePassword}
            required
          />
          <br />
          <div className="terms-and-conditions">
            <input type="checkbox" id="agree" onChange={handleNewPassword} />
            <p>
              &nbsp;I agree to the <a href="#">terms and conditions</a>
            </p>
          </div>
          <p>
            Have an account already? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}
export default Login;
