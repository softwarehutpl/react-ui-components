import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';
import CartIcon from './CartIcon';
import Badge from '../../atoms/Badge/Badge';

describe('Cart Icon component', () => {
  it('should render correctly', () => {
    const cartIcon = create(
      <ThemeProvider theme={theme}>
        <CartIcon />
      </ThemeProvider>
    ).toJSON();
    expect(cartIcon).toMatchSnapshot();
  })

  it('should render icon in default theme color and default size', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <CartIcon />
      </ThemeProvider>
    ).toJSON();
    const cartIcon = tree.children[0];
    expect(cartIcon).toHaveStyleRule('background-color', '#000000');
    expect(cartIcon).toHaveStyleRule('color', '#ffffff');
    expect(cartIcon).toHaveStyleRule('width', '40px');
  });

  it('should render icon in custom colors', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <CartIcon backgroundColor="red" fontColor="blue" width={30} />
      </ThemeProvider>
    ).toJSON();
    const cartIcon = tree.children[0];
    expect(cartIcon).toHaveStyleRule('background-color', 'red');
    expect(cartIcon).toHaveStyleRule('color', 'blue');
    expect(cartIcon).toHaveStyleRule('width', '30px');
  })

  it('should render with product number label', () => {
    const cartIcon = create(
      <ThemeProvider theme={theme}>
        <CartIcon numberOfItemsInCart={3} />
      </ThemeProvider>
    )
    const instance = cartIcon.root;
    const badge = instance.findByType(Badge).findByType('span');
    expect(badge.props.children).toBe(3);
  })

  it('should call onClick method', () => {
    const mockFn = jest.fn();
    const e = { stopPropagation: jest.fn() };
    const cartIcon = create(
      <ThemeProvider theme={theme}>
        <CartIcon onCartIconClick={mockFn}  />
      </ThemeProvider>
    )
    const instance = cartIcon.root;
    const icon = instance.findByType('svg');
    act(() => {
      icon.props.onClick(e);
    })
    expect(mockFn.mock.calls.length).toEqual(1);
  })
});
