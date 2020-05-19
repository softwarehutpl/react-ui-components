import React from 'react';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';
import Wishlist from './Wishlist';
import WishlistItem, { StyledWishlistDeleteIcon } from './WishlistItem';
import wishlistProducts from '../../../common/mocks/wishlistProducts';
import setupIntersectionObserverMock from '../../../helpers/intersectionObserverMock';
import Text from '../../atoms/Text/Text';

describe('Wishlist component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('should render correctly', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Wishlist products={wishlistProducts} />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('should render wishlist item with proper product data', () => {
    const item = create(
      <ThemeProvider theme={theme}>
        <WishlistItem product={wishlistProducts[0]} />
      </ThemeProvider>
    );
    const instance = item.root;
    const info = instance.findByType(WishlistItem).findAllByType(Text);
    expect(info[0].props.children).toBe('Blue summer hat');
    expect(info[1].props.children).toBe('25.00 EUR');
  });

  it('should render wishlist item text in color based on color prop', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Wishlist products={wishlistProducts} color="secondary" />
      </ThemeProvider>
    );
    const text = getByText('Blue summer hat');
    expect(text).toHaveStyle('color: #2196f3');
  });

  it('should render wishlist item name and price with custom props', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Wishlist
          products={wishlistProducts}
          nameTextProps={{ fontColor: 'red', fontWeight: '800' }}
          priceTextProps={{ fontSize: 12, textAlign: 'center' }}
        />
      </ThemeProvider>
    );
    const name = getByText('Blue summer hat');
    const price = getByText('25.00 EUR');
    expect(name).toHaveStyle('color: red');
    expect(name).toHaveStyle('font-weight: 800');
    expect(price).toHaveStyle('font-size: 12px');
    expect(price).toHaveStyle('text-align: center');
  });

  it('should call onClick function', () => {
    const mockFn = jest.fn();
    const wishlist = create(
      <ThemeProvider theme={theme}>
        <Wishlist products={wishlistProducts} onItemClick={mockFn} />
      </ThemeProvider>
    )
    const instance = wishlist.root;
    const item = instance.findAllByType(WishlistItem)[0].findByType('div');
    act(() => {
      item.props.onClick();
    })
    expect(mockFn.mock.calls.length).toEqual(1);
  })

  it('should call onDeleteIconClick function', () => {
    const mockFn = jest.fn();
    const e = { stopPropagation: jest.fn() };
    const wishlist = create(
      <ThemeProvider theme={theme}>
        <Wishlist products={wishlistProducts} onDeleteIconClick={mockFn} />
      </ThemeProvider>
    )
    const instance = wishlist.root;
    const deleteIcon = instance.findAllByType(StyledWishlistDeleteIcon)[0];
    act(() => {
      deleteIcon.props.onClick(e);
    })
    expect(mockFn.mock.calls.length).toEqual(1);
  })
});
