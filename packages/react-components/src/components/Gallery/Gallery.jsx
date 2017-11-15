import React from 'react';
import ImageGallery from 'react-image-gallery';
import './GalleryComponent.scss';

const Gallery = (props) => {

  return (
    <ImageGallery
      {...props}
    />
  );
};

Gallery.propTypes = ImageGallery.propTypes;

ImageGallery.defaultProps.thumbnailPosition = 'top';
ImageGallery.defaultProps.showPlayButton = false;

Gallery.defaultProps = ImageGallery.defaultProps;

export default Gallery;
