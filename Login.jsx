
function Login() {
  

  return (
    <>
      <div className="login">
        <form>
          <p>Sign Up</p> <br />
          <label htmlFor="email">Email:</label> <br />
          <input id="email" type="text" placeholder="ampadupsamuel1@gmail.com"/> <br />
          <label htmlFor="name">Name:</label> <br />
          <input id="name" type="text" placeholder="Fenuku Reynolds"/> <br />
          <label htmlFor="email">New Password:</label> <br />
          <input id="password" type="text" placeholder="•••••••••••" /> <br />
                    <label htmlFor="email">Retype Password:</label> <br />
          <input id="password" type="text" placeholder="•••••••••••" /> <br />
          
          
          <div className="terms-and-conditions">
            <input type="checkbox" id="agree" />
            </div>
        </form>
      </div>
    </>
  )
}
export default Login;