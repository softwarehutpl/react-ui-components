import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../components/atoms/Button/Button';
import { theme } from '../common/theme'

describe('Button component', () => {
  test("renders button component with proper buttonTitle", () => {
    let component;
    act(() => {
      component = create(<Button buttonTitle="TITLE" theme={theme} />);
    });
    const instance = component.root;
    const button = instance.findByType("button");
    expect(button.props.children).toBe("TITLE");
  });

  test("call button onClick method", () => {
    let component;
    const mockOnClick = jest.fn();
    act(() => {
      component = create(<Button onClick={mockOnClick} theme={theme} />)
    });
    const instance = component.root;
    const button = instance.findByType(Button);
    act(() => {
      button.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  test("renders button component with theme background color based on color prop", () => {
    let component;
    act(() => {
      component = create(<Button theme={theme} color="secondary" />);
    });
    const buttonJson = component.toJSON();
    expect(buttonJson).toHaveStyleRule('background-color', theme.colors.secondary.base)
  })

  test("renders button component with given border width", () => {
    let component;
    act(() => {
      component = create(<Button theme={theme} borderWidth={1} />);
    });
    const buttonJson = component.toJSON();
    expect(buttonJson).toHaveStyleRule('border-width', '1px')
  })
});
