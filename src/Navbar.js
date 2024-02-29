function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <img src="Bone_Apple_Teeth-logos_transparent.png" alt="Bone Apple Teeth Logo"/>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
            </div>
            <a className="nav-link" href="#"><button className="btn btn-dark" type="submit">Login/Register</button></a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;