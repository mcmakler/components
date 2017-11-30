import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TimelineLine = (props) => {
  const {
    position,
  } = props;

  const timelineClasses = classNames({
    timeline__line_start: position === 'first',
    timeline__line_end: position === 'last',
    timeline__line: true,
  });

  return (
    <hr className={timelineClasses} />
  );
};

TimelineLine.propTypes = {
  position: PropTypes.oneOf(['first', 'last']),
};

TimelineLine.defaultProps = {
  position: undefined,
};

export default TimelineLine;
