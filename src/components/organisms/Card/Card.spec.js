import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';
import Card from './Card';
import CardDetails from './CardDetails';
import mockProductDetails from '../../../common/mocks/productDetails';

describe('Card component', () => {
  it('should render card with custom class', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card
          className="test-class"
          productDetails={mockProductDetails}
        />
      </ThemeProvider>
    ).toJSON();
    expect(card.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render card product details', () => {
    const card = create(
      <ThemeProvider theme={theme}>
        <Card
          productDetails={mockProductDetails}
        />
      </ThemeProvider>
    );
    const instance = card.root;
    const productDetails = instance.findByType(CardDetails).findByType('div');
    expect(productDetails.children[0].props.children).toBe('product');
    expect(productDetails.children[1].props.children).toBe('Lorem ipsum');
    expect(productDetails.children[2].props.children).toBe('10.00 EUR');
  });
});
