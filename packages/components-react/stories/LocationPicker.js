import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { LocationPicker } from '../src/';

const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'C#',
    year: 2000,
  },
  {
    name: 'C++',
    year: 1983,
  },
  {
    name: 'Clojure',
    year: 2007,
  },
  {
    name: 'Elm',
    year: 2012,
  },
  {
    name: 'Go',
    year: 2009,
  },
  {
    name: 'Haskell',
    year: 1990,
  },
  {
    name: 'Java',
    year: 1995,
  },
  {
    name: 'Javascript',
    year: 1995,
  },
  {
    name: 'Perl',
    year: 1987,
  },
  {
    name: 'PHP',
    year: 1995,
  },
  {
    name: 'Python',
    year: 1991,
  },
  {
    name: 'Ruby',
    year: 1995,
  },
  {
    name: 'Scala',
    year: 2003,
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}


class LocationPickerDemo extends React.Component {
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
      <LocationPicker
        suggestions={suggestions}
        renderSuggestion={renderSuggestion}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        inputProps={inputProps}
      />
    );
  }
}

LocationPickerDemo.propTypes = {
  placeholder: PropTypes.string,
  inputclass: PropTypes.string,
  suggestionList: PropTypes.instanceOf(Object).isRequired,
};

LocationPickerDemo.defaultProps = {
  placeholder: '',
  inputclass: '',
};

storiesOf('LocationPicker', module)
  .add(
    'location',
    withInfo({
      text: 'String or React Element with docs about my component',
    })(() => (
      <LocationPickerDemo
        suggestionList={languages}
        placeholder="Type in a Programming language"
        inputclass="myFancyClass"
      />
    )),
  );
