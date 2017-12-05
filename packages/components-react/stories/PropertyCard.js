import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropertyCard } from '../src';

const advertisementData = {
  imagePath: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg',
  purpose: 'Mieten',
  hoverText: 'Jetzt Immobilie ansehen',
  altText: 'Sonnenbalkon in Friedrichshain',
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
  target: 'https://www.mcmakler.de',
};

storiesOf('PropertyCard', module)
  .addWithInfo(
    'PropertyCard',
    `
  PropertyCard demo
`,
    () => (
      <div style={{ display: 'flex' }}>
        <PropertyCard
          advertisement={advertisementData}
        />
        <PropertyCard
          advertisement={advertisementData}
        />
      </div>
    ),
  );
