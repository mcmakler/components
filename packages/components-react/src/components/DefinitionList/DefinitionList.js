import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './DefinitionList.scss';

const DefinitionList = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames(
    className,
    'informationtable',
  );

  return (
    <dl className={listClasses} {...other}>
      {children}
    </dl>
  );
};


DefinitionList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DefinitionList.defaultProps = {
  children: undefined,
  className: '',
};

export default DefinitionList;
