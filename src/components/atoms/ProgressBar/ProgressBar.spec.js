import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import ProgressBar from './ProgressBar';
import theme from '../../../common/theme';

describe('ProgressBar component', () => {
  it('should render default size empty progress bar with default theme colors', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    expect(progressBar).toHaveStyleRule('width', '250px');
    expect(progressBar).toHaveStyleRule('height', '15px');
    expect(progressBar).toHaveStyleRule('border', '1px solid #000000');
    expect(progressBar).toHaveStyleRule('background-color', '#ffffff');
  });

  it('should render progress bar with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar
          theme={theme}
          backgroundColor="yellow"
          barColor="green"
          noBorder
          margin="10px"
        />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    expect(progressBar).toHaveStyleRule('background-color', 'yellow');
    expect(progressBar.children[0]).toHaveStyleRule('background-color', 'green');
    expect(progressBar).toHaveStyleRule('border', 'none');
    expect(progressBar).toHaveStyleRule('margin', '10px');
  });

  it('should render bar with given progress and default bar color', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar progressValue={10} maxValue={100} />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    const innerBar = progressBar.children[0];
    expect(innerBar).toHaveStyleRule('width', '10%');
    expect(innerBar).toHaveStyleRule('background-color', '#000000');
  });

  it('should render bar with default label', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar progressValue={10} maxValue={100} height={20} />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    const label = progressBar.children[1];
    expect(label.children.join('')).toEqual('10%');
    expect(label).toHaveStyleRule('color', '#000');
    expect(label).toHaveStyleRule('top', '-25px');
    expect(label).toHaveStyleRule('left', 'auto');
  });

  it('should render bar with customized label', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar
          progressValue={10}
          maxValue={100}
          labelType="progressValue"
          labelColor="blue"
          width={100}
          labelPosition="right"
        />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    const label = progressBar.children[1];
    expect(label.children.join(' ')).toEqual('10 of 100');
    expect(label).toHaveStyleRule('color', 'blue');
    expect(label).toHaveStyleRule('top', '0');
    expect(label).toHaveStyleRule('left', '110px');
  });

  it('should render bar without label', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <ProgressBar noLabel />
      </ThemeProvider>
    );
    const progressBar = component.toJSON();
    expect(progressBar.children.length).toEqual(1);
  });
});
