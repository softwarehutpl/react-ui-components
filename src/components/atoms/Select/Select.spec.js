import React from 'react';
import { create, act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import theme from '../../../common/theme';
import Select from './Select';
import {SelectToggle} from './SelectToggle';
import SelectOption from './SelectOption';

describe('Select component', () => {
  it('should render select toggle with given placeholder', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select placeholder="foo" options={[]} />
      </ThemeProvider>
    );
    const instance = component.root;
    const selectToggle = instance.findByType(SelectToggle);
    expect(selectToggle.props.children[0]).toBe('foo');
  });

  it('should show select given options after click', () => {
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
    const toggle = instance.findByType(SelectToggle);
    act(() => {
      toggle.props.onClick();
    })
    const options = instance.findAllByType(SelectOption);
    const optionOne = options[0].findByType('div');
    const optionTwo = options[1].findByType('div');
    expect(optionOne.props.children).toBe('one');
    expect(optionTwo.props.children).toBe('two');
  });

  it('should call onChange method', () => {
    const mockOnChange = jest.fn();
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
          ]}
          onChange={mockOnChange}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const toggle = instance.findByType(SelectToggle);
    act(() => {
      toggle.props.onClick();
    })
    const selectOption = instance.findByType(SelectOption);
    const option = selectOption.findByType('div');
    act(() => {
      option.props.onClick();
    })
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render select with default style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[]}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    expect(select).toHaveStyleRule('width', '200px');
    expect(select).toHaveStyleRule('margin', '0px');
  });

  it('should render select with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[]}
          width={400}
          margin={10}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    expect(select).toHaveStyleRule('width', '400px');
    expect(select).toHaveStyleRule('margin', '10px');
  });

  it('should render select toggle with default style for default primary color', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[]}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    const selectToggle = select.children[0];
    expect(selectToggle).toHaveStyleRule('background-color', '#000000');
    expect(selectToggle).toHaveStyleRule('color', '#ffffff');
    expect(selectToggle).toHaveStyleRule('padding', '15px');
  })

  it('should render select toggle with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[]}
          fontColor="red"
          backgroundColor="blue"
          padding={10}
        />
      </ThemeProvider>
    );
    const select = component.toJSON();
    const selectToggle = select.children[0];
    expect(selectToggle).toHaveStyleRule('background-color', 'blue');
    expect(selectToggle).toHaveStyleRule('color', 'red');
    expect(selectToggle).toHaveStyleRule('padding', '10px');
  })

  it('should render select option with default style for default primary color', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
          ]}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const toggle = instance.findByType(SelectToggle);
    act(() => {
      toggle.props.onClick();
    })
    const option = component.toJSON().children[1].children[0];
    expect(option).toHaveStyleRule('background-color', '#ffffff');
    expect(option).toHaveStyleRule('color', '#000000');
    expect(option).toHaveStyleRule('padding', '7.5px 15px');
  })

  it('should render select option with custom style', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Select
          options={[
            { label: 'one', value: 1 },
          ]}
          optionsBackgroundColor="red"
          optionsFontColor="blue"
          padding={20}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const toggle = instance.findByType(SelectToggle);
    act(() => {
      toggle.props.onClick();
    })
    const option = component.toJSON().children[1].children[0];
    expect(option).toHaveStyleRule('background-color', 'red');
    expect(option).toHaveStyleRule('color', 'blue');
    expect(option).toHaveStyleRule('padding', '10px 20px');
  })
});
