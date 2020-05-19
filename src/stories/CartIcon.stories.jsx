import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import CartIcon from '../components/molecules/CartIcon/CartIcon';
import { COLOR_OPTIONS } from '../common/constants/consts';
import './styles.scss';

const stories = storiesOf('Cart icon', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  const [productCount, setProductCount] = useState(0);

  return (
    <CartIcon
      className="cartIcon"
      numberOfItemsInCart={productCount}
      onCartIconClick={() => {
        setProductCount(productCount + 1);
      }}
      color={select('Color', COLOR_OPTIONS, COLOR_OPTIONS.primary)}
      width={number('Width', 40)}
      hideCartNumberLabel={boolean('Hide label', false)}
      scaleOnHover={boolean('Scale on hover', false)}
    />
  );
});
