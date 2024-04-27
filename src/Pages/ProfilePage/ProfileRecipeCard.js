import React, { useState, useEffect, useRef } from 'react';
import { Amplify } from 'aws-amplify';
import { listRecipes, createRecipe, deleteRecipe, updateRecipe, createReview, listReviews } from '../../graphql/graphql-operations';
import awsConfig from '../../aws-exports';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/api";
const client = generateClient();
Amplify.configure(awsConfig);

function ProfileRecipeCard() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [reviewingRecipeId, setReviewingRecipeId] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  const reviewRef = useRef(null);

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

  async function handleToggleFavorite(id, isFavorite) {
    try {
      const response = await client.graphql(graphqlOperation(updateRecipe, {
        id,
        name: recipes.find(recipe => recipe.id === id).name,
        ingredients: recipes.find(recipe => recipe.id === id).ingredients,
        instructions: recipes.find(recipe => recipe.id === id).instructions,
        isFavorite: !isFavorite,
      }));
      const updatedRecipe = response.data.updateRecipe;
      setRecipes(prevRecipes => prevRecipes.map(recipe => {
        if (recipe.id === updatedRecipe.id) {
          return updatedRecipe;
        }
        return recipe;
      }));
    } catch (error) {
      console.error('Error updating favorite status:', error);
      setError('Error updating favorite status. Please try again.');
    }
  }

  async function handleReviewSubmit(event, recipeId) {
    event.preventDefault();
    try {
      const response = await client.graphql(graphqlOperation(createReview, {
        recipeId,
        comment: reviewText,
        rating: reviewRating
      }));
      const newReview = response.data.createReview;
      setReviews(prevReviews => [...prevReviews, newReview]);
      setReviewText('');
      setReviewRating(0);
      setReviewingRecipeId(null);
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Error submitting review. Please try again.');
    }
  }

  async function fetchReviews(recipeId) {
    try {
      const response = await client.graphql(graphqlOperation(listReviews, { recipeId }));
      setReviews(response.data.listReviews.items);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Error fetching reviews. Please try again.');
    }
  }

  function handleViewReviews(recipeId) {
    fetchReviews(recipeId);
    setShowReviewsModal(true);
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
                <button className={`btn ${recipe.isFavorite ? 'btn-success' : 'btn-outline-success'}`} onClick={() => handleToggleFavorite(recipe.id, recipe.isFavorite)}>{recipe.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
                <button className="btn btn-info ms-2" onClick={() => setReviewingRecipeId(recipe.id)}>Review</button>
                <button className="btn btn-warning ms-2" onClick={() => handleViewReviews(recipe.id)}>View Reviews</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Modal for displaying reviews */}
      {showReviewsModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} ref={reviewRef}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reviews</h5>
                <button type="button" className="btn-close" onClick={() => setShowReviewsModal(false)}></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {reviews.map(review => (
                    <li key={review.id} className="list-group-item">
                      <p><strong>Rating:</strong> {review.rating}</p>
                      <p><strong>Comment:</strong> {review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Review form */}
      {reviewingRecipeId && (
        <div className="mt-3">
          <h4>Leave a Review</h4>
          <form onSubmit={(e) => handleReviewSubmit(e, reviewingRecipeId)}>
            <div className="mb-3">
              <label htmlFor="reviewRating" className="form-label">Rating</label>
              <input type="number" className="form-control" id="reviewRating" value={reviewRating} onChange={(e) => setReviewRating(parseInt(e.target.value))} min="1" max="5" />
            </div>
            <div className="mb-3">
              <label htmlFor="reviewText" className="form-label">Review</label>
              <textarea className="form-control" id="reviewText" rows="3" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setReviewingRecipeId(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileRecipeCard;
