import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import BurgerMenu from './BurgerMenu';
import RightSection from './RightSection';

import './Header.scss';


const Header = ({ menuItems }) => (
  <header className="header">
    <BurgerMenu />
    <a className="logo header__logo" href="https://www.mcmakler.de">
      <img className="header__logo-image" alt="" src="https://www.mcmakler.de/images/header/logo.svg" />
    </a>
    <Menu menuItems={menuItems} />
    <RightSection />
  </header>
);

Header.propTypes = {
  menuItems: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
