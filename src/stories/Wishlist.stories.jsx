import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number, color } from '@storybook/addon-knobs';
import Wishlist from '../components/organisms/Wishlist/Wishlist';
import wishlistProducts from '../common/mocks/wishlistProducts';
import { COLOR_OPTIONS, FONT_WEIGHT_OPTIONS } from '../common/constants/consts';
import './styles.scss';

const stories = storiesOf('Wishlist', module);
stories.addDecorator(withKnobs);

const productName = 'Product name';
const price = 'Price';
const main = 'Main';
const cartIcon = 'Cart icon';

stories.add('common', () => {
  const [products, setProducts] = useState(wishlistProducts);

  const onProductDelete = (product) => {
    const newProducts = products.filter((item) => item.id !== product.id);
    setProducts(newProducts);
  };

  const onAddToCart = (product) => {
    const newProducts = products.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          inCartCount: item.inCartCount + 1,
        };
      }
      return item;
    });
    setProducts(newProducts);
  };

  return (
    <Wishlist
      products={products}
      className="wishlist"
      color={select('color', COLOR_OPTIONS, COLOR_OPTIONS.primary, main)}
      hideCartIcon={boolean('Hide cart icon', false, main)}
      hideDeleteIcon={boolean('Hide delete icon', false, main)}
      onItemClick={action('wishlist item clicked!')}
      deleteIconColor={color('Delete icon color', '', main)}
      cartIconProps={{
        color: select('color', COLOR_OPTIONS, COLOR_OPTIONS.primary, cartIcon),
        fontColor: color('font color', '', cartIcon),
        backgroundColor: color('background color', '', cartIcon),
        hideCartNumberLabel: boolean('hide cart label', true, cartIcon),
        width: number('width', 32, cartIcon),
        scaleOnHover: boolean('scale on hover', false, cartIcon),
        onCartIconClick: onAddToCart,
      }}
      nameTextProps={{
        fontWeight: select(
          'font weight',
          FONT_WEIGHT_OPTIONS,
          FONT_WEIGHT_OPTIONS['600'],
          productName
        ),
        fontSize: number('font size', 16, 'Font size', productName),
        color: select('color', COLOR_OPTIONS, COLOR_OPTIONS.primary, productName),
        fontColor: color('font color', '', productName),
      }}
      priceTextProps={{
        fontWeight: select('font weight', FONT_WEIGHT_OPTIONS, FONT_WEIGHT_OPTIONS['600'], price),
        fontSize: number('font size', 16, 'Font size', price),
        color: select('color', COLOR_OPTIONS, COLOR_OPTIONS.primary, price),
        fontColor: color('font color', '', price),
      }}
      onDeleteIconClick={onProductDelete}
    />
  );
});
