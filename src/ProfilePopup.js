import React, { useState } from 'react';
import './ProfilePopup.css';

const ProfilePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <div className="profile-popup">
                    <div className="profile-picture">
                        <img src="https://static.wikia.nocookie.net/412c91cd-50bd-4c0c-8332-6cd5a1b2ec98/scale-to-width/755" alt="Profile Picture" />
                        {/* Just an img for fun but we can use the blank profile img i uploaded for the presentation. */}
                    </div>
                    <div className="username">John Doe(Image is me after trial and error)</div>
                    <div className="section-container">
                        <div className="section">
                            <h2>My Recipes</h2>
                            <ul className="list">
                            </ul>
                        </div>
                        <div className="section">
                            <h2>My Favorites</h2>
                            <ul className="list">
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <button className="profile-button" onClick={togglePopup}>Profile</button>
        </>
    );
};

export default ProfilePopup;
