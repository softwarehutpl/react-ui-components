import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import axios from 'axios';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Pagination from '../components/molecules/Pagination/Pagination';
import { BOX_SHADOW_OPTIONS } from '../common/constants/storybook_options';
import './styles.scss';

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories
 .add('Default', () => {

  const [data, setCurrentData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsInCart, handleAddToCart] = useState(['0']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://5ea6988884f6290016ba6e36.mockapi.io/blogs?page=${activePage}&limit=${9}`);
        setCurrentData(result.data);
      } catch (error) {
      }
    };
    fetchData();
  }, [activePage]);

  const onHandleAddToCart = (itemId: any) => {
    const items = [...itemsInCart, itemId];
    // user should do here some action: send to api, state, anything
    handleAddToCart(items);
  }

    return (
      <Pagination
      goToFirstPage={console.log}
      goToLastPage={() => console.log()}
      changePage={setActivePage}
      buttonPageBackground="grey"
      buttonPageColor="black"
      items={data}
      itemsInCart={itemsInCart}
      showAddToCartIcon={boolean('Show add to cart icon', true)}
      onAddToCart={onHandleAddToCart}
      descriptionAlignment='left'
      itemInCartIconColor={text('Item in cart icon color', 'hotpink')}
      itemNotInCartIconColor={text('Item is not in cart icon color', 'white')}
      buttonBorderColor={text('Item border', '#585858')}
      itemBorder={text('Item border', '#ddd')}
      noCardItemShadow={boolean('No shadow on item', true)}
      cardBorderRadius={5}
      pagesNumber={8}
      />
     );
  })

