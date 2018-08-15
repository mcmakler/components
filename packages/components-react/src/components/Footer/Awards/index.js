import React from 'react';
import PropTypes from 'prop-types';

const Awards = ({ awardsData }) => (
  <div className="footer__card">
    <header className="footer__card__header">
      <span className="footer__card__header-text">{awardsData.title}</span>
    </header>
    <div className="columns is-marginless has-text-centered is-vcentered footer__card__badges">
      {awardsData.badges.map(badge => (
        <div key={badge.url} className="column is-paddingless footer__card-badge">
          {badge.defaultScenario ?
            <a
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={badge.modifier}
                src={badge.src}
                alt={badge.alt}
                title={badge.title}
              />
            </a>
            :
            <div id="auorg-bg">
              <a
                href={badge.url}
                target="_blank"
                title={badge.title}
                className={badge.modifier}
                rel="noopener noreferrer"
                alt={badge.alt}
              >
                <span>{badge.text}</span>
              </a>
            </div>
          }
        </div>
      ))}
    </div>
  </div>
);

Awards.propTypes = {
  awardsData: PropTypes.shape({
    title: PropTypes.string,
    badges: PropTypes.arrayOf(PropTypes.object),
  }),
};

Awards.defaultProps = {
  awardsData: {
    title: 'Auszeichnungen',
    badges: [
      {
        defaultScenario: true,
        url: 'https://www.mcmakler.de/pdf/tuv.pdf',
        src: 'https://www.mcmakler.de/images/logos/tuv-official.png',
        alt: 'TÜV Siegel',
        title: 'TÜV geprüftes Onlineportal',
        modifier: 'footer__tuv',
      },
      {
        defaultScenario: false,
        text: 'Ausgezeichnet.org',
        url: 'https://www.ausgezeichnet.org',
        alt: 'AUSGEZEICHNET.ORG Siegel',
        title: '"AUSGEZEICHNET.ORG Gütesiegel',
        modifier: 'auorg-br',
      },
      {
        defaultScenario: true,
        url: 'https://www.ekomi.de/bewertungen-mcmakler-gmbh.html',
        src: 'https://www.mcmakler.de//images/logos/ekomi.png',
        alt: 'eKomi Siegel',
        title: 'eKomi Siegel Gold',
        modifier: 'ekomi-badge',
      },
    ],
  },
};

export default Awards;
