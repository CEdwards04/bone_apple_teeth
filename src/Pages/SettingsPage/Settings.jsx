/*********************************************
 * @author Jeffrey Adkins
 * @contribution 
 * 
 * @brief
 *********************************************/

import '../../Navbar';
import Navbar from '../../Navbar';
import React from 'react';
import Settings_Style from '../SettingsPage/SettingsPage.module.css';

function UserSettings() {
    return (
        <>
        <Navbar />
          <section>
            <h3>User Settings</h3>
          </section>
          <hr />
          <section>
            <h4>Appearance</h4>
            <p>Enable Dark Mode: 
                <label>
                    <input type="checkbox"></input>
                    <span></span>
                </label>
            </p>
          </section>
        </>
    );
};

export default UserSettings;