import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import cn from 'classnames';

import './Gallery.scss';

import RoomTourButton from './../RoomTourButton/RoomTourButton';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRoomTour: false,
      isFullScreen: false,
      roomTourPositioned: false,
    };
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
    this.handleRoomTourClick = this.handleRoomTourClick.bind(this);
  }

  handleFullScreenChange() {
    const state = { ...this.state };
    state.isFullScreen = !state.isFullScreen;

    // Reset show room tour
    if (!state.isFullScreen && state.showRoomTour) {
      state.showRoomTour = false;
    }

    // Relocate the position on DOM for styling porpuses
    if (!state.roomTourPositioned) {
      const galleryBottomRoomTour = document.getElementsByClassName('gallery__bottom-room-tour')[0];
      const galleryContent = document.getElementsByClassName('image-gallery-content')[0];
      const iframe = document.getElementsByClassName('gallery__iframe')[0];

      galleryContent.append(galleryBottomRoomTour);
      galleryContent.append(iframe);
      state.roomTourPositioned = true;
    }

    // Set updated state
    this.setState(state);
  }

  handleRoomTourClick() {
    const state = { ...this.state };

    // Show room tour on slider when fullscreen
    if (state.isFullScreen) {
      state.showRoomTour = !state.showRoomTour;
    } else {
      this.props.roomTourButtonClick();
    }

    // Set updated state
    this.setState(state);
  }

  render() {
    return (
      <div className="gallery">
        {(this.props.linkToRoomTour &&
          <div className="gallery__top-room-tour">
            <RoomTourButton text="360º" onClick={this.handleRoomTourClick} />
          </div>
        )}
        <ImageGallery
          {...this.props}
          // useBrowserFullscreen={false}
          onScreenChange={() => {
            this.handleFullScreenChange();
            if (this.props.onScreenChange) {
              this.props.onScreenChange(this.state.isFullScreen);
            }
          }}
          onSlide={() => {
            if (this.state.showRoomTour) {
              this.setState({ ...this.state, showRoomTour: false });
            }
          }}
          renderItem={(item) => {
            const { onImageError } = this.props;

            return (
              <div className="image-gallery-image">
                {
                  item.imageSet ?
                    <picture
                      onLoad={this.props.onImageLoad}
                      onError={onImageError}
                    >
                      {
                        item.imageSet.map((source, index) => (
                          <source
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            media={source.media}
                            srcSet={source.srcSet}
                            type={source.type}
                          />
                        ))
                      }
                      <img
                        alt={item.originalAlt}
                        src={item.original}
                      />
                    </picture>
                  :
                    (
                      <div className="gallery__slide" style={{ backgroundImage: `url("${item.original}")` }} />
                    )
                }
                {
                  item.description &&
                    <span className="image-gallery-description">
                      {item.description}
                    </span>
                }
              </div>
            );
          }}
        />
        {((this.props.linkToRoomTour) &&
          <div>
            <div
              className={cn('gallery__bottom-room-tour', { 'gallery__bottom-room-tour--visible': this.state.isFullScreen })}
            >
              <RoomTourButton
                text="360º"
                isSquare
                onClick={this.handleRoomTourClick}
              />
            </div>
            <div>
              <iframe
                title="360"
                src={this.props.linkToRoomTour}
                className={cn('gallery__iframe', { 'gallery__iframe--visible': (this.state.showRoomTour && this.state.isFullScreen) })}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  ...ImageGallery.propTypes,
  linkToRoomTour: PropTypes.string,
  roomTourButtonClick: PropTypes.func,
};

Gallery.defaultProps = Object.assign({}, ImageGallery.defaultProps, {
  showPlayButton: false,
  linkToRoomTour: '',
  roomTourButtonClick: () => {},
});

export default Gallery;
