import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Label from './Label';

describe('<Label />', () => {
  it('should render corectly', () => {
    const tree = renderer
    .create(<Label />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have properly style if disabled', () => {
    const tree = renderer
    .create(<Label disabled/>)
    .toJSON();
    expect(tree).toHaveStyleRule('opacity', '0.4');
    expect(tree).toHaveStyleRule('cursor', 'not-allowed');
  });
});
