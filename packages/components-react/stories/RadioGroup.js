import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { RadioGroup } from '../src';

storiesOf('RadioGroup', module)
  .addWithInfo(
    'enabled',
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
  );
