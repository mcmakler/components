import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';

const Select = (props) => {
  const {
    className,
    kind,
    onChange,
    onClick,
    options,
    ...other
  } = props;

  if (!options) return null;

  const optionList = options.map(i =>
    (
      <option
        key={i.id}
        value={i.value}
      >
        {i.option}
      </option>
    ));

  const styledSelectClass = classNames({
    select: true,
    'select--secondary': kind === 'secondary',
    [className]: className,
  });

  const handleChange = (evt) => {
    onChange(evt);
  };

  const handleClick = (evt) => {
    onClick(evt);
  };

  return (
    <div className={styledSelectClass} >
      <i className="select__icon">
        <FaChevronDown />
      </i>
      <select
        className="select__select"
        onChange={handleChange}
        onClick={handleClick}
        {...other}
      >
        {optionList}
      </select>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  options: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  onChange: () => {},
  onClick: () => {},
};

export default Select;
