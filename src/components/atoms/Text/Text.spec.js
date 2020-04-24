import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';
import Text from './Text';

describe('Text component', () => {
  it('should render correctly', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Text>
          some text
        </Text>
      </ThemeProvider>
    ).toJSON();
    expect(component).toMatchSnapshot()
  })

  it('should render with custom class', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Text className="test-class">
          some text
        </Text>
      </ThemeProvider>
    ).toJSON();
    expect(component.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render with text', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Text>
          foo
        </Text>
      </ThemeProvider>
    ).toJSON();
    expect(component.children[0]).toEqual('foo');
  })

  it('should render text with default style for secondary theme', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Text color="secondary">
          foo
        </Text>
      </ThemeProvider>
    ).toJSON();
    expect(component).toHaveStyleRule('color', '#2196f3');
    expect(component).toHaveStyleRule('font-weight', 'normal');
    expect(component).toHaveStyleRule('line-height', '1.5');
    expect(component).toHaveStyleRule('font-size', '16px');
    expect(component).toHaveStyleRule('text-align', 'justify');
  })

  it('should render text with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Text fontColor="red" fontWeight="700" lineHeight={2} fontSize={20} textAlign="center">
          foo
        </Text>
      </ThemeProvider>
    ).toJSON();
    expect(component).toHaveStyleRule('color', 'red');
    expect(component).toHaveStyleRule('font-weight', '700');
    expect(component).toHaveStyleRule('line-height', '2');
    expect(component).toHaveStyleRule('font-size', '20px');
    expect(component).toHaveStyleRule('text-align', 'center');
  })
});
