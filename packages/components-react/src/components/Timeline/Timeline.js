import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Timeline.scss';

const Timeline = (props) => {
  const {
    children,
    className,
  } = props;

  const timelineClasses = classNames(
    className,
    'timeline',
  );

  return (
    <section className={timelineClasses}>
      {children}
    </section>
  );
};

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Timeline.defaultProps = {
  className: '',
};

export default Timeline;
