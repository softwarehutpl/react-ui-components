import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Badge, { BadgeWrapper, BadgeCircle } from './Badge';
import theme from '../../../common/theme'


describe('<Badge', () => {
  it('should render corectly', () => {
    const component = create(<BadgeWrapper theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with custom class', () => {
    const component = create(<BadgeWrapper theme={theme} className="test-class" />).toJSON();
    expect(component.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render with proper margin and padding style if provided', () => {
    const component = create(<BadgeWrapper theme={theme} margin={20} padding={10} />).toJSON();
    expect(component).toHaveStyleRule('margin', '20px');
    expect(component).toHaveStyleRule('padding', '10px');
  });

  it('should render with default background color and font color', () => {
    const component = create(<BadgeCircle theme={theme} color="primary" />).toJSON();
    expect(component).toHaveStyleRule('background-color', '#000000');
    expect(component).toHaveStyleRule('color', '#ffffff');
  });

  it('should render with proper backgroundColor and fontColor if provied', () => {
    const component = create(<BadgeCircle theme={theme} backgroundColor="hotpink" fontColor="#fff" />).toJSON();
    expect(component).toHaveStyleRule('background-color', 'hotpink');
    expect(component).toHaveStyleRule('color', '#fff');
  });

  it('should render with proper horizontal and vertical position', () => {
    const component = create(<BadgeCircle theme={theme} position={{horizontal: 'left', vertical: 'bottom'}} />).toJSON();
    expect(component).toHaveStyleRule('left', '-20px');
    expect(component).toHaveStyleRule('bottom', '-15px');
  });
});
