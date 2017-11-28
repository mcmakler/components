import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './DefinitionData.scss';

const DefinitionData = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const itemClasses = classNames(
    'informationtable__data',
    className,
  );

  return (
    <dd className={itemClasses} {...other}>
      {children}
    </dd>
  );
};


DefinitionData.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DefinitionData.defaultProps = {
  children: undefined,
  className: '',
};

export default DefinitionData;
