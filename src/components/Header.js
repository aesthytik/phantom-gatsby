import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header id="header">
    <div className="inner">

      <h3>
        <a className="logo">

          <span className="symbol"><img src="/images/logo.svg" alt="" /></span>
          <span className="title"><Link to="/">TveroX</Link></span>

        </a>
      </h3>

      <nav />

    </div>
  </header>
);

export default Header;
