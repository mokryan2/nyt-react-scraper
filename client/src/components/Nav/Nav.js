import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        NYT React Scraper
      </Link>
    </nav>
  );
  
  export default Nav;