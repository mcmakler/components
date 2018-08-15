import React from 'react';
import PropTypes from 'prop-types';

import CTA from './CTA';
import PhoneNumber from './PhoneNumber';

const RightSection = ({
  ctaLabel,
  ctaTarget,
  phoneNumberLabel,
  phoneNumberTarget,
  phoneNumberText,
}) => (
  <div className="header__right-section">
    <CTA ctaLabel={ctaLabel} ctaTarget={ctaTarget} />
    <div className="header__separator" />
    <PhoneNumber
      phoneNumberLabel={phoneNumberLabel}
      phoneNumberTarget={phoneNumberTarget}
      phoneNumberText={phoneNumberText}
    />
  </div>
);

RightSection.propTypes = {
  ctaLabel: PropTypes.string,
  ctaTarget: PropTypes.string,
  phoneNumberLabel: PropTypes.string,
  phoneNumberTarget: PropTypes.string,
  phoneNumberText: PropTypes.string,
};

RightSection.defaultProps = {
  ctaLabel: 'Jetzt kostenlos bewerten',
  ctaTarget: 'https://www.mcmakler.de/immobilienbewertung/',
  phoneNumberLabel: '0800 500 80 02',
  phoneNumberTarget: '+498005008002',
  phoneNumberText: 'Kostenlose Service-Hotline',
};

export default RightSection;
