import React from 'react';
import { storiesOf } from '@storybook/react';
import { Gallery } from '../src';

const galleryImages = [
  {
    original: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998cd886f60.16589248.jpg',
    thumbnail: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998ce6c7ae6.80185912.jpg',
  },
  {
    original: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998e2561a73.19629148.jpg',
    thumbnail: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998e34d8114.18742660.jpg',
  },
  {
    original: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998fee5d117.15953156.jpg',
    thumbnail: 'https://d1dh1rmsjhx19r.cloudfront.net/assets/expose_v2/thumbnail.597998ffd033a3.06854982.jpg',
  },
];

storiesOf('Gallery', module)
  .addWithInfo(
    'With default properties',
    `
    Gallery demo with default properties
  `,
    () => (
      <Gallery
        items={galleryImages}
      />
    ),
  )
  .addWithInfo(
    'Without thumbnails and with autoplay is active',
    `
    Gallery demo without thumbnails and with autoplay is active
    `,
    () => (
      <Gallery
        items={galleryImages}
        autoPlay
        showThumbnails={false}
      />
    ),
  );
