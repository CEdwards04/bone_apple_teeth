//import './App.css';
//import './login.css';
import "./Navbar";
import Navbar from "./Navbar";
import "./ProfilePage/ProfilePopup";
import './LoginPage.css';
function LoginPage() {
  return (
    <>

      <body>
        <Navbar></Navbar>
        <div class="container">
          <h1>Login</h1>
          <form action="#">
            <div class="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username or email"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              ></input>
            </div>
            <div class="form-group">
              <button type="submit">Continue</button>
            </div>
            <span>
              <a href="#"> Forgot your password?</a>
            </span>
            <p>
              Don't have an account? <a href="#">Create account</a>
            </p>
          </form>
        </div>
        <script src="script.js"></script>
      </body>
    </>
  );
}

export default LoginPage;