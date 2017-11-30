import React from 'react';
import PropTypes from 'prop-types';

import './PropertyCard.scss';
import PropertyCardImg from './PropertyCardImg';

const PropertyCard = (props) => {
  const { advertisement } = props;

  if (!advertisement) {
    return null;
  }

  const {
    imagePath,
    purpose,
    alttext,
    title,
    address,
    price,
    numberOfRooms,
    space,
  } = advertisement;

  return (
    <div className="property-card">
      <PropertyCardImg
        src={imagePath}
        alt={alttext}
        puprose={purpose}
      />
      <div className="property-card__content">
        <div className="property-card__title">
          {title}
        </div>
        <div className="address">
          {address.postalCode} {address.street} / {address.city}
        </div>
        <div className="bottom-content">
          <div className="price">
            {price} €
          </div>
          <div className="size-info">
            <span className="room">
              {`${numberOfRooms} Zimmer`}
            </span>
            <span className="space">
              <span>{parseInt(space, 10)}</span>
              <span> m</span><sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  advertisement: PropTypes.instanceOf(Object).isRequired,
};
PropertyCard.defaultProps = {};

export default PropertyCard;
