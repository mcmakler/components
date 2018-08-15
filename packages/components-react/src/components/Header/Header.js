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
  menuItems: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  menuItems: {
    verkaufen: {
      id: 'verkaufen',
      url: 'https://www.mcmakler.de/verkaufen/',
      title: 'Verkaufen',
    },
    vermieten: {
      id: 'vermieten',
      url: 'https://www.mcmakler.de/vermieten/',
      title: 'Vermieten',
    },
    immobilienbewertung: {
      id: 'immobilienbewertung',
      url: 'https://www.mcmakler.de/immobilienbewertung/',
      title: 'Immobilienbewertung',
    },
    ratgeber: {
      id: 'ratgeber',
      url: '#',
      title: 'Ratgeber',
      customClass: 'header__menu-item_active',
      items: {
        beliebte_artikel: {
          id: 'beliebte_artikel',
          url: '/',
          title: 'Beliebte Artikel',
        },
      },
    },
    mehr: {
      id: 'mehr',
      url: '#',
      title: 'Mehr',
      items: {
        uber_mcmakler: {
          id: 'uber_mcmakler',
          url: 'https://www.mcmakler.de/ueber-mcmakler/',
          title: 'Über McMakler',
        },
        unser_team: {
          id: 'unser_team',
          url: 'https://www.mcmakler.de/unser-team/',
          title: 'Unser Team',
        },
        presse: {
          id: 'presse',
          url: 'https://www.mcmakler.de/presse/',
          title: 'Presse',
        },
        standorte: {
          id: 'standorte',
          url: 'https://www.mcmakler.de/standorte/',
          title: 'Standorte',
        },
        wohnlagenkarte: {
          id: 'wohnlagenkarte',
          url: 'https://www.mcmakler.de/wohnlagenkarte/',
          title: 'Wohnlagenkarte',
        },
        karriere: {
          id: 'karriere',
          url: 'https://www.mcmakler.de/karriere/',
          title: 'Karriere',
        },
        energieausweis: {
          id: 'energieausweis',
          url: 'https://www.mcenergieausweis.de/?utm_source=mcmakler&utm_medium=link&utm_campaign=mcmakler%20subnavigation&utm_term=Energieausweis',
          title: 'Energieausweis',
          target: '_blank',
        },
      },
    },
    unsere_immobilien: {
      id: 'unsere_immobilien',
      url: 'https://immobilien.mcmakler.de/',
      title: 'Unsere Immobilien',
      target: '_blank',
    },
  },
};

export default Header;
