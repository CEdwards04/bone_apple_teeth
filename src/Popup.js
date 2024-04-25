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
                <p>What You Need: {recipe.ingredients}</p>
                <p>How to Make It: {recipe.recipe}</p>
            </div>
        </div>
    );
}

export default Popup;
