/*********************************************
 * @author Jeffrey Adkins
 * @contribution 
 * 
 * @author Adel Ismail
 * @contribution 
 * @brief
 *********************************************/

import Navbar from '../Navbar';
import React, { useState } from 'react';
import Settings_Style from './Settings.module.css'; 
import useDarkMode from './useDarkMode';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import config from '../amplifyconfiguration.json';


Amplify.configure(config); 


const Settings = ({signOut, user}) => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [userData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  console.log(user)
  console.log(user.username)
  const toggleGlobalDarkMode = () => {
    toggleDarkMode();
    localStorage.setItem('darkMode', !darkMode);
    window.location.reload();
  };
  console.log(userData.name)
  return (
    <>
      <Navbar />
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <section>
          <h1> Settings</h1>
        </section>
        <hr />
        <section>
          <h4>Account Details</h4>
          
          <div>
            <label>Account ID:</label>
            <span>{user.username}</span>
          </div>
        
        </section>
        <hr />
        <section>
          <h4>Appearance</h4>
          <table className={Settings_Style.content_center}>
            <tbody>
              <tr>
                <td>
                  <p>Enable Dark Mode:</p>
                </td>
                <td>
                  <label className={Settings_Style.switch}>
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={toggleGlobalDarkMode}
                    />
                    <span className={Settings_Style.slider}></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      {/* <style global="true">{`
      
        body {
          background-color: ${darkMode ? "#111" : "#fff"};
          color: ${darkMode ? "#fff" : "#111"};
          transition: background-color .7s, color .7s;
          height: 100vh; 
          margin: 0; 
          font-family: Arial, sans-serif; 
        }

        .app {
          padding: 20px;
        }
      `}</style> */}
    </>
  );
}
export default withAuthenticator(Settings);

