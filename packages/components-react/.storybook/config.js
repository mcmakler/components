import React from 'react';  //eslint-disable-line
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import './_custom_style.scss';

function loadStories() {
  const req = require.context('../stories', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

setAddon(infoAddon);

addDecorator(story => (
  <div className='storycontainer'>
    {story()}
  </div>
));

configure(loadStories, module);
