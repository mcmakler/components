import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = ({ contactInfo }) => (
  <div>
    <div className="footer__card">
      <header className="footer__card__header">
        <span className="card__header-text">{contactInfo.title}</span>
      </header>
      <div className="card__contact">
        <img
          className="footer__icon"
          alt=""
          src="https://www.mcmakler.de/images/icons/email.svg"
        />
        <a
          className="footer__card-link"
          href={`mailto:${contactInfo.email}`}
        >
          {contactInfo.email}
        </a>
        <span className="fineprint">{contactInfo.emailDescription}</span>
      </div>
      <div className="card__contact">
        <img
          className="footer__icon"
          src="https://www.mcmakler.de/images/icons/phone.svg"
          alt=""
        />
        <a className="card-link" href={`tel:${contactInfo.phoneHref}`}>
          {contactInfo.phone}
        </a>
        <span className="fineprint">{contactInfo.phoneDescription}</span>
      </div>
    </div>
    <div className="footer__info">
      {contactInfo.contactDescription}
    </div>
  </div>
);

ContactCard.propTypes = {
  contactInfo: PropTypes.shape({
    title: PropTypes.string,
    email: PropTypes.string,
    emailDescription: PropTypes.string,
    phone: PropTypes.string,
    phoneHref: PropTypes.string,
    phoneDescription: PropTypes.string,
    contactDescription: PropTypes.string,
  }),
};

ContactCard.defaultProps = {
  contactInfo: {
    title: 'Kontakt',
    email: 'service@mcmakler.de',
    emailDescription: 'McMakler Email-Adresse',
    phone: '0800 500 80 020',
    phoneHref: '+498005008002',
    phoneDescription: 'Kostenlose Service-Hotline',
    contactDescription: `
      Wir beraten Sie gerne in einem persönlichen
      Gespräch am Telefon. Wir sind erreichbar
      von Montag bis Freitag von 8:00 — 20:00
      Uhr, Sa-So 9:00 — 18:00 Uhr.
      `,
  },
};

export default ContactCard;
