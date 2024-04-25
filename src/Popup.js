import React from 'react';

function Popup({ recipe, onClose }) {
    const popupOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999 
    };

    const popupContainerStyle = {
        width: '70%',
        height: '70%',
        backgroundColor: '#fff',
        border: '2px solid #000',
        padding: '20px',
        borderRadius: '10px',
        position: 'relative'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <div style={popupOverlayStyle}>
            <div style={popupContainerStyle}>
                <button style={closeButtonStyle} onClick={onClose}>X</button>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <p>
                    <strong>What You Need:</strong>
                </p>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p>
                    <strong>How to Make It:</strong>
                </p>
                <ol>
                    {recipe.instructions && recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Popup;
