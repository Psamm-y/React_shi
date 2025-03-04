import { useState } from 'react';

function SignUp() {
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
          <input id="name" type="text" placeholder="Fenuku Reynolds" required />
          <br />
          <label htmlFor="email">New Password:</label> <br />
          <input id="password" type="text" placeholder="•••••••••••" /> <br />
          <label htmlFor="email">Retype Password:</label> <br />
          <input
            id="newpassword"
            type="text"
            placeholder="•••••••••••"
            required
          />
          <br />
          <div className="terms-and-conditions">
            <input type="checkbox" id="agree" />
            <p>
              &nbsp;I agree to the <a href="Login.jsx">terms and conditions</a>
            </p>
          </div>
          <p>
            Already have an account? <a href="./Login.jsx">Login</a>
          </p>
        </form>
      </div>
    </>
  );
}
export default SignUp;
