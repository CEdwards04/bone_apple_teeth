import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProfilePage.css';

const ProfilePopup = () => {
    return (
        <Link to="/profile" className="profile-button">Profile</Link> 
    );
};

export default ProfilePopup;
