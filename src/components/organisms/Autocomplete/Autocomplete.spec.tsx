import React from 'react';
import { create, act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import Autocomplete from './Autocomplete';
import Input from '../../atoms/Input/Input';
import AutocompleteOptions from './AutocompleteOptions';
import theme from '../../../common/theme';

const options = [
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple'
];

describe('<Autocomplete />', () => {
  it('should render corectly', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Autocomplete options={options} />
      </ThemeProvider>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should set value on change event', () => {
    const event = { currentTarget: {
      value: 'test1'
    }} as any;

    const component = create(
      <ThemeProvider theme={theme}>
        <Autocomplete options={options} />
      </ThemeProvider>
    );
    const instance = component.root;
    const input = instance.findByType('input');
    expect(input.props.value).toEqual('')

    act(() => {
      input.props.onChange(event);
    });

    expect(input.props.value).toEqual('test1');
  });

  it('should call onSelect prop', () => {
    const mockOnSelect= jest.fn();
    const component = create(
      <ThemeProvider theme={theme}>
        <Autocomplete options={options} onSelect={mockOnSelect} />
      </ThemeProvider>);

    const instance = component.root;
    const autocomplete = instance.findByType(Autocomplete);

    act(() => {
      autocomplete.props.onSelect();
    });
    expect(mockOnSelect.mock.calls.length).toEqual(1);
  });

  it('should call list item onClick method', () => {
    const event = {
      currentTarget: {
        innerText: 'test1'
      }
    };
    const mockOnClick = jest.fn();
    const component = create( <AutocompleteOptions onClick={mockOnClick} options={options} />);
    const instance = component.root;
    const list = instance.findByType(AutocompleteOptions);

    act(() => {
      list.props.onClick(event);
    });

    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should call list item onMouseEnter method', () => {
    const mockOnEnter = jest.fn();
    const component = create( <AutocompleteOptions onMouseEnter={mockOnEnter} options={options} />);
    const instance = component.root;
    const list = instance.findByType(AutocompleteOptions);

    act(() => {
      list.props.onMouseEnter();
    });
    
    expect(mockOnEnter.mock.calls.length).toEqual(1);
  });

  it('should call list item onKeyDown method', () => {
    const mockOnKeyDown = jest.fn();
    const component = create( <Input onKeyDown={mockOnKeyDown} color="primary" theme={theme} />);
    const instance = component.root;
    const input = instance.findByType(Input);

    act(() => {
      input.props.onKeyDown();
    });
    
    expect(mockOnKeyDown.mock.calls.length).toEqual(1);
  });

  it('should render with propery hover option' , () => {
    const component = create( 
      <AutocompleteOptions 
        options={options} 
        hoverOption={1}
      />
    );

    const instance = component.root;
    const list = instance.findByType(AutocompleteOptions);
    expect(list.props.hoverOption).toEqual(1);
  });

  it('should render with proper activeOption on onKeyDown event', () => {
    const rootComponent = create(
      <ThemeProvider theme={theme}>
        <Autocomplete options={options} />
      </ThemeProvider>
    );
    const optionsComponent = create( 
      <AutocompleteOptions 
        options={options} 
        activeOption={0}
      />
    );

    const input = rootComponent.root.findByType('input');;
    const list = optionsComponent.root.findByType(AutocompleteOptions);

    act(() => {
      input.props.onKeyDown({keyCode: 13});
    });
    expect(list.props.activeOption).toEqual(0);
  });
});
