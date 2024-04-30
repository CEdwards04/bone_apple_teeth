/*********************************************
 * Meal Search Page Component
 * 
 * @author Jeffrey Adkins
 * @contribution Developed the JSX skeleton, set up the MealSearchFunction component,
 *                and integrated API fetching directly into this page component.
 * 
 * @author Jeremy Appiah
 * @contribution Implemented the API interaction logic for searching meals using
 *                provided ingredients.
 * 
 * @brief This file implements the Meal Search page, displaying a search form
 *        and resulting meal cards based on user-selected ingredients. It handles
 *        fetching data from an external recipe API.
 *********************************************/

import React, { useEffect, useState } from 'react'; // React library for component and state management.
import './Pages/ProfilePage/ProfilePopup'; // Popup component for user profile interactions (assumed usage).
import Card from './Card'; // Card component for displaying individual recipes.
import mealSearchStyle from './CSS Modules/mealSearch.module.css'; // CSS module for meal search page styling.
import './style.css'; // General styling.
import axios from 'axios'; // HTTP client for making API requests.


/**
 * Component that renders the meal search functionality, including a form for ingredient input
 * and a display area for meal cards. It fetches recipe data from an API based on the ingredients
 * provided by the user.
 *
 * @param {Array} ingredientList - List of ingredients input by the user.
 * @param {Function} MealSearchFunction - The form component for user input.
 * @returns {JSX.Element} The component structure for the meal search page.
 */
function MealSearch({ingredientList, MealSearchFunction}) {
    const [recipeData, setRecipeData] = useState([]); // State to hold the recipe data fetched from the API.
    
    // Logs the current list of ingredients to the console
    function print() {
        console.log(ingredientList);
    }
    
    // Fetches recipe data from an API whenever the ingredientList changes.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Posting to an API to analyze a fixed recipe (demonstration purposes).
                const analyzeResponse = await axios.post('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyze', {
                    title: 'Spaghetti Carbonara',
                    servings: 2,
                    ingredients: [
                        '1 lb spaghetti',
                        '3.5 oz pancetta',
                        '2 Tbsps olive oil',
                        '1  egg',
                        '0.5 cup parmesan cheese'
                    ],
                    instructions: 'Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta.'
                }, {
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': '42bae32b8cmsh6a99cae29fbd3e3p154198jsn4da3a35b7cd5',
                        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                });

                console.log("Analyze Response:", analyzeResponse.data);
                
                // Fetching recipes based on ingredients provided by the user.
                const searchResponse = await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients', {
                    params: {
                        ingredients: " " + ingredientList,
                        number: 50,
                        ignorePantry: false,
                        ranking: 1
                    },
                    headers: {
                        'X-RapidAPI-Key': '42bae32b8cmsh6a99cae29fbd3e3p154198jsn4da3a35b7cd5',
                        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                });

                console.log("Search Response:", searchResponse.data);
                
                // Handling the response to set the recipe data or log an error.
                if (Array.isArray(searchResponse.data)) {
                    setRecipeData(searchResponse.data);
                } else {
                    console.error("API response is not an array:", searchResponse.data);
                    setRecipeData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setRecipeData([]);
            }
        };

        fetchData();
    }, [ingredientList]); // Dependency array to re-run the effect when ingredientList changes.
    
    // Logging recipe data to console for debugging.
    console.log("recipeData:", recipeData);

    

    return (
        <div>
            <h1>Welcome to the Bone Apple Teeth Meal Search</h1>
            <h2>Take a scroll! Find the recipe that best fits you and your stomach!</h2>
            <table>
                <tbody>
                    <tr>
                        <td className={mealSearchStyle.form}>
                            {MealSearchFunction}
                        </td>
                        <td className={mealSearchStyle.meal_cards}>
                            {recipeData && recipeData.map((recipe, index) => (
                                <Card
                                    key={recipe.id}
                                    recipe={recipe}
                                    imageUrl={recipe.image}
                                    ingredients={recipe.usedIngredients.map(ingredient => ingredient.name)}
                                />
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MealSearch;

