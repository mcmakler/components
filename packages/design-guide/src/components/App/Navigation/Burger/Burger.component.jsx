import React from 'react';
import PropTypes from 'prop-types';
import './Burger.scss';

const BurgerComponent = props => (
  <div className={`burger ${props.active ? 'active' : ''}`} >
    <div className="burger__circle" >
      <div className="burger__bars" />
    </div>
  </div>
);

BurgerComponent.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default BurgerComponent;
