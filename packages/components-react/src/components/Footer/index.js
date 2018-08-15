import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import ContactCard from './ContactCard';
import './Footer.scss';
import SocialLinks from './SocialLinks';
import Awards from './Awards';

const Footer = ({
  data: {
    menuList,
    contactInfo,
    footerLinks,
    socialLinks,
    copyright,
    awards,
  },
}) => {
  const date = new Date();

  return (
    <footer className="footer">
      <div className="container columns is-paddingless">
        <div className="column columns is-half-tablet is-marginless is-paddingless">
          <div className="column footer__menu show-on-tablet">
            <ul className="footer__menu-list">
              <Menu menuList={menuList} />
            </ul>
          </div>

          <div className="column is-paddingless is-two-thirds-tablet">
            <ContactCard contactInfo={contactInfo} />
          </div>
        </div>
        <div className="column is-half-tablet is-paddingless">
          <Awards awardsData={awards} />
          <SocialLinks links={socialLinks} />
        </div>

        <div className="column hide-on-tablet">
          <ul className="footer__menu-list footer__menu--centered">
            <Menu menuList={menuList} />
          </ul>
        </div>
      </div>

      <div className="container columns footer__imprint">
        <div className="column column_no-top-padding">
          <ul className="list list_inline footer__last-links">
            {footerLinks.map(link => (
              <li key={link.name} className="list_inline__list-item">
                <a href={link.url}>{link.name}</a>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="column footer__all-rights-reserved">
          <small className="fineprint push-right">
            &copy; {date.getFullYear()} { copyright }
          </small>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.object, // eslint-disable-line
};

Footer.defaultProps = {
  data: {
    footerLinks: [
      { name: 'AGB', url: 'https://www.mcmakler.de/agb' },
      { name: 'Datenschutz', url: 'https://www.mcmakler.de/datenschutz' },
      { name: 'Impressum', url: 'https://www.mcmakler.de/impressum' },
    ],
    copyright: 'McMakler GmbH - Alle Rechte vorbehalten',
  },
};

export default Footer;
