import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './RadioButton.scss';

const RadioButton = (props) => {
  const {
    disabled,
    id,
    labelText,
    name,
    onChange,
    required,
    value,
    wrapperClass,
    ...other
  } = props;

  const handleChange = (evt) => {
    onChange(value, name, evt);
  };

  const styledRadioClass = classNames(
    wrapperClass,
    'radio',
  );

  return (
    <div className={styledRadioClass}>
      <label htmlFor={id} className="radio__label" >
        <input
          className="radio__button"
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          onChange={handleChange}
          type="radio"
          value={value}
          {...other}
        />
        {labelText}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperClass: PropTypes.string,
};

RadioButton.defaultProps = {
  disabled: false,
  id: 'radio_0',
  labelText: 'please provide label',
  name: 'radio_button',
  onChange: () => {},
  required: false,
  wrapperClass: '',
};

export default RadioButton;
