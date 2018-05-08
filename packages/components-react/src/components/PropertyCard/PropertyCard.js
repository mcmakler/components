import React from 'react';
import PropTypes from 'prop-types';

import './PropertyCard.scss';
import PropertyCardImg from './PropertyCardImg';

const PropertyCard = (props) => {
  const { advertisement } = props;

  const {
    imagePath,
    purpose,
    hoverText,
    altText,
    title,
    address,
    price,
    numberOfRooms,
    space,
    target,
  } = advertisement;

  return (
    <div className="property-card">
      <a href={target}>
        <PropertyCardImg
          src={imagePath}
          alt={altText}
          purpose={purpose}
          hoverText={hoverText}
        />
        <div className="property-card__content">
          <div className="title">
            {title}
          </div>
          <div className="address">
            {address.postalCode} {address.street} / {address.city}
          </div>
          <div className="bottom-content">
            <div className="price">
              {
                typeof price === 'number' ?
                `${price.toLocaleString('de-DE')} €` :
                price
              }
            </div>
            <div className="size-info">
              <span className="room">
                { numberOfRooms && `${numberOfRooms} Zimmer`}
              </span>
              <span className="space">
                <span>{parseInt(space, 10)}</span>
                <span> m</span><sup>2</sup>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

PropertyCard.propTypes = {
  advertisement: PropTypes.instanceOf(Object).isRequired,
};
PropertyCard.defaultProps = {};

export default PropertyCard;
