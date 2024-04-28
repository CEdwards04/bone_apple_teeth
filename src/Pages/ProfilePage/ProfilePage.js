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


import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
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
            <Navbar></Navbar>
            <div className={ProfileStyle.profile_popup}>
                <div className={ProfileStyle.profile_picture}>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Picture" />
                </div>
                <div className={ProfileStyle.username}>Welcome User! </div>
                <div className={ProfileStyle.section_container}>
                    <div className={ProfileStyle.section}>
                        <h2>My Recipes</h2>
                        <ProfileRecipeCard></ProfileRecipeCard>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                    <div className={ProfileStyle.section}>
                        <h2>My Favorites</h2>
                        <div className={ProfileStyle.favorite_recipe_container}>
                            {favoriteRecipes.map(recipe => (
                                <div key={recipe.id} className={ProfileStyle.recipe_card}>
                                    <div className="card text-bg-secondary">
                                        <div className="card-header">
                                            <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p><strong style={{ color: 'black' }}>Ingredients:</strong> {recipe.ingredients}</p>
                                            <p><strong style={{ color: 'black' }}>Instructions:</strong> {recipe.instructions}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className={ProfileStyle.list}>
                        </ul>
                    </div>
                </div>
                <button className={ProfileStyle.logout_btn} onClick={signOut}>Sign out</button>
            </div>
        </>
    );
};

export default withAuthenticator(UserProfile);

