/*********************************************
 * @author
 * @brief
 *********************************************/

import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginStyle from './CSS Modules/LoginPage.module.css';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className={LoginStyle.container}>
        {showLoginForm && (
          <form className={LoginStyle.form} id="login" onSubmit={handleSubmit}>
            <h1 className={LoginStyle.form_title}>Login</h1>
            <div className={'${LoginStyle.form_message} ${LoginStyle.form_input_error_message}'}></div>
            <div className={LoginStyle.form_input_group}>
              <input type="text" className={LoginStyle.form_input} autoFocus placeholder="Username or email" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <div className={LoginStyle.form_input_group}>
              <input type="password" className={LoginStyle.form_input} placeholder="Password" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <button className={LoginStyle.form_button} type="submit">Continue</button>
            <p className={LoginStyle.form_text}>
              <button className={LoginStyle.form_link} onClick={toggleForm}>Don't have an account? Create account</button>
            </p>
          </form>
        )}

        {!showLoginForm && (
          <form className={LoginStyle.form} id="createAccount" onSubmit={handleSubmit}>
            <h1 className={LoginStyle.form_title}>Create Account</h1>
            <div className={'${LoginStyle.form_message} ${LoginStyle.form_message-error}'}></div>
            <div className={LoginStyle.form__input_group}>
              <input type="text" className={LoginStyle.form_input} autoFocus placeholder="Username" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <div className={LoginStyle.form_input_group}>
              <input type="text" className={LoginStyle.form_input} autoFocus placeholder="Email Address" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <div className={LoginStyle.form_input_group}>
              <input type="password" className={LoginStyle.form_input} autoFocus placeholder="Password" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <div className={LoginStyle.form_input_group}>
              <input type="password" className={LoginStyle.form_input} autoFocus placeholder="Confirm Password" />
              <div className={LoginStyle.form_input_error_message}></div>
            </div>
            <button className={LoginStyle.form_button} type="submit">Continue</button>
            <p className={LoginStyle.form_text}>
              <button className={LoginStyle.form_link} onClick={toggleForm}>Already have an account? Sign in</button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

/*
const LoginStyle = {
  container: {
    width: '400px',
    maxWidth: '400px',
    margin: '1rem auto', // Center the form horizontally
    padding: '2rem',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    background: '#ffffff',
    fontFamily: 'Rubik, sans-serif',
  },
  form: {
    textAlign: 'center',
  },
  form__title: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  form__message: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  'form__message--error': {
    color: '#cc3333',
  },
  form__input_group: {
    marginBottom: '1rem',
  },
  form__input: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #3B4C5A',
    outline: 'none',
    background: '#eeeeee',
    transition: 'background 0.2s, border-color 0.2s',
  },
  form__input_error_message: {
    marginTop: '0.5rem',
    fontSize: '0.85rem',
    color: '#cc3333',
  },
  form__button: {
    width: '100%',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
    cursor: 'pointer',
    background: '#3B4C5A',
  },
  form__button_hover: {
    background: '#007f67',
  },
  form__button_active: {
    transform: 'scale(0.98)',
  },
  form__text: {
    textAlign: 'center',
  },
  form__link: {
    color: '#252c6a',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
  },
  'form__link:hover': {
    textDecoration: 'underline',
  },
  'form--hidden': {
    display: 'none',
  },
};

*/

export default LoginPage;
