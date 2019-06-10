import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="my-name">
      <h1>Michaela</h1>
      <h1>Burns</h1>
    </div>
    <div className="navbar-links">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
