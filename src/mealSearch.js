import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Pages/ProfilePage/ProfilePopup';
import './mealCard';
import Card from './mealCard';
import mealSearchStyle from './CSS Modules/mealSearch.module.css';
import MealSearchFunction from './mealSearchFunction';
import './style.css';

function MealSearch() {
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const analyzeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/analyze?language=en&includeNutrition=false&includeTaste=false';
            const analyzeOptions = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '42bae32b8cmsh6a99cae29fbd3e3p154198jsn4da3a35b7cd5',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                },
                body: JSON.stringify({
                    title: 'Spaghetti Carbonara',
                    servings: 2,
                    ingredients: [
                        '1 lb spaghetti',
                        '3.5 oz pancetta',
                        '2 Tbsps olive oil',
                        '1  egg',
                        '0.5 cup parmesan cheese'
                    ],
                    instructions: 'Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. '
                })
            };

            try {
                const response = await fetch(analyzeUrl, analyzeOptions);
                const result = await response.text();
                console.log(result); // Optionally, log the result
            } catch (error) {
                console.error(error);
            }

            const searchUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1';
            const searchOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '42bae32b8cmsh6a99cae29fbd3e3p154198jsn4da3a35b7cd5',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(searchUrl, searchOptions);
                const result = await response.json();
                setRecipeData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Meal Search</h1>
            <h2>Bone Apple Teeth</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <MealSearchFunction />
                        </td>
                        <td className={mealSearchStyle.meal_cards}>
                            {recipeData && recipeData.map((recipe, index) => (
                                <Card key={index} recipe={recipe} />
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default MealSearch;
