/*********************************************
 * @author Caleb Edwards
 * @contributions Created the initial recipe card and its functions.
 * 
 * @author Kaleb Lawrence
 * @contributions Made the create recipe a form instead of a pop-up menu, GraphQL stayed the same for the most part.
 * 
 * @author ChatGPT
 * @contributions Created most of the comments for this code.
 * 
 * @brief Displays a profile recipe card with options to add, delete, update, favorite, review, and view reviews for recipes.
 *********************************************/

import React, { useState, useEffect, useRef } from 'react';
import { Amplify } from 'aws-amplify';
import { listRecipes, createRecipe, deleteRecipe, updateRecipe, createReview, listReviews } from '../../graphql/graphql-operations';
import awsConfig from '../../aws-exports';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { generateClient } from "aws-amplify/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar, faTrashAlt, faPencilAlt, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import './ProfilePage.module.css'
const client = generateClient();
Amplify.configure(awsConfig);

function ProfileRecipeCard() {
  // State variables for managing recipes, form inputs, reviews, and error handling
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [selectedRecipeDetails, setSelectedRecipeDetails] = useState(null);

  // Reference for managing modals
  const reviewRef = useRef(null);

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

  // Effect hook to fetch recipes on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Function to handle form submission for creating a new recipe
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

  // Function to handle deletion of a recipe
  async function handleDeleteRecipe(id) {
    try {
      await client.graphql(graphqlOperation(deleteRecipe, { id }));
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
      setError('Error deleting recipe. Please try again.');
    }
  }

  // Function to handle updating a recipe
  async function handleUpdateRecipe(id) {
    const recipeToUpdate = recipes.find(recipe => recipe.id === id);
    if (recipeToUpdate) {
      setNewRecipeName(recipeToUpdate.name);
      setNewRecipeIngredients(recipeToUpdate.ingredients);
      setNewRecipeInstructions(recipeToUpdate.instructions);
      setShowForm(true);
    }
  }

  // Function to toggle favorite status of a recipe
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
      window.location.reload(); // Reloading the page to reflect changes
    } catch (error) {
      console.error('Error updating favorite status:', error);
      setError('Error updating favorite status. Please try again.');
    }
  }

  // Function to handle submission of a review for a recipe
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
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Error submitting review. Please try again.');
    }
  }

  // Function to fetch reviews for a recipe
  async function fetchReviews(recipeId) {
    try {
      const response = await client.graphql(graphqlOperation(listReviews, { recipeId }));
      setReviews(response.data.listReviews.items);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Error fetching reviews. Please try again.');
    }
  }

  // Function to handle viewing reviews for a recipe
  function handleViewReviews(recipeId) {
    fetchReviews(recipeId);
    setShowReviewsModal(true);
  }

  // Function to set selected recipe details for modal display
  function handlePopupContent(recipe) {
    setSelectedRecipeDetails(recipe);
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
      {/* Displaying recipe cards */}
      <div className="d-flex flex-wrap">
        {recipes.map(recipe => (
          <div key={recipe.id} className="col" style={{ marginBottom: '20px' }}>
            <div className="card text-bg-secondary" style={{ width: '18rem', border: '2px solid black' }}>
              <div className="card-header text-center" style={{ width: '16rem', border: '2px solid black' }}> {/* Centered header */}
                <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
              </div>
              <div className="card-body">
                {/* Buttons for various actions */}
                <button className="btn btn-danger btn-icon" onClick={() => handleDeleteRecipe(recipe.id)} style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>                
                <button className="btn btn-primary btn-icon" onClick={() => handleUpdateRecipe(recipe.id)} style={{ position: 'absolute', bottom: '5px', left: '5px' }}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>                
                <button className="btn btn-secondary btn-icon" onClick={() => handleToggleFavorite(recipe.id, recipe.isFavorite)} style={{ position: 'absolute', top: '70px', right: '5px' }}>
                  <FontAwesomeIcon icon={faStar} style={{ color: recipe.isFavorite ? 'yellow' : 'white' }} />
                </button>
                <div className="text-center" style={{ marginTop: '30px' }}>
                  <button className="btn btn-dark mb-4" onClick={() => handlePopupContent(recipe)}> <FontAwesomeIcon icon={faList}/> Ingredients & Instructions</button>
                </div>
                {/* Button to view reviews */}
                <button className="btn btn-success ms-2" onClick={() => handleViewReviews(recipe.id)} style={{ position: 'absolute', bottom: '10px', right: '70px' }}>
                  <FontAwesomeIcon icon={faCommentDots}/> View Reviews
                </button> 
              </div>        
            </div>
          </div>
        ))}
      </div>
      {/* Displaying error message if any */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Modal for displaying ingredients and instructions */}
      {selectedRecipeDetails && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} ref={reviewRef}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipeDetails.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedRecipeDetails(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Ingredients:</strong> {selectedRecipeDetails.ingredients}</p>
                <p><strong>Instructions:</strong> {selectedRecipeDetails.instructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </div>
  );
}

export default ProfileRecipeCard;
