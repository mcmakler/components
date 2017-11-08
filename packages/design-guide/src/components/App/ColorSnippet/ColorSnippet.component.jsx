import React from 'react';
import PropTypes from 'prop-types';
import './ColorSnippet.scss';

const ColorSnippet = props => (
  <div className={`color-snippet columns ${props.className}`} >
    <div
      className={`color-snippet__color-panel column ${props.border ? 'color-snippet__color-panel_border' : ''}`}
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      {props.color}
    </div>
    <div className="color-snippet__content column" >
      {props.children}
    </div>
  </div>
);

ColorSnippet.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node,
  border: PropTypes.bool,
};

ColorSnippet.defaultProps = {
  className: '',
  color: 'black',
  textColor: 'white',
  children: '',
  border: false,
};

export default ColorSnippet;
