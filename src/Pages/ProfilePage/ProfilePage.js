/*********************************************
 * @author Caleb Edwards
 * @contribution Set up the inital profile page with everything but the login.
 * 
 * @author Jeffrey Adkins
 * @contribution Setup login to work on this page as well as the logout
 *               button only appearing here.
 * 
 * @brief
 *********************************************/

import '../../Navbar';
import React from 'react';
import Navbar from '../../Navbar';
import ProfileStyle from './ProfilePage.module.css';
import ProfileRecipeCard from './ProfileRecipeCard';
import ProfileFavoritesCard from './ProfileFavoritesCard';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config); 


const UserProfile = ({ signOut, user }) => {
    return (
        <>
          <Navbar></Navbar>
            <div className={ProfileStyle.profile_popup}>
                <div className={ProfileStyle.profile_picture}>
                    <img src="https://static.wikia.nocookie.net/412c91cd-50bd-4c0c-8332-6cd5a1b2ec98/scale-to-width/755" alt="Profile Picture" />
                    {/* Just an img for fun but we can use the blank profile img i uploaded for the presentation. */}
                </div>
                <div className={ProfileStyle.username}>Welcome {user.username} (Me after coding)!</div>
                <div className={ProfileStyle.section_container}>
                    <div className={ProfileStyle.section}>
                        <h2>My Recipes</h2>
                        <ProfileRecipeCard></ProfileRecipeCard>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                    <div className={ProfileStyle.section}>
                        <h2>My Favorites</h2>
                        <ProfileFavoritesCard></ProfileFavoritesCard>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                </div>
                <a href="/profile/settings"><button>Settings</button></a>
                <button className={ProfileStyle.logout_btn} onClick={signOut}>Sign out</button>
            </div>
        </>
    );
};

export default withAuthenticator(UserProfile);
