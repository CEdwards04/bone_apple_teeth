import React from 'react';
import { Link } from 'react-router-dom'; 
import ProfileStyle from './ProfilePage.module.css';

const ProfilePopup = () => {
    return (
        <Link to="/profile" className={ProfileStyle.profile_button}>Profile</Link> 
    );
};

export default ProfilePopup;
