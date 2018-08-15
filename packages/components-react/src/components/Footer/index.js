import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { TiSocialLinkedin } from 'react-icons/ti';
import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  componentDidMount() {
    if (window.loadWidget) { // eslint-disable-line
      window.loadWidget(); // eslint-disable-line
    }
  }

  render() {
    const date = new Date();

    return (
      <footer className="footer">
        <script
          type="text/javascript"
          src="//siegel.ausgezeichnet.org/widgets/js/5972057d0cf2f6fe3bdedbed/widget.js"
        />
        <div className="container columns is-paddingless">
          <div className="column columns is-half-tablet is-marginless is-paddingless">
            <div className="column footer__menu show-on-tablet">
              <ul className="footer__menu-list">
                <li>
                  <a
                    className="footer__menu-item"
                    href="https://www.mcmakler.de/ueber-mcmakler/"
                  >
                    Über Uns
                  </a>
                </li>
                <li>
                  <a
                    className="footer__menu-item"
                    href="https://www.mcmakler.de/unser-team/"
                  >
                    Unser Team
                  </a>
                </li>
                <li>
                  <a
                    className="footer__menu-item"
                    href="https://www.mcmakler.de/standorte/"
                  >
                    Standorte
                  </a>
                </li>
                <li>
                  <a
                    className="footer__menu-item"
                    href="https://www.mcmakler.de/karriere/"
                  >
                    Karriere
                  </a>
                </li>
                <li>
                  <a
                    className="footer__menu-item"
                    href="https://www.mcmakler.de/presse/"
                  >
                    Presse
                  </a>
                </li>
              </ul>
            </div>

            <div className="column is-paddingless is-two-thirds-tablet">
              <div className="footer__card">
                <header className="footer__card__header">
                  <span className="footer__card__header-text">Kontakt</span>
                </header>
                <div className="footer__card__contact">
                  <img
                    className="footer__icon"
                    alt=""
                    src="https://www.mcmakler.de/images/icons/email.svg"
                  />
                  <a
                    className="footer__card-link"
                    href="mailto:service@mcmakler.de"
                  >
                    service@mcmakler.de
                  </a>
                  <span className="fineprint">McMakler Email-Adresse</span>
                </div>
                <div className="footer__card__contact">
                  <img
                    className="footer__icon"
                    src="https://www.mcmakler.de/images/icons/phone.svg"
                    alt=""
                  />
                  <a className="footer__card-link" href="tel:+498005008002">
                    0800 500 80 02
                  </a>
                  <span className="fineprint">Kostenlose Service-Hotline</span>
                </div>
              </div>
              <div className="footer__info">
                Wir beraten Sie gerne in einem persönlichen Gespräch am Telefon.
                Wir sind erreichbar von Montag bis Freitag von 8:00 &mdash; 20:00
                Uhr, Sa-So 9:00 &mdash; 18:00 Uhr.
              </div>
            </div>
          </div>
          <div className="column is-half-tablet is-paddingless">
            <div className="footer__card">
              <header className="footer__card__header">
                <span className="footer__card__header-text">Auszeichnungen</span>
              </header>
              <div className="columns is-marginless has-text-centered is-vcentered footer__card__badges">
                <div className="column is-paddingless footer__card-badge">
                  <a
                    href="https://www.mcmakler.de/pdf/tuv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="TÜV Siegel"
                    title="TÜV geprüftes Onlineportal"
                  >
                    <img
                      className="footer__tuv"
                      alt="Tüv geprüfter Service"
                      src="https://www.mcmakler.de/images/logos/tuv-official.png"
                    />
                  </a>
                </div>
                <div className="column is-paddingless footer__card-badge">
                  <div id="auorg-bg">
                    <a
                      href="https://www.ausgezeichnet.org"
                      target="_blank"
                      title="AUSGEZEICHNET.ORG Gütesiegel"
                      className="auorg-br"
                      rel="noopener noreferrer"
                      alt="AUSGEZEICHNET.ORG Siegel"
                    >
                      <span>Ausgezeichnet.org</span>
                    </a>
                  </div>
                </div>
                <div className="column is-paddingless footer__card-badge">
                  <a
                    href="https://www.ekomi.de/bewertungen-mcmakler-gmbh.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="eKomi Siegel Gold"
                    alt="eKomi Siegel"
                  >
                    <img
                      className="ekomi-badge"
                      alt="eKomi kundenberatung"
                      src="https://www.mcmakler.de//images/logos/ekomi.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/mcmakler.de"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/mcmakler.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/mcmakler-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <TiSocialLinkedin />
              </a>
              <a
                href="https://twitter.com/McMaklerDE"
                target="_blank"
                rel="noopener noreferrer"
                className="social__icon"
              >
                <IoLogoTwitter />
              </a>
            </div>
          </div>

          <div className="column hide-on-tablet">
            <ul className="footer__menu-list footer__menu--centered">
              <li>
                <a
                  className="footer__menu-item"
                  href="https://www.mcmakler.de/ueber-mcmakler/"
                >
                  Über Uns
                </a>
              </li>
              <li>
                <a
                  className="footer__menu-item"
                  href="https://www.mcmakler.de/unser-team/"
                >
                  Unser Team
                </a>
              </li>
              <li>
                <a
                  className="footer__menu-item"
                  href="https://www.mcmakler.de/standorte/"
                >
                  Standorte
                </a>
              </li>
              <li>
                <a
                  className="footer__menu-item"
                  href="https://www.mcmakler.de/karriere/"
                >
                  Karriere
                </a>
              </li>
              <li>
                <a
                  className="footer__menu-item"
                  href="https://www.mcmakler.de/presse/"
                >
                  Presse
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container columns footer__imprint">
          <div className="column column_no-top-padding">
            <ul className="list list_inline footer__last-links">
              <li className="list_inline__list-item">
                <a href="https://www.mcmakler.de/agb">AGB</a>
              </li>
              <li className="list_inline__list-item">
                <a href="https://www.mcmakler.de/datenschutz">Datenschutz</a>
              </li>
              <li className="list_inline__list-item">
                <a href="https://www.mcmakler.de/impressum">Impressum</a>
              </li>
            </ul>
          </div>
          <div className="column footer__all-rights-reserved">
            <small className="fineprint push-right">
              &copy; {date.getFullYear()} McMakler GmbH - Alle Rechte vorbehalten
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
