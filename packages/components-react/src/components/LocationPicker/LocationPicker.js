import React from 'react';
import Autosuggest from 'react-autosuggest';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import './LocationPicker.scss';

function renderInput(inputProps) {
  return (
    <div className="locationpicker">
      <i className="locationpicker__icon">
        <FaMapMarker />
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
