import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { Textinput } from '../src';

storiesOf('Textinput', module)
  .addWithInfo(
    'text',
    `
    Text fields enable the user to interact with and input data. A single line field field is
    used when the input anticipated by the user is a single line of text as opposed to a paragraph.
    The example below shows an enabled Text Input component. The default type is 'text' and its
    value can be either 'string' or 'number'.
    `,
    () => (
      <Textinput
        type="text"
        id="input_0"
        placeholder="insert Text here"
      />
    ),
  )
  .addWithInfo(
    'number',
    `
    Text field for typing in Numbers
    `,
    () => (
      <Textinput
        type="number"
        id="input_1"
        placeholder="insert Number here"
        onChange={action('onChange')}
        min="10"
      />
    ),
  )
  .addWithInfo(
    'password',
    `
    Password field
    `,
    () => (
      <Textinput
        type="password"
        id="input_2"
        placeholder="Password"
        onChange={action('onChange')}
      />
    ),
  );
