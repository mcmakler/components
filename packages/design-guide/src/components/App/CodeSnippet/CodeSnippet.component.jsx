import React from 'react';
import Highlight from 'react-highlight';
import PropTypes from 'prop-types';

import './CodeSnippet.scss';

const CodeSnippet = props => (
  <Highlight className={`code-snippet ${props.language}`}>
    {props.children}
  </Highlight>
);

CodeSnippet.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeSnippet.defaultProps = {
  language: 'html',
};

export default CodeSnippet;
