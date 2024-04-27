import React, { useState, useEffect } from 'react';
import { generateClient } from "aws-amplify/api";
import { listRecipes, createReview, listReviews, deleteReview } from '../../graphql/graphql-operations';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import Navbar from '../../Navbar';
import './RecipeDisplayPage.css';

const client = generateClient();

function RecipeDisplayPage() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [showReviewFormModal, setShowReviewFormModal] = useState(false);
  const [reviewingRecipeId, setReviewingRecipeId] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [recipeReviews, setRecipeReviews] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const recipeData = await client.graphql(graphqlOperation(listRecipes));
      setRecipes(recipeData.data.listRecipes.items);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

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

  async function handleViewReviews(recipeId) {
    try {
      const response = await client.graphql(graphqlOperation(listReviews, { recipeId }));
      setRecipeReviews(response.data.listReviews.items);
      setShowReviewsModal(true);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }

  async function handleDeleteReview(reviewId) {
    try {
      await client.graphql(graphqlOperation(deleteReview, { id: reviewId }));
      // Refetch the reviews associated with the recipe
      await handleViewReviews(reviewingRecipeId);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <h1>All Recipes</h1>
      <input
        type="text"
        placeholder="Search by recipe name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="card text-bg-secondary" style={{ width: '18rem' }}>
            <div className="card-header">
              <h5 className="card-title">{recipe.name ? recipe.name : 'Unnamed Recipe'}</h5>
            </div>
            <div className="card-body">
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <button onClick={() => handleViewReviews(recipe.id)}>View Reviews</button>
              <button onClick={() => {
                setReviewingRecipeId(recipe.id);
                setShowReviewFormModal(true);
              }}>Leave Review</button>
            </div>
          </div>
        ))}
      </div>

      {showReviewsModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reviews</h5>
                <button type="button" className="btn-close" onClick={() => setShowReviewsModal(false)}></button>
              </div>
              <div className="modal-body">
                {recipeReviews.map(review => (
                  <div key={review.id} className="review">
                    <p><strong>Rating:</strong> {review.rating}</p>
                    <p><strong>Comment:</strong> {review.comment}</p>
                    <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showReviewFormModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Leave a Review</h5>
                <button type="button" className="btn-close" onClick={() => setShowReviewFormModal(false)}></button>
              </div>
              <div className="modal-body">
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
