import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import './GalleryComponent.scss';

const Gallery = (props) => {
  const {
    images,
    showPlayButton,
    showFullScreenButton,
    showThumbnails,
  } = props;

  if (!images.length) return null;

  return (
    <ImageGallery
      items={images}
      showPlayButton={showPlayButton}
      showFullscreenButton={showFullScreenButton}
      thumbnailPosition="top"
      showThumbnails={showThumbnails}
    />
  );
};

Gallery.propTypes = {
  images: PropTypes.instanceOf(Object).isRequired,
  showPlayButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  showThumbnails: PropTypes.bool,
};

Gallery.defaultProps = {
  showPlayButton: false,
  showFullScreenButton: true,
  showThumbnails: true,
};

export default Gallery;
