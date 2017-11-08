import React from 'react';
import PropTypes from 'prop-types';

import './Page.scss';

const PageComponent = props => (
  <div>
    <div className="page-header">
      <h1 className="heading heading_primary">{props.title}</h1>
      <hr className="page-header__separator" />
      <h3 className="heading heading_tertiary">{props.subtitle}</h3>
    </div>
    <main className={props.className}>
      {props.children}
    </main>
  </div>
);

PageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

PageComponent.defaultProps = {
  subtitle: '',
  className: '',
  children: <div>hola mundo</div>,
};

export default PageComponent;
