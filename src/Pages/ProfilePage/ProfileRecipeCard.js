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

  // Function to fetch recipes from GraphQL API
  async function fetchRecipes() {
    try {
      const recipeData = await client.graphql(graphqlOperation(listRecipes));
      setRecipes(recipeData.data.listRecipes.items);
    } catch (error) {
      console.error('Error fetching recipes:', error);
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
        console.log('Create recipe response:', response);
        // Update state with new recipe data
        setRecipes(prevRecipes => [...prevRecipes, response.data.createRecipe]);
      } catch (error) {
        console.error('Error creating recipe:', error);
      }
    }
  }

  // Function to handle recipe deletion
  async function handleDeleteRecipe(id) {
    try {
      await client.graphql(graphqlOperation(deleteRecipe, { id }));
      // Refetch recipes after deletion
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  }

  // Function to handle recipe update
  async function handleUpdateRecipe(id) {
    const newName = prompt('Enter new recipe name:');
    if (newName) {
      try {
        await client.graphql(graphqlOperation(updateRecipe, { id, name: newName }));
        // Refetch recipes after update
        fetchRecipes();
      } catch (error) {
        console.error('Error updating recipe:', error);
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
                <h5 className="card-title">{recipe.name}</h5>
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
    </div>
  );
}

export default FavoritesCard;