import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import classNames from 'classnames/bind';
import './LocationPicker.scss';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

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

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class LocationPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(`^${escapedValue}`, 'i');

    return this.props.suggestionList.filter(suggestion => regex.test(suggestion.name));
  }

  render() {
    const { value, suggestions } = this.state;

    const inputClasses = classNames(
      'input',
      'locationpicker__input',
      this.props.inputclass,
    );

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange,
      className: inputClasses,
    };

    return (
      <Autosuggest
        className="locationpicker"
        suggestions={suggestions}
        renderInputComponent={renderInput}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

LocationPicker.propTypes = {
  placeholder: PropTypes.string,
  inputclass: PropTypes.string,
  suggestionList: PropTypes.instanceOf(Object).isRequired,
};

LocationPicker.defaultProps = {
  placeholder: '',
  inputclass: '',
};

export default LocationPicker;
