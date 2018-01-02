import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TimelineContainer = (props) => {
  const {
    children,
    className,
  } = props;

  const timelinecontainerClasses = classNames(
    className,
    'timeline__content',
  );


  return (
    <div className={timelinecontainerClasses}>
      {children}
    </div>
  );
};

TimelineContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TimelineContainer.defaultProps = {
  className: '',
};

export default TimelineContainer;
