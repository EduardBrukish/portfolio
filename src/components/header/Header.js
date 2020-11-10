import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
  return(
    <div className="bg-dark">
      <div className="header container">
        <h1>EB</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  MAIN
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/works" className="nav-link">
                  WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link">
                  SKILLS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  ABOUT ME
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;