/*********************************************
 * Meal Card Component
 * 
 * @author Jeffrey Adkins
 * @contribution Code for the meal cards displaying meal information and image.
 * 
 * @author Jeremy Appiah
 * @contribution Interactive meal card popup functionality.
 * 
 * @brief Displays individual meal cards that load meal details and offer
 *        an interactive popup to show detailed recipes. Ideal for use in
 *        any part of the application where meal summaries are required.
 *********************************************/

import React, { useState } from 'react'; // React library and useState hook for managing component state.
import Popup from './Popup'; // Popup component for displaying detailed recipe information.

/**
 * Renders a meal card that shows brief information about a meal.
 * On clicking the card, a popup with detailed ingredients and instructions is displayed.
 * 
 * @param {object} recipe - The recipe object containing details like image, title, and other relevant information.
 * @returns {JSX.Element} The card component with a clickable area that triggers a popup for more details.
 */
function Card({ recipe }) {
    const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup.

    const togglePopup = () => {
        setShowPopup(!showPopup); // Toggles the state of showPopup to show or hide the Popup component.
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="row row-cols-2 row-cols-md-4 g-4">
                <div className="col">
                    <div className="meal_card">
                        <div className="card text-white bg-dark border border-white" style={{ height: '340px', width: '15rem', position: 'relative' }}>
                            <img className="card-img-top" src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                            <div className="card-header"><h5 className="card-title font-weight-bold">{recipe.title}</h5></div>
                            <div className="card-body">
                            </div>
                            <button
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    width: '100%',
                                    padding: '0.2rem',
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    backgroundColor: '#7B68EE',
                                    border: 'none',
                                    borderRadius: '0.3rem',
                                    transition: '0.2s',
                                    cursor: 'pointer',
                                    letterSpacing: '0.1rem',
                                    fontWeight: 'bold' // Adding fontWeight: 'bold' to make the button text bold
                                }}
                                className="card-btn"
                                onClick={togglePopup} // Add onClick event to toggle the popup
                            >
                                Ingredients and Instructions <span style={{ marginLeft: '0.5rem', transition: '0.2s' }}>&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && <Popup recipe={recipe} onClose={togglePopup} />} // Conditionally render the Popup component based on showPopup state.
        </div>
    ); 
    
}

export default Card;
