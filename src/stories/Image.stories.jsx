import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select, text } from '@storybook/addon-knobs';
import Image from '../components/atoms/Image/Image';
import { OBJECT_FIT_OPTIONS } from '../common/constants/consts';

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <Image
      src={text(
        'src',
        'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg'
      )}
      width={number('Width', 300)}
      height={number('Height', 300)}
      objectFit={select('Object-fit', OBJECT_FIT_OPTIONS, OBJECT_FIT_OPTIONS.cover)}
    />
  );
});
