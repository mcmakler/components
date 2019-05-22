import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import RoomTourButton from './../RoomTourButton/RoomTourButton';

const PropertyCardImg = (props) => {
  const {
    src,
    purpose,
    hoverText,
    roomTourLink,
    alt,
    className,
  } = props;

  const propertyImgClasses = classNames(
    className,
    'property-card__figure',
  );

  let purposeElem = null;
  let hoverTextElem = null;
  let virtualTourElement = null;

  if (purpose) {
    purposeElem = <span className="property-card__label">{purpose}</span>;
  }

  if (hoverText) {
    hoverTextElem = <span className="property-card__hover-text">{hoverText}</span>;
  }

  if (roomTourLink) {
    virtualTourElement = <RoomTourButton className="property-card__tour-link" />;
  }

  return (
    <figure className={propertyImgClasses}>
      <img
        className="property-card__image"
        src={src}
        alt={alt}
      />
      <figcaption>
        {purposeElem}
        {hoverTextElem}
        {virtualTourElement}
      </figcaption>
    </figure>
  );
};

PropertyCardImg.propTypes = {
  src: PropTypes.string.isRequired,
  purpose: PropTypes.string,
  hoverText: PropTypes.string,
  roomTourLink: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

PropertyCardImg.defaultProps = {
  purpose: '',
  hoverText: '',
  roomTourLink: '',
  alt: '',
  className: '',
};

export default PropertyCardImg;
