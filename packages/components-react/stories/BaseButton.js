import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { BaseButton } from '../src';

storiesOf('BaseButton', module)
  .addWithInfo(
    'enabled',
    `
      This is Base button
    `,
    () => (
      <BaseButton
        onClick={action('clicked')}
        label="Standard Button"
      />
    ),
  );
