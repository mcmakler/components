import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './DefinitionData.scss';

const DefinitionData = (props) => {
  const {
    className,
    label,
    ...other
  } = props;

  const itemClasses = classNames(
    className,
    'informationtable__data',
  );

  return (
    <dd className={itemClasses} {...other}>
      {label}
    </dd>
  );
};


DefinitionData.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

DefinitionData.defaultProps = {
  className: '',
};

export default DefinitionData;
