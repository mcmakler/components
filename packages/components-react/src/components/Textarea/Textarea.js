import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Textarea.scss';

const Textarea = (props) => {
  const {
    className,
    id,
    onChange,
    onClick,
    placeholder,
    required,
    ...other
  } = props;

  const styledTextareaClass = classNames(
    className,
    'textarea',
  );

  const handleChange = (evt) => {
    onChange(id, evt);
  };

  const handleClick = (evt) => {
    onClick(id, evt);
  };

  return (
    <textarea
      className={styledTextareaClass}
      id={id}
      onChange={handleChange}
      onClick={handleClick}
      placeholder={placeholder}
      required={required}
      {...other}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  className: '',
  id: '',
  onChange: () => {},
  onClick: () => {},
  placeholder: '',
  required: false,
};

export default Textarea;
