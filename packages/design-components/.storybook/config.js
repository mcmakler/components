import React from 'react';  //eslint-disable-line
import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
