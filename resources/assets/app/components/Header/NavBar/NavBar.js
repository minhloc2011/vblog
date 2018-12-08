import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/twitter"
                  className="nav-link"
                  rel="tooltip"
                  title="Follow us on Twitter"
                  data-placement="bottom"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
