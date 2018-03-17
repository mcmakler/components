import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './DefinitionTerm.scss';

const DefinitionTerm = (props) => {
  const {
    className,
    label,
    ...other
  } = props;

  const itemClasses = classNames(
    className,
    'informationtable__term',
  );

  return (
    <dt className={itemClasses} {...other}>
      {label}
    </dt>
  );
};


DefinitionTerm.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DefinitionTerm.defaultProps = {
  className: '',
};

export default DefinitionTerm;
