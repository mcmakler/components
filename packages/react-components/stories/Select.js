import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '../src';

const selectOptions = [
  {
    id: 1,
    option: 'Berlin',
  },
  {
    id: 2,
    option: 'Mieten',
  },
  {
    id: 3,
    option: 'Preis bis 22193€',
  },
  {
    id: 4,
    option: 'ab 2 Zimmer',
  },
];

storiesOf('Select', module)
  .addWithInfo(
    'primary',
    `
      This is primary select
    `,
    () => (
      <Select
        options={selectOptions}
        kind="primary"
      />
    ),
  )
  .addWithInfo(
    'secondary',
    `
      This is secondary select
    `,
    () => (
      <Select
        options={selectOptions}
        kind="secondary"
      />
    ),
  );
