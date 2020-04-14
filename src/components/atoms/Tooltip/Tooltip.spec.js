import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';
import Tooltip from './Tooltip';
import theme from '../../../common/theme';

describe('Tooltip component', () => {
  it('should render correctly', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Tooltip tooltipText="tooltip text" targetElementId="some_id" />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render tooltip with given text', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Tooltip tooltipText="tooltip text" />
      </ThemeProvider>
    );
    const instance = component.root;
    const tooltip = instance.findByType('span');
    expect(tooltip.props.children).toBe('tooltip text');
  });

  it ('should render tooltip with given class', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Tooltip className="test-class" />
      </ThemeProvider>
    );
    const instance = component.root;
    const tooltip = instance.findByType(Tooltip);
    expect(tooltip.props.className).toEqual(expect.stringContaining('test-class'));
  })

  it('should show and hide tooltip on hover target element', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Tooltip targetElementId="target_el" tooltipText="text" />
        <span id="target_el">target span</span>
      </ThemeProvider>
    );
    const targetSpan = getByText('target span');
    const tooltip = getByText('text');

    expect(tooltip).toHaveStyle('visibility: hidden');
    fireEvent.mouseEnter(targetSpan);
    expect(tooltip).toHaveStyle('visibility: visible');
    fireEvent.mouseLeave(targetSpan);
    expect(tooltip).toHaveStyle('visibility: hidden');
  })

  it('should render tooltip with default style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Tooltip />
      </ThemeProvider>
    );
    const tooltip = component.toJSON();
    expect(tooltip).toHaveStyleRule('background-color', '#000000');
    expect(tooltip).toHaveStyleRule('color', '#ffffff');
    expect(tooltip).toHaveStyleRule('opacity', '1');
  });

  it('should render tooltip with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Tooltip backgroundColor="red" fontColor="orange" opacity={0.5} />
      </ThemeProvider>
    );
    const tooltip = component.toJSON();
    expect(tooltip).toHaveStyleRule('background-color', 'red');
    expect(tooltip).toHaveStyleRule('color', 'orange');
    expect(tooltip).toHaveStyleRule('opacity', '0.5');
  });
});
