import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

const PropertyCardImg = (props) => {
  const {
    src,
    purpose,
    alt,
    className,
  } = props;

  const propertyImgClasses = classNames(
    className,
    'property-card__figure',
  );

  return (
    <figure className={propertyImgClasses}>
      <img
        className="property-card__image"
        src={src}
        alt={alt}
      />
      <figcaption>
        <span className="property-card__label">
          {purpose}
        </span>
      </figcaption>
    </figure>
  );
};

PropertyCardImg.propTypes = {
  src: PropTypes.string,
  purpose: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

PropertyCardImg.defaultProps = {
  src: '',
  purpose: '',
  alt: '',
  className: '',
};

export default PropertyCardImg;
