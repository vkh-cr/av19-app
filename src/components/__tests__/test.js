import React from 'react';
import Speakers from "./Speakers"
import speakers from "../data/speakers";
import renderer from 'react-test-renderer';

it('works', () => {
    const tree = renderer.create(<Speakers  />).toJSON();
    expect(tree).toMatchSnapshot();
  });