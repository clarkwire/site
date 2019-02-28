import React, { Component } from 'react';
import NavLink from 'react-bootstrap/NavLink';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
      <nav>
      <ul className="nav-links">
            <li className="navbar-brand">
              <a className="navbar-brand" href="# ">
                <img src="../img/logo.jpg" width="30" height="30" alt="Clark Logo"/>
                </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="nav-link-selected">About</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="# " role="button" aria-haspopup="true" aria-expanded="false">Catalog</a>
                 <div className="dropdown-menu">
                    <a className="dropdown-item" href="# ">Cables</a>
                    <a className="dropdown-item" href="# ">Connectors</a>
                    <a className="dropdown-item" href="# ">Something else here</a>
                <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="# ">Separated link</a>
                 </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/enrollment" activeClassName="nav-link-selected">Technical</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ambassadors" activeClassName="nav-link-selected">Contact</NavLink>
            </li>
          </ul>
    </nav>
      </header>
    )
  }
}
export default Header;