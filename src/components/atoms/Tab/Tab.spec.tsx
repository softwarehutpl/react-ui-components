import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Tab, { Wrapper } from './Tab';
import theme from '../../../common/theme';
import { ThemeProvider } from 'styled-components';

describe('<Tab />', () => {
  it('should render corectly', () => {
    const component = create(<Wrapper theme={theme} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with custom class', () => {
    const component = create(<Wrapper className="test-class" theme={theme} />);
    const instance = component.root;
    instance.findByType('div');
    expect(instance.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render with styles based on theme color', () => {
    const component = create(<Wrapper color="primary" theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('color', '#8c8989');
  });

  it('should render with color based on fontColor prop', () => {
    const component = create(<Wrapper fontColor="blue" theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('color', 'blue');
  });

  it('should call onClick method', () => {
    const mockFn = jest.fn();
    const component = create(
      <ThemeProvider theme={theme}>
        <Tab label="tab"  onClick={mockFn} />
      </ThemeProvider>
    );
    const instance = component.root;
    const tab = instance.findByType(Tab);

    act(() =>  {
      tab.props.onClick();
    });
    expect(mockFn.mock.calls.length).toEqual(1);
  });

  it('should have proper style when disabled', () => {
    const component = create(<Wrapper color="primary" theme={theme} disabled />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'not-allowed');
    expect(component).toHaveStyleRule('opacity', '0.4');
  });

  it('should have proper style when backgroundColor and color is provided', () => {
    const component = create(
      <Wrapper 
        theme={theme} 
        backgroundColor="grey"
        fontColor="pink"
      />
    ).toJSON();
    expect(component).toHaveStyleRule('background-color', 'grey');
    expect(component).toHaveStyleRule('color', 'pink');
  });

  it('should have proper style when active backgroundColor and active color is provided', () => {
    const component = create(
      <Wrapper 
        theme={theme} 
        activeBackgroundColor="blue"
        activeColor="green"
      />
    ).toJSON();
    expect(component).toHaveStyleRule('background-color', 'blue');
    expect(component).toHaveStyleRule('color', 'green');;
  });

  it('should have proper style when disabled backgroundColor and disabled color is provided', () => {
    const component = create(
      <Wrapper 
        theme={theme} 
        disabledBackgroudColor="black"
        disabledColor="grey"
        disabled
      />
    ).toJSON();
    expect(component).toHaveStyleRule('background-color', 'black');
    expect(component).toHaveStyleRule('color', 'grey');
  });

  it('should reneder propery style when padding is provided', () => {
    const component = create(
      <Wrapper 
        theme={theme} 
        padding={10}
      />
    ).toJSON();
    expect(component).toHaveStyleRule('padding', '10px');
  });
});
