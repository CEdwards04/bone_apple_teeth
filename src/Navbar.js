/*********************************************
 * @author Jeffrey Adkins
 * @contribution Entire file
 * @brief This is the navbar component that is visible on all webpages.
 *        This provides basic navigation functionality
 *********************************************/

import React from 'react';
import logo from './Bone_Apple_Teeth-logos_transparent.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bone Apple Teeth Logo" style={{ width: '50px', height: 'auto' }} />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/meal-search">Meal Search</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/contact">Contact</a>
            <a className="nav-link" href="/settings">Settings</a> 
          </div>
        </div>
        <a className="nav-link" href="/profile"><button className="btn btn-dark" type="submit">User Account</button></a>
      </div>
    </nav>
  );
}

export default Navbar;
