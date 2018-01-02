import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TimelineHeader = (props) => {
  const {
    headline,
    claim,
    className,
    children,
  } = props;

  const headerClasses = classNames(
    className,
    'timelineheader',
  );

  return (
    <header className={headerClasses}>
      <h2 className="timelineheader__headline">
        {headline}
      </h2>
      <h3 className="timelineheader__claim">
        {claim}
      </h3>
      {children}
    </header>
  );
};

TimelineHeader.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string,
  claim: PropTypes.string,
  className: PropTypes.string,
};

TimelineHeader.defaultProps = {
  headline: '',
  claim: '',
  className: '',
};

export default TimelineHeader;
