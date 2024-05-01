/*********************************************
 * @author Caleb Edwards
 * @contributions Created the initial recipe card and its functions.
 * 
 * @author ChatGPT
 * @contributions Created most of the comments for this code.
 * 
 * @brief Webpage to display all recipes stored in the database with the option to review and rate them.
 *********************************************/

// Importing necessary modules from React and AWS Amplify
import React, { useState, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { listRecipes, createReview, listReviews, deleteReview } from '../../graphql/graphql-operations';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCommentDots, faComments } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../Components/Navbar';
import './RecipeDisplayPage.css';

// Generating a client using AWS Amplify
const client = generateClient();

function RecipeDisplayPage() {
  // State variables to manage different aspects of the component
  const [recipes, setRecipes] = useState([]); // Holds the list of recipes
  const [searchTerm, setSearchTerm] = useState(''); // Holds the search term entered by the user
  const [showReviewsModal, setShowReviewsModal] = useState(false); // Indicates whether to show the reviews modal
  const [showReviewFormModal, setShowReviewFormModal] = useState(false); // Indicates whether to show the review form modal
  const [reviewingRecipeId, setReviewingRecipeId] = useState(null); // Holds the ID of the recipe being reviewed
  const [reviewText, setReviewText] = useState(''); // Holds the text of the review
  const [reviewRating, setReviewRating] = useState(0); // Holds the rating of the review
  const [recipeReviews, setRecipeReviews] = useState([]); // Holds the list of reviews for a recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Holds the selected recipe for detailed view

  // Fetch recipes from the database when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Function to fetch recipes from the database
  async function fetchRecipes() {
    try {
      const recipeData = await client.graphql(graphqlOperation(listRecipes));
      setRecipes(recipeData.data.listRecipes.items);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  // Function to handle leaving a review for a recipe
  async function handleLeaveReview() {
    try {
      await client.graphql(graphqlOperation(createReview, {
        recipeId: reviewingRecipeId,
        comment: reviewText,
        rating: reviewRating
      }));
      setShowReviewFormModal(false);
      // Optional: You may want to fetch the updated list of reviews here
    } catch (error) {
      console.error('Error leaving review:', error);
    }
  }

  // Function to handle viewing reviews for a recipe
  async function handleViewReviews(recipeId) {
    try {
      const response = await client.graphql(graphqlOperation(listReviews, { recipeId }));
      setRecipeReviews(response.data.listReviews.items);
      setShowReviewsModal(true);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }

  // Function to handle deleting a review
  async function handleDeleteReview(reviewId) {
    try {
      await client.graphql(graphqlOperation(deleteReview, { id: reviewId }));
      // Refetch the reviews associated with the recipe
      await handleViewReviews(reviewingRecipeId);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  // Filtering recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to open detailed view of a recipe
  const openRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to close detailed view of a recipe
  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };

  // Rendering the component
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      <h1>All Recipes</h1>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search by recipe name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Displaying list of recipes */}
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="card text-bg-secondary" style={{ width: '18rem', border: '2px solid black', margintop: '20px', marginbottom: '20px' }}>
            <div className="card-header" style={{ width: '16rem', border: '2px solid black' }}>
              <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
            </div>
            <div className="card-body">
              {/* Buttons to view details, reviews, and leave a review */}
              <button 
                onClick={() => openRecipeDetails(recipe)} 
                className="btn btn-dark"
              >
                <FontAwesomeIcon icon={faList} /> View Ingredients and Instructions
              </button>
              <button 
                onClick={() => handleViewReviews(recipe.id)} 
                className="btn btn-success"
              >
                <FontAwesomeIcon icon={faCommentDots} /> View Reviews
              </button>
              <button 
                onClick={() => {
                  setReviewingRecipeId(recipe.id);
                  setShowReviewFormModal(true);
                }} 
                className="btn btn-light"
              >
                <FontAwesomeIcon icon={faComments} /> Leave Review
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying detailed view of a recipe */}
      {selectedRecipe && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRecipe.name}</h5>
                <button type="button" className="btn-close" onClick={closeRecipeDetails}></button>
              </div>
              <div className="modal-body">
                <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
                <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for displaying reviews */}
      {showReviewsModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reviews</h5>
                <button type="button" className="btn-close" onClick={() => setShowReviewsModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Displaying reviews */}
                {recipeReviews.map(review => (
                  <div key={review.id} className="review">
                    <p><strong>Rating:</strong> {review.rating}</p>
                    <p><strong>Comment:</strong> {review.comment}</p>
                    {/* Button to delete a review */}
                    <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for leaving a review */}
      {showReviewFormModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Leave a Review</h5>
                <button type="button" className="btn-close" onClick={() => setShowReviewFormModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Form to leave a review */}
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleLeaveReview();
                }}>
                  <div className="mb-3">
                    <label htmlFor="reviewRating" className="form-label">Please Rate 0-10</label>
                    <input type="number" className="form-control" id="reviewRating" value={reviewRating} onChange={(e) => setReviewRating(parseInt(e.target.value))} min="0" max="10" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reviewText" className="form-label">Review</label>
                    <textarea className="form-control" id="reviewText" rows="3" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
                  </div>
                  {/* Buttons to submit or cancel the review */}
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                  <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowReviewFormModal(false)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDisplayPage;
