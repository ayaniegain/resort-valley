import React from 'react';
import { Link } from 'react-router-dom';


function StickeyBar({ isOpen }) {
  return <>
    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
      <li> <Link to="/">HOME
      </Link></li>
      <li> <Link to="/rooms">ROOMS
      </Link></li>
      <li> <Link to="/about">ABOUT
      </Link></li>
      <li> <Link to="/rooms">Contact Us 🔈 9003004002
      </Link></li>
    </ul>
  </>;
}

export default StickeyBar;
