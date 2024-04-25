/*********************************************
 * @author Caleb Edwards
 * @contribution Set up the initial profile page with everything but the login.
 * 
 * @author Jeffrey Adkins
 * @contribution Setup login to work on this page as well as the logout
 *               button only appearing here.
 * 
 * @brief
 *********************************************/

import '../../Navbar';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Navbar from '../../Navbar';
import ProfileStyle from './ProfilePage.module.css';
import ProfileRecipeCard from './ProfileRecipeCard';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../amplifyconfiguration.json';
import { listFavoriteRecipes } from '../../graphql/graphql-operations'; // Import listFavoriteRecipes operation
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from '@aws-amplify/api-graphql'; // Import graphqlOperation
Amplify.configure(config); 

const client = generateClient();

const UserProfile = ({ signOut, user }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]); // State to store favorite recipes

    useEffect(() => {
        // Fetch favorite recipes on component mount
        fetchFavoriteRecipes();
    }, []);

    const fetchFavoriteRecipes = async () => {
        try {
            const response = await client.graphql(graphqlOperation(listFavoriteRecipes)); // Fetch favorite recipes
            const favoriteRecipesData = response.data.listRecipes.items;
            setFavoriteRecipes(favoriteRecipesData); // Set favorite recipes state
        } catch (error) {
            console.error('Error fetching favorite recipes:', error);
        }
    };

    return (
        <>
          <Navbar></Navbar>
            <div className={ProfileStyle.profile_popup}>
                <div className={ProfileStyle.profile_picture}>
                    <img src="https://static.wikia.nocookie.net/412c91cd-50bd-4c0c-8332-6cd5a1b2ec98/scale-to-width/755" alt="Profile Picture" />
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
                        {/* Render favorite recipe cards */}
                        {favoriteRecipes.map(recipe => (
                            <div key={recipe.id} className="col">
                                <div className="card text-bg-secondary" style={{ width: '18rem' }}>
                                    <div className="card-header">
                                        <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Ingredients: {recipe.ingredients}</p>
                                        <p>Instructions: {recipe.instructions}</p>
                                        {/* No need for delete, update, and favorite buttons as this is just display */}
                                    </div>
                                </div>
                            </div>
                        ))}
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
