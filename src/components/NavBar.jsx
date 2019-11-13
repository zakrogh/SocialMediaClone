import React from 'react';

function NavBar(){
  return (
    <div>
      <a className="btn btn-primary btn-lg" href="#" role="button">Test Button</a>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button type="button" className="btn btn-primary">Primary</button>
        <span className="navbar-toggler-icon"></span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
