/*********************************************
 * Settings Component
 * 
 * @author Adel Ismail
 * @author Jeffrey Adkins
 * @contribution Created the basic structure of the settings page and implemented the dark mode toggle feature.
 * 
 * @brief Manages user settings including account details and appearance preferences like dark mode.
 *********************************************/

import Navbar from '../Navbar'; // Navbar component for consistent navigation.
import React, { useState } from 'react'; // React library import for component creation and state management.
import Settings_Style from './Settings.module.css'; // CSS module for settings page styling.
import useDarkMode from './useDarkMode'; // Custom hook for managing dark mode state and effects.
import { Amplify } from 'aws-amplify'; // AWS Amplify for backend integration.
import { withAuthenticator } from '@aws-amplify/ui-react'; // Amplify UI component for authenticating the user session.
import config from '../amplifyconfiguration.json'; // Configuration file for AWS Amplify setup.
Amplify.configure(config); // Configure Amplify with the imported settings.

/**
 * The Settings component allows users to manage their account settings and toggle appearance preferences.
 * It displays user account information and provides an option to switch between dark and light themes.
 *
 * @param {Object} signOut - Function provided by Amplify to handle user sign-out.
 * @param {Object} user - Object containing user data, such as username.
 * @returns {JSX.Element} The settings page containing sections for account details and appearance settings.
 */
const Settings = ({signOut, user}) => {
    // State hooks for managing dark mode and user data.
  const [darkMode, toggleDarkMode] = useDarkMode(); // Toggle state for dark mode.
  const [userData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  console.log(user)
  console.log(user.username)
  
    // Toggle dark mode globally and store the preference in local storage.
  const toggleGlobalDarkMode = () => {
    toggleDarkMode(); // Use the custom hook to toggle the dark mode.
    localStorage.setItem('darkMode', !darkMode); // Save the dark mode state to local storage.
    window.location.reload(); // Reload the page to apply the dark mode across the application.
  };
  console.log(userData.name)
  
  // Render the settings page layout.
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
    </>
  );
}
export default withAuthenticator(Settings);

