//import './App.css';
//import './login.css';
import './Navbar';
import Navbar from './Navbar';
import './ProfilePopup';

function LoginPage() {
  return (
    <>
        <head>
            <meta name="viewport" content = "width=device-width, initial-scale=1.0"></meta>
            <meta charset="utf-8"></meta>
            <title>Login / Sign Up Form</title>
            <link rel="stylesheet" href="login.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link> //The font I chose this can be changed later just was messing around with fonts
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
        </head>
        <body>
            <Navbar></Navbar>
            <div className="container">
                <form className="form" id="login">
                    <h1 className="form__title">Login</h1>
                    <div className="form__message form__message--error"></div>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autofocus placeholder="Username or email"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <div className="form__input-group">
                        <input type="password" className="form__input" autofocus placeholder="Password"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <button className="form__button" type="submit">Continue</button>
                    <p className="form__text">
                        <a href="#" className="form__link">Forgot your password?</a>
                    </p>
                    <p className="form__text">
                        <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
                    </p>
                </form>
                <form className="form form--hidden" id="createAccount">
                    <h1 className="form__title">Create Account</h1>
                    <div className="form__message form__message--error"></div>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autofocus placeholder="Username"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autofocus placeholder="Email Adress"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autofocus placeholder="Password"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autofocus placeholder="Confirm Password"></input>
                            <div className="form__input-error-message"></div>
                        </div>
                    <button className="form__button" type="submit">Continue</button>
                    <p className="form__text">
                        <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
                    </p>
                </form>
            </div>
            <script src="script.js"></script>
        </body>
    </>
  );
}

export default LoginPage;