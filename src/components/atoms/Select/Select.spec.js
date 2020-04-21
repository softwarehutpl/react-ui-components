import React from 'react';
import { create, act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import theme from '../../../common/theme';
import Select from './Select';

describe('Select component', () => {
  it('should render select with given placeholder', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select placeholder="foo" options={[]} />
      </ThemeProvider>
    );
    const instance = component.root;
    const select = instance.findByType(Select);
    expect(select.props.placeholder).toBe('foo');
  });

  it('should render select with given options', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: '1' },
            { label: 'two', value: '2' },
          ]}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const options = instance.findAllByType('option');
    console.log(options[0].props)
    expect(options[0].children[0]).toBe('one');
    expect(options[0].props.value).toBe('1');
    expect(options[1].children[0]).toBe('two');
    expect(options[1].props.value).toBe('2');
  });

  it('should call onChange method', () => {
    const mockOnChange = jest.fn();
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
          ]}
          onChange={mockOnChange}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const select = instance.findByType('select');
    act(() => {
      select.props.onChange();
    });
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render select with default style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
          ]}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    expect(select).toHaveStyleRule('width', '200px');
    expect(select).toHaveStyleRule('padding', '15px');
  });

  it('should render select with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
            { label: 'two', value: 2 },
          ]}
          width={400}
          padding={5}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    expect(select).toHaveStyleRule('width', '400px');
    expect(select).toHaveStyleRule('padding', '5px');
  })
});
