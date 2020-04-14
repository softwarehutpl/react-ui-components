import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import theme from '../../../common/theme';
import Toast from './Toast';

describe('Toast component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should render correctly', () => {
    const tree = create(<Toast theme={theme} message="Lorem ipsum" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render toast with given title and text', () => {
    const component = create(<Toast message="Lorem ipsum" title="title" theme={theme} />);
    const instance = component.root;
    const header = instance.findByType('h4');
    const message = instance.findByType('p');
    expect(header.props.children).toBe('title');
    expect(message.props.children).toBe('Lorem ipsum');
  });

  it('should render toast with default style', () => {
    const component = create(<Toast message="Lorem ipsum" title="title" theme={theme} />);
    const toast = component.toJSON();
    expect(toast).toHaveStyleRule('width', '300px');
    expect(toast).toHaveStyleRule('background-color', '#fff');
    expect(toast).toHaveStyleRule('color', '#000');
    expect(toast).toHaveStyleRule('padding', '15px');
  });

  it('should render toast with custom style', () => {
    const component = create(
      <Toast
        message="Lorem ipsum"
        title="title"
        width={200}
        backgroundColor="red"
        fontColor="yellow"
        theme={theme}
        padding={20}
      />
    );
    const toast = component.toJSON();
    expect(toast).toHaveStyleRule('width', '200px');
    expect(toast).toHaveStyleRule('background-color', 'red');
    expect(toast).toHaveStyleRule('color', 'yellow');
    expect(toast).toHaveStyleRule('padding', '20px');
  });

  it('should render toast in default bottom position', () => {
    const component = create(<Toast theme={theme} />);
    const toast = component.toJSON();
    expect(toast).toHaveStyleRule('bottom', '50px');
  });

  it('should render toast in top position', () => {
    const component = create(<Toast theme={theme} position="top" />);
    const toast = component.toJSON();
    expect(toast).toHaveStyleRule('top', '50px');
    expect(toast).toHaveStyleRule('bottom', 'auto');
  });

  // TODO: fix this test - search more about jest.advanceTimersByTime and jest.runAllTimers and
  // error: 'Cannot read property 'apply' of undefined'
  it('should call onClose method with default delay', () => {
    const mockOnClose = jest.fn();
    const component = create(<Toast theme={theme} onClose={mockOnClose} />);
    expect(mockOnClose).not.toBeCalled();
    jest.advanceTimersByTime(3000);
    expect(mockOnClose).toBeCalled();
  });

  it('should call onClick method', () => {
    const mockOnClick = jest.fn();
    const component = create(<Toast onClick={mockOnClick} theme={theme} />);
    const instance = component.root;
    const toast = instance.findByType(Toast);
    act(() => {
      toast.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
