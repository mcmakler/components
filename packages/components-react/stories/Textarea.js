import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { Textarea } from '../src';


storiesOf('Textarea', module)
  .addWithInfo(
    'default',
    `
      textarea
    `,
    () => (
      <Textarea
        id="textarea_0"
        placeholder="insert Text here"
        onChange={action('onChange')}
      />
    ),
  )
  .addWithInfo(
    'disabled',
    `
      textarea
    `,
    () => (
      <Textarea
        id="textarea_0"
        placeholder="insert Text here"
        onChange={action('onChange')}
        disabled="disabled"
      />
    ),
  );
