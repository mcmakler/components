import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../src';

storiesOf('Footer', module)
  .addWithInfo(
    'enabled',
    `
      This is the default footer for the mcmakler sites
    `,
    () => (
      <Footer />
    ),
  );
