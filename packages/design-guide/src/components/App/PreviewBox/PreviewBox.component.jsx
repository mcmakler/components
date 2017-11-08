import React from 'react';
import PropTypes from 'prop-types';
import './PreviewBox.scss';

const PreviewBoxComponent = props => (
  <div className={`preview-box ${props.className}`}>
    {props.children}
  </div>
);

PreviewBoxComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PreviewBoxComponent.defaultProps = {
  className: '',
};

export default PreviewBoxComponent;
