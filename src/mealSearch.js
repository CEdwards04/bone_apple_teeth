/*********************************************
 * @author Jeffrey Adkins
 * @contribution Jsx skeleton, setting up mealSearchFunction.jsx, help with
 *               API configuring to display on page
 * 
 * @author
 * @contribution
 * 
 * @brief
 *********************************************/

import React, { useEffect, useState } from 'react';
import './Pages/ProfilePage/ProfilePopup';
import Card from './Card';
import mealSearchStyle from './CSS Modules/mealSearch.module.css';
import './style.css';
import axios from 'axios'; 


function MealSearch({ingredientList, MealSearchFunction}) {
    const [recipeData, setRecipeData] = useState([]);

    function print() {
        console.log(ingredientList);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
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

                const searchResponse = await axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients', {
                    params: {
                        ingredients: ingredientList,
                        number: 5,
                        ignorePantry: false,
                        ranking: 1
                    },
                    headers: {
                        'X-RapidAPI-Key': '42bae32b8cmsh6a99cae29fbd3e3p154198jsn4da3a35b7cd5',
                        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                });

                console.log("Search Response:", searchResponse.data);

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
    }, []);

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
                                <Card key={recipe.id} recipe={recipe} imageUrl = {recipe.image} ingredients = {recipe.ingredients} instructions ={recipe.instructions} />
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={print}>Data present in mealSearch .js (REMOVE WHEN DONE)</button>
        </div>
    );
}

export default MealSearch;

