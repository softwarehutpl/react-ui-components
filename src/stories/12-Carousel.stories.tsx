import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Drawer from '../components/molecules/Drawer/Drawer';
import Carousel from '../components/molecules/Carousel/Carousel';
import Button from '../components/atoms/Button/Button';
import { COLOR_OPTIONS } from '../common/constants/consts';
import './styles.scss';

const arrow = {
  color: 'white',
}

const sliderItems = [{
  src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  captureComponent: <span className='capture-class'> Image first </span>,
}, {
  src: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  captureComponent: <span className='capture-class'> Image second </span>,
}, {
  src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  captureComponent: <span className='capture-class'> Image third </span>,
}, {
  src: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
  captureComponent: <span className='capture-class'>Image 4th </span>,
},  {
  src: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=8',
  captureComponent: <span className='capture-class'> Image 5th</span>,
}, {
  src: 'https://images.unsplash.com/photo-1533907650686-70576141c030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=6000&q=80',
  captureComponent: <span className='capture-class'> some capyture </span>,
},  {
  src: 'https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  captureComponent: <span className='capture-class'> some capyture </span>,
}
];

const stories = storiesOf('Carousel', module);
stories.addDecorator(withKnobs);

stories.add('Common', () => {

  return (
    <Carousel
      slides={sliderItems}
      autoslider={boolean('Set autoslider', true)}
      arrow={arrow}
      buttonDist={number('Button distance', 50)}
      backgroundColor={text('Background color', 'transparent')}
      itemsPerSlide={number('Items on one slide', 2)}
      verticalPadding={number('Verical padding', 0)}
      width={number('Width', 800)}
    />
  );
});
