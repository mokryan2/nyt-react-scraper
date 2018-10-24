import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        NYT React Scraper
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </nav>
  );
  
  export default Nav;