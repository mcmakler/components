import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

const PropertyCardImg = (props) => {
  const {
    src,
    purpose,
    hoverText,
    alt,
    className,
  } = props;

  const propertyImgClasses = classNames(
    className,
    'property-card__figure',
  );

  let purposeElem = null;
  let hoverTextElem = null;

  if (purpose) {
    purposeElem = <span className="property-card__label">{purpose}</span>;
  }

  if (hoverText) {
    hoverTextElem = <span className="property-card__hover-text">{hoverText}</span>;
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
      </figcaption>
    </figure>
  );
};

PropertyCardImg.propTypes = {
  src: PropTypes.string.isRequired,
  purpose: PropTypes.string,
  hoverText: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

PropertyCardImg.defaultProps = {
  purpose: '',
  hoverText: '',
  alt: '',
  className: '',
};

export default PropertyCardImg;
