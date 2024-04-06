import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { listRecipes, createRecipe, deleteRecipe, updateRecipe } from '../../graphql/graphql-operations';
import awsConfig from '../../aws-exports'; // Import your AWS configuration file
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/api";
Amplify.configure(awsConfig);
const client = generateClient();

function FavoritesCard() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch recipes from GraphQL API
  async function fetchRecipes() {
    try {
      const recipeData = await client.graphql(graphqlOperation(listRecipes));
      setRecipes(recipeData.data.listRecipes.items);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Error fetching recipes. Please try again.');
    }
  }

  // Fetch recipes from GraphQL API on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Function to handle recipe creation
  async function handleCreateRecipe() {
    const recipeName = prompt('Enter recipe name:');
    if (recipeName) {
      try {
        const response = await client.graphql(graphqlOperation(createRecipe, { name: recipeName }));
        if (response.data.createRecipe) {
          setRecipes(prevRecipes => [...prevRecipes, response.data.createRecipe]);
        } else {
          setError('Error creating recipe. Please try again.');
        }
      } catch (error) {
        console.error('Error creating recipe:', error);
        setError('Error creating recipe. Please try again.');
      }
    }
  }

  // Function to handle recipe deletion
  async function handleDeleteRecipe(id) {
    try {
      await client.graphql(graphqlOperation(deleteRecipe, { id }));
      // Update state by removing the deleted recipe
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
      setError('Error deleting recipe. Please try again.');
    }
  }

  // Function to handle recipe update
  async function handleUpdateRecipe(id) {
    const newName = prompt('Enter new recipe name:');
    if (newName) {
      try {
        await client.graphql(graphqlOperation(updateRecipe, { id, name: newName }));
        // Update state with the updated recipe name
        setRecipes(prevRecipes =>
          prevRecipes.map(recipe =>
            recipe.id === id ? { ...recipe, name: newName } : recipe
          )
        );
      } catch (error) {
        console.error('Error updating recipe:', error);
        setError('Error updating recipe. Please try again.');
      }
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="row row-cols-4 row-cols-md-1 g-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col">
            <div className="card text-bg-secondary" style={{ width: '18rem' }}>
              <div className="card-header">
                <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
              </div>
              <div className="card-body">
                <button className="btn btn-danger" onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => handleUpdateRecipe(recipe.id)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-success" onClick={handleCreateRecipe}>Add Recipe</button>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default FavoritesCard;
