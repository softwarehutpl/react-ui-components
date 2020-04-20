import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import Autocomplete, { OptionItem } from './Autocomplete';
import Input from '../../atoms/Input/Input';
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
  let wrapper: any;


  beforeEach(() => {
    wrapper = shallow(
      <Autocomplete 
        options={options} 
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render corectly', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Autocomplete options={options}/>
      </ThemeProvider>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render input component', () => {
    expect(wrapper.find(Input).length).toEqual(1)
  })

  it('should set value on change event', () => {
    const event = { currentTarget: {
      value: 'test1'
    }} as any;

    expect(wrapper.find(Input).prop('value')).toEqual('');
    wrapper.find(Input).prop('onChange')(event);
    expect(wrapper.find(Input).prop('value')).toEqual('test1');
  });
});
