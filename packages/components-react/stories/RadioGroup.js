import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { RadioGroup } from '../src';

const multiple = [
  {
    buttons: [
      { value: 'Foo', labelText: 'Foo Label' },
      { value: 'Bar', labelText: 'Bar Label' },
    ],
  },
  {
    buttons: [
      { value: 'Foo', labelText: 'Foo Label' },
      { value: 'Bar', labelText: 'Bar Label' },
    ],
  },
];

storiesOf('RadioGroup', module)
  .addWithInfo(
    'basic',
    '',
    () => (
      <RadioGroup
        buttons={[
          { value: 'Foo', labelText: 'Foo Label' },
          { value: 'Bar', labelText: 'Bar Label' },
        ]}
        onChange={action('onChange')}
      />
    ),
  )
  .addWithInfo(
    'multiple',
    `
      Note: when having multiple RadioGroups in one page, each RadioGroup must have a unique 'id' property
    `,
    () => (
      <div>
        { multiple.map((rg, i) => (
          <RadioGroup id={i} {...rg} onChange={action('onChange')} />
        )) }
      </div>
    ),
  );
