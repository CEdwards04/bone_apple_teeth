/*********************************************
 * @author Jeffrey Adkins
 * @contribution Code for the meal cards
 * 
 * @author Jeremy Appiah
 * @contribution Meal Card popup code
 * 
 * @brief This is the basic meal card component in which will load
 *        the meals and display them on the webpage.
 *********************************************/

import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

/**
 * 
 * @param recipe - The recipe wanting to be displayed on a popup
 * @returns The function in which displays the meal cards and popup
 */
function Card({ recipe }) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
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
            {showPopup && <Popup recipe={recipe} onClose={togglePopup} />} {/* Render Popup if showPopup is true */}
        </div>
    ); 
    
}

export default Card;