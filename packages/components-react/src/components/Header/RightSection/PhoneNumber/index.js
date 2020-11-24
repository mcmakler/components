import { FaPhone } from 'react-icons/fa/index';
import React from 'react';
import PropTypes from 'prop-types';

const PhoneNumber = ({
  phoneNumberLabel,
  phoneNumberTarget,
  phoneNumberText,
}) => (
    <a className="header__contact" href={`tel:${phoneNumberTarget}`}>
      <div className="header__phone-number-container">
        <FaPhone className="header__phone-icon" />
        <span className="header__phone-number">
          {phoneNumberLabel}
        </span>
      </div>
      <span className="header__phone-label">
        {phoneNumberText}
      </span>
    </a>
  );

PhoneNumber.propTypes = {
  phoneNumberLabel: PropTypes.string.isRequired,
  phoneNumberTarget: PropTypes.string.isRequired,
  phoneNumberText: PropTypes.string.isRequired,
};

export default PhoneNumber;
