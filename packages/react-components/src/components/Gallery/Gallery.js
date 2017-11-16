import React from 'react';
import ImageGallery from 'react-image-gallery';
import './GalleryComponent.scss';

const Gallery = props => (
  <ImageGallery
    {...props}
  />
);

Gallery.propTypes = { ...ImageGallery.propTypes };

Gallery.defaultProps = Object.assign({}, ImageGallery.defaultProps, {
  thumbnailPosition: 'top',
  showPlayButton: false,
});

export default Gallery;