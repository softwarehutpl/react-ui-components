import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Checkbox, { 
  CheckboxContainer,
  StyledLabel,
  HiddenCheckbox,
} from './Checkbox';

const mockFn = jest.fn();

const props = {
  className: 'test-class',
  checked: false, 
  disabled: false,
  onChange: mockFn,
  required: false,
  inputRef: {},
  name: 'test',
};

describe('Checkbox Component', () => {
  let wrapper: any;
  
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />);
  });

  afterEach(() => {
    wrapper = undefined;
  });

  it('should render corectly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a label container', () => {
    expect(wrapper.find(StyledLabel).length).toBe(1);
  });

  it('should trigger onChange function', () => {
    const input = wrapper.find(HiddenCheckbox);
    input.simulate('change', {target: {checked: true}});
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have margin style if provided', () => {
    const tree = renderer
    .create(
      <CheckboxContainer margin={10} />
    )
    .toJSON();
    expect(tree).toHaveStyleRule('margin', '10px');
  })
});
