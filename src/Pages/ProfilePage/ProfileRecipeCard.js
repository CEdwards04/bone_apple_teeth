/*********************************************
 * @author Caleb Edwards
 * @contributions
 * 
 * @author Kaleb Lawrence
 * @contributions Made the create recipe a form instead of a pop up menu, Graphql stayed the same for the most part
 * @brief
 *********************************************/
//Does not show ingredients or instructions in the card, it didn't prior to the form either and I didn't really try to fix it for now but I will at some point.

import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { listRecipes, createRecipe, deleteRecipe, updateRecipe } from '../../graphql/graphql-operations';
import awsConfig from '../../aws-exports';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/api";
Amplify.configure(awsConfig);
const client = generateClient();

function FavoritesCard() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');
  const [showForm, setShowForm] = useState(false);

  async function fetchRecipes() {
    try {
      const recipeData = await client.graphql(graphqlOperation(listRecipes));
      setRecipes(recipeData.data.listRecipes.items);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Error fetching recipes. Please try again.');
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (newRecipeName && newRecipeIngredients && newRecipeInstructions) {
      try {
        const response = await client.graphql(graphqlOperation(createRecipe, { 
          name: newRecipeName,
          ingredients: newRecipeIngredients,
          instructions: newRecipeInstructions,
        }));
        if (response.data.createRecipe) {
          setRecipes(prevRecipes => [...prevRecipes, response.data.createRecipe]);
          setNewRecipeName('');
          setNewRecipeIngredients('');
          setNewRecipeInstructions('');
          setShowForm(false);
        } else {
          setError('Error creating recipe. Please try again.');
        }
      } catch (error) {
        console.error('Error creating recipe:', error);
        setError('Error creating recipe. Please try again.');
      }
    }
  }

  async function handleDeleteRecipe(id) {
    try {
      await client.graphql(graphqlOperation(deleteRecipe, { id }));
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
      setError('Error deleting recipe. Please try again.');
    }
  }

  async function handleUpdateRecipe(id) {
    const recipeToUpdate = recipes.find(recipe => recipe.id === id);
    if (recipeToUpdate) {
      setNewRecipeName(recipeToUpdate.name);
      setNewRecipeIngredients(recipeToUpdate.ingredients);
      setNewRecipeInstructions(recipeToUpdate.instructions);
      setShowForm(true);
    }
  }

  return (
    <div>
      {/* Button to toggle form visibility */}
      {!showForm && (
        <div className="d-flex"> 
          <button className="btn btn-success mb-3 me-2" onClick={() => setShowForm(true)}> 
            Add Recipe
          </button>
        </div>
      )}
      {/* Form for creating a recipe */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="recipeName" className="form-label">Recipe Name</label>
            <input type="text" className="form-control" id="recipeName" value={newRecipeName} onChange={(e) => setNewRecipeName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipeIngredients" className="form-label">Ingredients</label>
            <input type="text" className="form-control" id="recipeIngredients" value={newRecipeIngredients} onChange={(e) => setNewRecipeIngredients(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipeInstructions" className="form-label">Instructions</label>
            <textarea className="form-control" id="recipeInstructions" rows="3" value={newRecipeInstructions} onChange={(e) => setNewRecipeInstructions(e.target.value)}></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Add Recipe</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
      <div className="d-flex flex-wrap">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col">
            <div className="card text-bg-secondary" style={{ width: '18rem' }}>
              <div className="card-header">
                <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
              </div>
              <div className="card-body">
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => handleUpdateRecipe(recipe.id)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default FavoritesCard;
