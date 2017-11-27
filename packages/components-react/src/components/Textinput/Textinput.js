import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Textinput.scss';

const Textinput = (props) => {
  const {
    className,
    id,
    onChange,
    onClick,
    placeholder,
    required,
    type,
    value,
    ...other
  } = props;

  const styledInputClass = classNames(
    'input',
    className,
  );

  const handleChange = (evt) => {
    onChange(evt);
  };

  const handleClick = (evt) => {
    onClick(evt);
  };

  return (
    <input
      {...other}
      className={styledInputClass}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onClick={handleClick}
      required={required}
      value={value}
    />
  );
};

Textinput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Textinput.defaultProps = {
  className: '',
  id: 'input_0',
  onChange: () => {},
  onClick: () => {},
  placeholder: 'please provide placeholder',
  required: false,
  value: undefined,
  defaultValue: undefined,
};

export default Textinput;
