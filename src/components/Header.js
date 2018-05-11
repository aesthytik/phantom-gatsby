import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header id="header">
    <div className="inner">

      <a href="index.html" className="logo">
        <span className="symbol"><img src="images/logo.svg" alt="" /></span>
        <span className="title">Tvero</span>
      </a>

      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
        </ul>
      </nav>

    </div>
  </header>
);

export default Header;
