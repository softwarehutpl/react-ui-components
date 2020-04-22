import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import AutocompleteOptions, { 
  OptionListWrapper,
  OptionItem 
} from './AutocompleteOptions';
import theme from '../../../common/theme';

const options = [
  'Papaya',
  'Apple',
  'Pear',
  'Peach',
  'Pomegranate',
  'Pineapple',
  'Banana',
];

describe('AutocompleteOptions', () => {
  it('should render corectly', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <AutocompleteOptions options={options} />
      </ThemeProvider>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have proper style when isActive props is true', () => {
    const component = create(
      <OptionItem
        color="primary"
        theme={theme}
        isActive
      />
    ).toJSON();
    expect(component).toHaveStyleRule('background-color', '#f6f6f6');
    expect(component).toHaveStyleRule('color', '#000000');
  });

  it('should have proper width and height if provided', () => {
    const component = create(
      <OptionListWrapper
        color="primary"
        theme={theme}
        width={100}
        height={100}
      />
    ).toJSON();
    expect(component).toHaveStyleRule('width', '100px');
    expect(component).toHaveStyleRule('height', '100px');
  });
});
