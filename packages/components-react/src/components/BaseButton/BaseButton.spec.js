import React from 'react';
import renderer from 'react-test-renderer';
import BaseButton from './BaseButton';

test('Correctly renders.', () => {
  const label = 'Render Test';
  const tree = renderer.create(<BaseButton label={label} />).toJSON();

  expect(tree).toMatchSnapshot();
});
