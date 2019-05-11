import React from 'react';
import renderer from 'react-test-renderer';
import Speakers from './Speakers';
import speakers from '../data/speakers';

it('works', () => {
  const tree = renderer.create(<Speakers />).toJSON();
  expect(tree).toMatchSnapshot();
});
