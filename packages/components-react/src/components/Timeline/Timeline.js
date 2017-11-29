import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './Timeline.scss';

export const Timeline = (props) => {
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
  children: PropTypes.node,
  className: PropTypes.string,
};

Timeline.defaultProps = {
  children: undefined,
  className: '',
};

export const TimelineHeader = (props) => {
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
  children: PropTypes.node,
  headline: PropTypes.string,
  claim: PropTypes.string,
  className: PropTypes.string,
};

TimelineHeader.defaultProps = {
  children: undefined,
  headline: '',
  claim: '',
  className: '',
};

export const TimelineContainer = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="timeline__content">
      {children}
    </div>
  );
};

TimelineContainer.propTypes = {
  children: PropTypes.node,
};

TimelineContainer.defaultProps = {
  children: undefined,
};

export const TimelineItem = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="timeline__item">
      {children}
    </div>
  );
};

TimelineItem.propTypes = {
  children: PropTypes.node,
};

TimelineItem.defaultProps = {
  children: undefined,
};

export const TimelineItems = (props) => {
  const {
    children,
  } = props;

  return (
    <div className="timeline__items">
      {children}
    </div>
  );
};

TimelineItems.propTypes = {
  children: PropTypes.node,
};

TimelineItems.defaultProps = {
  children: undefined,
};

export const TimelineLine = (props) => {
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
