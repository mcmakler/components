import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './RoomTourButton.scss';

const RoomTourButton = (props) => {
  const {
    className,
    text,
    isSquare,
    onClick,
    ...other
  } = props;

  const handleClick = (evt) => {
    onClick(evt);
  };

  return (
    <button
      className={cn(className, 'room-tour-btn', { 'room-tour-btn--square': isSquare })}
      onClick={handleClick}
      {...other}
    >
      <img src="/static/icons/camera360.svg" alt="camera-360" className="room-tour-btn__icon" />
      <span>{text}</span>
    </button>
  );
};

RoomTourButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isSquare: PropTypes.bool,
  onClick: PropTypes.func,
};

RoomTourButton.defaultProps = {
  className: '',
  text: '360°',
  isSquare: false,
  onClick: () => {},
};

export default RoomTourButton;
