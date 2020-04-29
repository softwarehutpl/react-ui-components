import React from 'react';
import { create, act } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';
import Card, { CartIcon, HeartIcon, FullHeartIcon } from './Card';
import CardDetails from './CardDetails';
import mockProductDetails from '../../../common/mocks/productDetails';
import setupIntersectionObserverMock from '../../../helpers/intersectionObserverMock';

describe('Card component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  it('should render card with custom class', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card className="test-class" productDetails={mockProductDetails} />
      </ThemeProvider>
    ).toJSON();
    expect(card.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render card product details', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} />
      </ThemeProvider>
    );
    const instance = card.root;
    const productDetails = instance.findByType(CardDetails).findByType('div');
    expect(productDetails.children[0].props.children).toBe('Croissant');
    expect(productDetails.children[1].props.children).toBe('Taste our delicious croissants...');
    expect(productDetails.children[2].props.children).toBe('3.00 EUR');
  });

  it('should not render description when hideDescription props is passed', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} hideDescription hideWishlistIcon />
      </ThemeProvider>
    );
    const instance = card.root;
    const productDetails = instance.findByType(CardDetails).findByType('div');
    expect(productDetails.children.length).toEqual(2);
    expect(productDetails.children[0].props.children).toBe('Croissant');
    expect(productDetails.children[1].props.children).toBe('3.00 EUR');
  });

  it('should not render price when hidePrice props is passed', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} hidePrice hideWishlistIcon />
      </ThemeProvider>
    );
    const instance = card.root;
    const productDetails = instance.findByType(CardDetails).findByType('div');
    expect(productDetails.children.length).toEqual(2);
    expect(productDetails.children[0].props.children).toBe('Croissant');
    expect(productDetails.children[1].props.children).toBe('Taste our delicious croissants...');
  });

  it('should render product details with font color based on color prop', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} color="secondary" />
      </ThemeProvider>
    );
    const productName = getByText('Croissant');
    expect(productName).toHaveStyle('color: #2196f3');
  });

  it('should render horizontal card by default', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} />
      </ThemeProvider>
    ).toJSON();
    expect(card).toHaveStyleRule('flex-direction', 'column');
  });

  it('should render vertical card when proper direction props is passed', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} direction="vertical" />
      </ThemeProvider>
    ).toJSON();
    expect(card).toHaveStyleRule('flex-direction', 'row');
  });

  it('should render with passed images', () => {
    const { container, getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} />
      </ThemeProvider>
    );
    const image = getByAltText('Croissant');
    expect(image).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_1280.jpg'
    );
    fireEvent.mouseEnter(container.firstChild);
    expect(image).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2016/11/29/05/07/baked-goods-1867459_1280.jpg'
    );
  });

  it('should call onCartIconClick', () => {
    const mockOnClick = jest.fn();
    const e = { stopPropagation: jest.fn() };
    const component = create(
      <ThemeProvider theme={theme}>
        <Card
          productDetails={mockProductDetails}
          onCartIconClick={mockOnClick}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const cartIcon = instance.findByType(CartIcon);
    act(() => {
      cartIcon.props.onClick(e);
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should call onWishlistIconClick', () => {
    const mockOnClick = jest.fn();
    const e = { stopPropagation: jest.fn() };
    const component = create(
      <ThemeProvider theme={theme}>
        <Card
          productDetails={mockProductDetails}
          onWishlistIconClick={mockOnClick}
        />
      </ThemeProvider>
    );
    const instance = component.root;
    const wishlistIcon = instance.findByType(HeartIcon);
    act(() => {
      wishlistIcon.props.onClick(e);
    })
    expect(mockOnClick.mock.calls.length).toEqual(1);
  })

  it('should call onClick', () => {
    const mockOnClick = jest.fn();
    const component = create(
      <ThemeProvider theme={theme}>
        <Card productDetails={mockProductDetails} onClick={mockOnClick} />
      </ThemeProvider>
    );
    const instance = component.root;
    const card = instance.findByType(Card);
    act(() => {
      card.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
