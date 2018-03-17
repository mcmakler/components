import React from 'react';
import renderer from 'react-test-renderer';
import BaseButton from './BaseButton';

test('renders', () => {
  const label = 'test';
  const tree = renderer.create(<BaseButton label={label} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('should be disabled', () => {
  const label = 'test';
  const tree = renderer.create(
    <BaseButton
      disabled={true}
      label={label}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.props).toHaveProperty('disabled', true);
});

test('must have correct label', () => {
  const label = 'test';
  const tree = renderer.create(
    <BaseButton
      label={label}
    />
  ).toJSON();

  expect(tree.children).toEqual(expect.arrayContaining([label]));
});
