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
export default LoginPage;
