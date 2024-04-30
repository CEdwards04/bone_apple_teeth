/*********************************************
 * @author Jeffrey Adkins
 * @contribution Entire file
 * @brief This is the navbar component that is visible on all webpages.
 *        This provides basic navigation functionality
 *********************************************/

import React from 'react';
import logo from './Bone_Apple_Teeth-logos_transparent.png';
import { Link } from 'react-router-dom'; // Import Link

/**
 * Navbar contains the navigation bar which displays at the top of any given page
 * @returns The display for the navbar along witth the links to re-direct users
 */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Bone Apple Teeth Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/meal-search">Meal Search</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/settings">Settings</Link>
            <Link className="nav-link" to="/recipes">User Recipes</Link> {/* Add this line */}
          </div>
        </div>
        <Link className="nav-link" to="/profile"><button className="btn btn-dark" type="submit">User Account</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
