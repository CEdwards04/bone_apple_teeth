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
            <table className={Settings_Style.content_center}>
                <tr>
                    <td>
                        <p>Enable Dark Mode:</p>
                    </td>
                    <td>
                        <label className={Settings_Style.switch}>
                            <input type="checkbox"></input>
                            <span className={Settings_Style.slider}></span>
                    </label>
                    </td>
                </tr>
            </table>
            
          </section>
        </>
    );
};

export default UserSettings;