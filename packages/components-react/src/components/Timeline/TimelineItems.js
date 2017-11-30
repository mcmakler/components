import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TimelineItems = (props) => {
  const {
    children,
    className,
  } = props;

  const timelineClasses = classNames(
    className,
    'timeline__items',
  );
  return (
    <div className={timelineClasses}>
      {children}
    </div>
  );
};

TimelineItems.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TimelineItems.defaultProps = {
  className: '',
};

export default TimelineItems;
