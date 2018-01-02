import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TimelineItem = (props) => {
  const {
    children,
    className,
  } = props;

  const timelineClasses = classNames(
    className,
    'timeline__item',
  );
  return (
    <div className={timelineClasses}>
      {children}
    </div>
  );
};

TimelineItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TimelineItem.defaultProps = {
  className: '',
};

export default TimelineItem;
