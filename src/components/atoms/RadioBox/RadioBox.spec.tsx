import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { lighten } from 'polished';
import theme from '../../../common/theme';
import RadioBox, { 
  RadioWrapper,
  Mark,
  Input,
} from './RadioBox';

const mockFn = jest.fn();

const props = {
  checked: false,
  onChange: mockFn,
  className: 'test'
};

describe('<RadioBox', () => {
  let wrapper: any;
  let tree: any;

  const createComponentTree = (
    Component: any, 
    color: string,
    props: any
  ) => {
    return renderer
    .create(
      <Component 
        color={color} 
        checked
        theme={theme} 
        {...props} 
      />
      )
    .toJSON();
  }

  beforeEach(() => {
    wrapper = shallow(<RadioBox {...props} />);
  });

  afterEach(() => {
    wrapper = undefined;
  });
  
  it('should render corectly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render radiobox wrapper ', () => {
    expect(wrapper.find(RadioWrapper).length).toBe(1);
  });

  it('should render mark element', () => {
    expect(wrapper.find(Mark).length).toBe(1);
  });

  it('should render input element', () => {
    expect(wrapper.find(Input).length).toBe(1);
  });

  it('should render with primary color', () => {
    tree = createComponentTree(Mark, 'primary');
    expect(tree).toHaveStyleRule('background-color', '#000000');
    expect(tree).toHaveStyleRule('border-color', '#000000');
  });

  it('should render with secondary color', () => {
    tree = createComponentTree(Mark,'secondary');
    expect(tree).toHaveStyleRule('background-color', '#3690e3');
    expect(tree).toHaveStyleRule('border-color', '#3690e3');
  });

  it('should have margin style if provided', () => {
    tree = renderer
    .create(
      <RadioWrapper margin={10} />
    )
    .toJSON();
    expect(tree).toHaveStyleRule('margin', '10px');
  });

  it('should have backgroundColor style if provided', () => {
    tree = renderer
    .create(
      <RadioWrapper
        withLabel={true}
        color="secondary"
        theme={theme}
      />
    )
    .toJSON();
    const backgroundColor= lighten(0.28,'#75b0e6');
    expect(tree).toHaveStyleRule('background-color', backgroundColor, { modifier: ':hover' });
  });
});
