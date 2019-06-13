import React from 'react';
import { storiesOf } from '@storybook/react';
import { RoomTourButton } from '../src';


storiesOf('RoomTourButton', module)
  .addWithInfo(
    'basic',
    '',
    () => (
      <RoomTourButton />
    ),
  )
  .addWithInfo(
    'custom text',
    '',
    () => (
      <RoomTourButton text="Lorem Ipsum" />
    ),
  );
