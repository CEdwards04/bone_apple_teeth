import logo from './Bone_Apple_Teeth-logos_transparent.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="Bone Apple Teeth Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
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