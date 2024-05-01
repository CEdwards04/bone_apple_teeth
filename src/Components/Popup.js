/*********************************************
 * Popup Component
 * 
 * @author Jeremy Appiah
 * @contribution Developed the entire Popup component.
 * 
 * @brief This component creates a modal popup that displays detailed information
 *        about a recipe, including ingredients and an image. It is used across
 *        the application wherever detailed recipe information needs to be shown.
 *********************************************/

import React from 'react'; // Import React for JSX and component capabilities.

/**
 * Renders a modal popup with detailed recipe information. The popup includes a close button,
 * an image, and lists of used and additional ingredients for the recipe.
 * 
 * @param {Object} recipe - The recipe object containing the title, image URL, used ingredients, and additional ingredients.
 * @param {Function} onClose - Function to call when the popup needs to be closed, typically to set the visibility state.
 * @returns {JSX.Element} - The popup component with recipe details and a close button.
 */
function Popup({ recipe, onClose }) {
    const popupOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay covering the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999 // Ensures the popup is on top of other content
    };

    const popupContainerStyle = {
        width: '70%',
        height: '70%',
        backgroundColor: '#fff', // White background for the content area
        border: '2px solid #000', // Black border for contrast
        padding: '20px',
        borderRadius: '10px', // Rounded corners
        position: 'relative' // Relative positioning for placing the close button absolutely
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent', // No background for the close button
        border: 'none',
        cursor: 'pointer' // Pointer cursor on hover
    };
    return (
        <div style={popupOverlayStyle}>
            <div style={popupContainerStyle}>
                {/*Close button*/}
                <button style={closeButtonStyle} onClick={onClose}>X</button>
                {/*Title of recipe */}
                <h2>{recipe.title}</h2> 
                {/*Recipe image*/}
                <img src={recipe.image} alt={recipe.title} />
                {/*Heading used for ingredients */}
                <p><strong>What You Need:</strong></p>
                <ul>
                    {recipe.usedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                    {/*Heading for additional ingredients*/}
                <p><strong>Additional Ingredients:</strong></p>
                <ul>
                    {recipe.missedIngredients.map((ingredient, index) => (
                        //List of additional ingredients 
                        <li key={index}>{ingredient.original}</li> 
                    ))}
                </ul>
            </div>
        </div>
    );
    
}

export default Popup;
