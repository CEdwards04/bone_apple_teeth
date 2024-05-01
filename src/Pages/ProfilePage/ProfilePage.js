/*********************************************
 * @author Caleb Edwards
 * @contribution Set up the initial profile page with everything but the login.
 * 
 * @author Jeffrey Adkins
 * @contribution Setup login to work on this page as well as the logout
 *               button only appearing here.
 * @author ChatGPT
 * @contributions Created most of the comments for this code.
 * 
 * @brief Webpage to display the user profile and call the other profile functions like the recipe card and favorites.
 *********************************************/


import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import ProfileStyle from './ProfilePage.module.css';
import ProfileRecipeCard from './ProfileRecipeCard';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../amplifyconfiguration.json';
import { listFavoriteRecipes } from '../../graphql/graphql-operations';
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from '@aws-amplify/api-graphql';
Amplify.configure(config);

const client = generateClient();

const UserProfile = ({ signOut, user }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        fetchFavoriteRecipes();
    }, []);

    // Function to fetch favorite recipes from GraphQL API
    const fetchFavoriteRecipes = async () => {
        try {
            const response = await client.graphql(graphqlOperation(listFavoriteRecipes));
            const favoriteRecipesData = response.data.listRecipes.items;
            setFavoriteRecipes(favoriteRecipesData);
        } catch (error) {
            console.error('Error fetching favorite recipes:', error);
        }
    };

    return (
        <>
            {/* Navbar component */}
            <Navbar></Navbar>
            <div className={ProfileStyle.profile_popup}>
                {/* Profile Picture */}
                <div className={ProfileStyle.profile_picture}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Picture" />
                </div>
                {/* Welcome message */}
                <div className={ProfileStyle.username}>Welcome User! </div>
                {/* Section container */}
                <div className={ProfileStyle.section_container}>
                    {/* My Recipes Section */}
                    <div className={ProfileStyle.section}>
                        <h2>My Recipes</h2>
                        <ProfileRecipeCard></ProfileRecipeCard>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                    {/* My Favorites Section */}
                    <div className={ProfileStyle.section}>
                        <h2>My Favorites</h2>
                        {/* Favorite Recipe Container */}
                        <div className={ProfileStyle.favorite_recipe_container}>
                            {/* Mapping through favorite recipes and rendering recipe cards */}
                            {favoriteRecipes.map(recipe => (
                                <div key={recipe.id} className={ProfileStyle.recipe_card}>
                                    <div className="card text-bg-secondary" style={{ width: '18rem', border: '2px solid black' }}>
                                        <div className="card-header text-center" style={{ width: '16rem', border: '2px solid black' }}>
                                            <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p><strong style={{ color: 'white' }}>Ingredients:</strong> {recipe.ingredients}</p>
                                            <p><strong style={{ color: 'white' }}>Instructions:</strong> {recipe.instructions}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                </div>
                {/* Logout button */}
                <button className={ProfileStyle.logout_btn} onClick={signOut}>Sign out</button>
            </div>
        </>
    );
};

export default withAuthenticator(UserProfile);
