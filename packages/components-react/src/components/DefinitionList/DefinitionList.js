import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import DefinitionData from './../DefinitionData/DefinitionData';
import DefinitionTerm from './../DefinitionTerm/DefinitionTerm';

import './DefinitionList.scss';

const DefinitionList = (props) => {
  const {
    className,
    items,
  } = props;

  const listClasses = classNames(
    className,
    'informationtable',
  );

  return (
    <div>
      {
        items.map(({ term, data }) => (
          <dl className={listClasses}>
            <DefinitionTerm label={term} key={term} />
            <DefinitionData label={data} key={data} />
          </dl>
        ))
      }
    </div>
  );
};


DefinitionList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.instanceOf(Array).isRequired,
};

DefinitionList.defaultProps = {
  className: '',
};

export default DefinitionList;
