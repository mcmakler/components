import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { Select } from '../src';

const selectOptions = [
  {
    id: 1,
    option: 'Berlin',
    value: 'city_1234',
  },
  {
    id: 2,
    option: 'Mieten',
    value: 'for-rent',
  },
  {
    id: 3,
    option: 'Preis bis 22193€',
    value: 'pricemax',
  },
  {
    id: 4,
    option: 'ab 2 Zimmer',
    value: '2',
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
        kind="primary"
        options={selectOptions}
        onChange={action('onChange')}
      />
    ),
  )
  .addWithInfo(
    'disabled',
    `
      This is disabled primary select
    `,
    () => (
      <Select
        disabled="disabled"
        kind="primary"
        options={selectOptions}
        onChange={action('onChange')}
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
        kind="secondary"
        options={selectOptions}
        onChange={action('onChange')}
      />
    ),
  );
