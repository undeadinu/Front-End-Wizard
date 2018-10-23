import React from 'react';

import logo from '../../images/logo.png';

const Header = () => (
  <header>
    <div className="container mt-4">
      <img className="header__img mb-3" src={logo} alt="Front end wizard logo" />
        <h1 className="text-center display-4">Front End Wizard</h1>
        <p className="text-center">
          <small className="badge badge-primary">v2.0.2</small>
        </p>
    </div>
  </header>
);

export default Header;
