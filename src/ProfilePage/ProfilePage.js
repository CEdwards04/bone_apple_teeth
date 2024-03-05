
import '../Navbar'
import React from 'react';
import Navbar from '../Navbar'; 
import './ProfilePage.css'; 
import RecipeCard from './ProfileRecipeCard';
import FavoritesCard from './ProfileFavoritesCard';

const UserProfile = () => {
    return (
        <>
          <Navbar></Navbar>
            <div className="profile-popup">
                <div className="profile-picture">
                    <img src="https://static.wikia.nocookie.net/412c91cd-50bd-4c0c-8332-6cd5a1b2ec98/scale-to-width/755" alt="Profile Picture" />
                    {/* Just an img for fun but we can use the blank profile img i uploaded for the presentation. */}
                </div>
                <div className="username">Username(Me after coding)</div>
                <div className="section-container">
                    <div className="section">
                        <h2>My Recipes</h2>
                        <RecipeCard></RecipeCard>
                        <ul className="list">
                        </ul>
                    </div>
                    <div className="section">
                        <h2>My Favorites</h2>
                        <FavoritesCard></FavoritesCard>
                        <ul className="list">
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
