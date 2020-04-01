import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../components/atoms/Button/Button';
import theme from '../common/theme';

describe('Button component', () => {
  it('should render correctly', () => {
    const tree = create(<Button theme={theme} buttonTitle="TITLE" onClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render button component with proper buttonTitle', () => {
    const component = create(<Button buttonTitle="TITLE" theme={theme} />);
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.props.children).toBe('TITLE');
  });

  it('should call button onClick method', () => {
    const mockOnClick = jest.fn();
    const component = create(<Button onClick={mockOnClick} theme={theme} />);
    const instance = component.root;
    const button = instance.findByType(Button);
    act(() => {
      button.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should render button with custom class', () => {
    const component = create(<Button theme={theme} className="test-class" />);
    const button = component.toJSON();
    expect(button.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render button component with selected theme styling', () => {
    const component = create(<Button theme={theme} color="secondary" />);
    const button = component.toJSON();
    expect(button).toHaveStyleRule('background-color', '#3690e3');
    expect(button).toHaveStyleRule('color', '#75b0e6');
    expect(button).toHaveStyleRule('border-color', '#75b0e6');
    expect(button).toHaveStyleRule('background-color', '#034d91', { modifier: ':hover' });
  });

  it('should render disabled button', () => {
    const component = create(<Button theme={theme} disabled />);
    const button = component.toJSON();
    expect(button.props.disabled).toBe(true);
  });

  it('should render button component with color based on fontColor prop', () => {
    const component = create(<Button theme={theme} fontColor="red" />);
    const button = component.toJSON();
    expect(button).toHaveStyleRule('color', 'red');
  });

  it('should render button with custom hover styles', () => {
    const component = create(<Button theme={theme} hoverBackgroundColor="yellow" hoverBorderColor="red" />);
    const button = component.toJSON();
    expect(button).toHaveStyleRule('border-color', 'red', { modifier: ':hover' });
    expect(button).toHaveStyleRule('background-color', 'yellow', { modifier: ':hover' });
  });

  it('should render button with custom border', () => {
    const component = create(
      <Button
        theme={theme}
        noBorder={false}
        borderColor="blue"
        borderWidth={3}
        borderRadius={10}
      />
    );
    const button = component.toJSON();
    expect(button).toHaveStyleRule('border', 'solid');
    expect(button).toHaveStyleRule('border-color', 'blue');
    expect(button).toHaveStyleRule('border-width', '3px');
    expect(button).toHaveStyleRule('border-radius', '10px');
  });

  it('should render button with default border', () => {
    const component = create(<Button theme={theme} noBorder={false} />);
    const button = component.toJSON();
    expect(button).toHaveStyleRule('border', 'solid');
    expect(button).toHaveStyleRule('border-color', '#ffffff');
    expect(button).toHaveStyleRule('border-width', '2px');
    expect(button).toHaveStyleRule('border-radius', '4px');
  });

  it('should render button component with custom padding and margin', () => {
    const component = create(<Button theme={theme} padding={30} margin={10} />);
    const button = component.toJSON();
    expect(button).toHaveStyleRule('padding', '30px');
    expect(button).toHaveStyleRule('margin', '10px');
  });
});
