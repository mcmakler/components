import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { RadioButton } from '../src';

storiesOf('RadioButton', module)
  .addWithInfo(
    'enabled',
    `
      Radio buttons are used when a list of two or more options are mutually exclusive,
      meaning the user must select only one option. The example below shows how the Radio Button component
    `,
    () => (
      <RadioButton
        name="test"
        onChange={action('onChange')}
        value="standard"
        labelText="Standard Radio Button"
        id="radio-0"
        wrapperClass="some-class"
      />
    ),
  )
  .addWithInfo(
    'disabled',
    `
      Disabled radio button
    `,
    () => (
      <RadioButton
        name="test"
        onChange={action('onChange')}
        value="standard"
        labelText="Disabled Radio Button"
        id="radio-1"
        wrapperClass="some-class"
        disabled="disabled"
      />
    ),
  )
  .addWithInfo(
    'checked',
    `
      checked on default
    `,
    () => (
      <RadioButton
        name="test"
        onChange={action('onChange')}
        value="extraordinary"
        labelText="Checked Radio Button"
        id="radio-2"
        wrapperClass="some-class"
        checked="checked"
      />
    ),
  );
