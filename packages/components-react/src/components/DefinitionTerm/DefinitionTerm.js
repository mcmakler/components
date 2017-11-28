import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './DefinitionTerm.scss';

const DefinitionTerm = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const itemClasses = classNames(
    className,
    'informationtable__term',
  );

  return (
    <dt className={itemClasses} {...other}>
      {children}
    </dt>
  );
};


DefinitionTerm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DefinitionTerm.defaultProps = {
  children: undefined,
  className: '',
};

export default DefinitionTerm;
