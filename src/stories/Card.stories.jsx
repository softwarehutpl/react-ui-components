import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Card from '../components/organisms/Card/Card';
import { COLOR_OPTIONS } from '../common/constants/consts';
import productDetails from '../common/mocks/productDetails';
import './styles.scss';

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

const { name, shortDescription, price, hoverImageUrl, imageUrl } = productDetails;
const PRODUCT_DETAILS = 'Product details';

stories.add('common (horizontal)', () => {
  const [isFav, setIsFav] = useState(false);
  return (
    <Card
      className="cardWrapper_horizontal"
      productDetails={{
        name: text('Product name', name, PRODUCT_DETAILS),
        shortDescription: text('Short description', shortDescription, PRODUCT_DETAILS),
        price: text('Price', price, PRODUCT_DETAILS),
        imageUrl: text('Product image', imageUrl, PRODUCT_DETAILS),
        hoverImageUrl: text('Hover image', hoverImageUrl, PRODUCT_DETAILS),
      }}
      color={select('Color', COLOR_OPTIONS, COLOR_OPTIONS.primary)}
      hideDescription={boolean('Hide description', false)}
      hidePrice={boolean('Hide price', false)}
      hideCartIcon={boolean('Hide cart icon', false)}
      hideWishlistIcon={boolean('Hide wishlist icon', false)}
      isOnWishlist={isFav}
      onWishlistIconClick={() => {
        setIsFav(!isFav);
      }}
      onClick={action('on card click')}
      onCartIconClick={action('on cart icon click')}
    />
  );
});

stories.add('vertical', () => {
  return (
    <Card
      className="cardWrapper_vertical"
      productDetails={productDetails}
      color={select('Color', COLOR_OPTIONS, COLOR_OPTIONS.primary)}
      direction="vertical"
    />
  );
});
