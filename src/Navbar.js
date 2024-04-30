/*********************************************
 * Navigation Bar Component
 * 
 * @author Jeffrey Adkins
 * @contribution Developed the entire Navigation bar component.
 * 
 * @brief This component provides a consistent navigation bar across all pages of the application.
 *        It uses React Router's Link component for SPA-friendly navigation without page reloads.
 *        Styled with Bootstrap for a responsive design.
 *********************************************/

import React from 'react'; // React library import for using JSX and React features.
import logo from './Bone_Apple_Teeth-logos_transparent.png'; // Logo image for the navbar.
import { Link } from 'react-router-dom'; // Used for handling internal navigation without full page reloads.

/**
 * Renders a responsive navigation bar using Bootstrap classes. Includes links to various sections
 * of the application such as Meal Search, Contact, Settings, User Recipes, and User Profile.
 * Features the application's logo which also serves as a link to the homepage.
 * 
 * @returns {JSX.Element} JSX code for rendering the navigation bar with links and logo.
 */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* Logo acting as home link */} 
          <img src={logo} alt="Bone Apple Teeth Logo" style={{ width: '50px', height: 'auto' }} /> 
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> {/* Navigation links */}
          <div className="navbar-nav">
            <Link className="nav-link" to="/meal-search">Meal Search</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/settings">Settings</Link>
            <Link className="nav-link" to="/recipes">User Recipes</Link> {/* Add this line */}
          </div>
        </div>
        <Link className="nav-link" to="/profile"><button className="btn btn-dark" type="submit">User Account</button></Link> {/* Link to user account */}
      </div>
    </nav>
  );
}

export default Navbar;
