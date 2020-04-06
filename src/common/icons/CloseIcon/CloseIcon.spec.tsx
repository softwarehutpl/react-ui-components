import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CloseIcon from './CloseIcon';
import theme from '../../../common/theme';

describe('CloseIcon', () => {
  const tree = renderer
  .create(
    <CloseIcon theme={theme} color="primary" />
  ).toJSON();

  it('should render corectly', () => {
    expect(tree).toMatchSnapshot();
  });
});
