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
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/api";
import config from '../amplifyconfiguration.json';
import { updateUserData, deleteUserData } from '../graphql/graphql-operations';


Amplify.configure(config); 
const client = generateClient();

const Settings = ({signOut, user}) => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  console.log(user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(user.username)

  const handleSubmit = async () => {
    try {
      // Construct the updated user data
      const input = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      };
  
      // Update the user's information in the backend
      await client.graphql(graphqlOperation(updateUserData, { input }));
  
      // Optionally, provide feedback to the user that the data was successfully updated
      console.log('User data updated successfully:', input);
  
    } catch (error) {
      console.error('Error updating user data:', error);
      // Optionally, provide error handling and feedback to the user
    }
  };
  

  const toggleGlobalDarkMode = () => {
    toggleDarkMode();
    localStorage.setItem('darkMode', !darkMode);
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
            <label>Name:</label>
            <span>{user.username}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
          <div>
            <label>Phone:</label>
            <span>{user.phone}</span>
          </div>
          <button onClick={handleSubmit}>Save Changes</button>
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

