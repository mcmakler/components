import React from 'react';
import Autosuggest from 'react-autosuggest';
import { FaMapMarkerAlt } from 'react-icons/fa/index';
import './LocationPicker.scss';

function renderInput(inputProps) {
  return (
    <div className="locationpicker">
      <i className="locationpicker__icon">
        <FaMapMarkerAlt />
      </i>
      <input
        type="text"
        {...inputProps}
      />
    </div>
  );
}
const LocationPicker = props => (
  <Autosuggest
    renderInputComponent={renderInput}
    {...props}
  />
);

LocationPicker.propTypes = { ...Autosuggest.propTypes };

LocationPicker.defaultProps = Object.assign({}, Autosuggest.defaultProps);

export default LocationPicker;
