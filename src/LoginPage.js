import React, { useState, useEffect } from 'react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

 function LoginPage(){
  return (
    <div>
      <style>
        {`
        body {
          --color-primary: #009579;
          --color-primary-dark: #007f67;
          --color-secondary: #252c6a;
          --color-error: #cc3333;
          --color-success: #4bb544;
          --border-radius: 4px;

          margin: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          background: var(--color-primary);
          background-size: cover;
        }

        .container {
          width: 400px;
          max-width: 400px;
          margin: 1rem;
          padding: 2rem;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
          border-radius: var(--border-radius);
          background: #ffffff;
        }

        .container,
        .form__input,
        .form__button{
          font-family: "Rubik", sans-serif;
        }

        .form--hidden {
          display: none;
        }

        .form > *:first-child {
          margin-top: 0;
        }

        .form__title {
          margin-bottom: 2rem;
          text-align: center;
        }

        .form > *:last-child {
          margin-bottom: 0;
        }

        .form__message{
          text-align:center;
          margin-bottom: 1rem;
        }

        .form__message--success{
          color: var(--color-success);
        }

        .form__message--error{
          color: var(--color-error);
        }

        .form__input-group {
          margin-bottom: 1rem;
        }

        .form__input {
          display: block;
          width: 100%;
          padding: 0.75rem;
          box-sizing: border-box;
          border-radius: var(--border-radius);
          border: 1px solid #dddddd;
          outline: none;
          background: #eeeeee;
          transition: background 0.2s, border-color 0.2s;
        }

        .form__input:focus {
          border-color: var(--color-primary);
          background: #ffff;
        }

        .form__input--error {
          color: var(--color-error);
          border-color: var(--color-error);
        }

        .form__input-error-message {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-error);
        }

        .form__button {
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          color: #ffff;
          border: none;
          border-radius: var(--border-radius);
          outline: none;
          cursor: pointer;
          background: var(--color-primary);
        }

        .form__button:hover {
          background: var(--color-primary-dark);
        }

        .form__button:active {
          transform: scale(0.98);
        }

        .form__text {
          text-align: center;
        }

        .form__link {
          color: var(--color-secondary);
          text-decoration: none;
          cursor: pointer;
        }

        .form__link:hover {
          text-decoration: underline;
        }
        `}
      </style>
      <div className="container">
        <form className="form" id="login" onSubmit={handleSubmit}>
          <h1 className="form__title">Login</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input type="text" className="form__input" autoFocus placeholder="Username or email" />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input type="password" className="form__input" placeholder="Password" />
            <div className="form__input-error-message"></div>
          </div>
          <button className="form__button" type="submit">Continue</button>
          <p className="form__text">
            <a href="#" className="form__link">Forgot your password?</a>
          </p>
          <p className="form__text">
            <a href="#" className="form__link" id="linkCreateAccount">Don't have an account? Create account</a>
          </p>
        </form>

        <form className="form form--hidden" id="createAccount" onSubmit={handleSubmit}>
          <h1 className="form__title">Create Account</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input type="text" className="form__input" autoFocus placeholder="Username" />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input type="text" className="form__input" autoFocus placeholder="Email Address" />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input type="password" className="form__input" autoFocus placeholder="Password" />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input type="password" className="form__input" autoFocus placeholder="Confirm Password" />
            <div className="form__input-error-message"></div>
          </div>
          <button className="form__button" type="submit">Continue</button>
          <p className="form__text">
            <a href="#" className="form__link" id="linkLogin">Already have an account? Sign in</a>
          </p>
        </form>
      </div>
      <script src="login.js"></script>
    </div>
  );
};
}

export default LoginPage;
