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

Gallery.defaultProps = {
  ...ImageGallery.defaultProps,
  thumbnailPosition: 'top',
  showPlayButton: false,
};

export default Gallery;
