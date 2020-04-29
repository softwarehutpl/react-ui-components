import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../common/theme';
import Image from '../../atoms/Image/Image';
import setupIntersectionObserverMock from '../../../helpers/intersectionObserverMock';

describe('Image component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('should render correctly', () => {
    const image = create(
      <Image theme={theme} src="https://via.placeholder.com/150" alt="placeholder" />
    ).toJSON();
    expect(image).toMatchSnapshot();
  });

  it('should render image with custom className', () => {
    const image = create(<Image theme={theme} className="test-class" />).toJSON();
    expect(image.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render image with given size', () => {
    const image = create(<Image theme={theme} width={200} height={400} />).toJSON();
    expect(image).toHaveStyleRule('width', '200px');
    expect(image).toHaveStyleRule('height', '400px');
  });

  it('should render image with given src and alt properties', () => {
    const image = create(
      <Image theme={theme} src="https://via.placeholder.com/150" alt="placeholder" />
    ).toJSON();
    expect(image.props.src).toBe('https://via.placeholder.com/150');
    expect(image.props.alt).toBe('placeholder');
  });

  it('should render image with given object-fit', () => {
    const image = create(<Image theme={theme} objectFit="contain" />).toJSON();
    expect(image).toHaveStyleRule('object-fit', 'contain');
  });
});
