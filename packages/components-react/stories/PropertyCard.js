import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropertyCard } from '../src';

const advertisementData = {
  imagePath: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg',
  ctaType: 'Buy',
  title: 'Elf Wohnungen auf einmal – 5% Mietrendite! MFH in Ettlingen',
  address: {
    street: 'Torstr.',
    number: 19,
    postalCode: 10119,
    city: 'Berlin',
  },
  price: 36000,
  numberOfRooms: 3,
  space: 102,
};

storiesOf('PropertyCard', module)
  .addWithInfo(
    'PropertyCard',
    `
  PropertyCard demo
`,
    () => (
      <PropertyCard
        advertisement={advertisementData}
      />
    ),
  );
