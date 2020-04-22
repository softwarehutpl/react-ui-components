import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text, color } from '@storybook/addon-knobs';
import Toast from '../components/atoms/Toast/Toast';
import { COLOR_OPTIONS } from '../common/constants/storybook_options';

const stories = storiesOf('Toast', module);
stories.addDecorator(withKnobs);

const toastPositionOptions = {
  top: 'top',
  bottom: 'bottom',
}

stories.add('default', () => {
  return (
    <Toast
      title={text('Title', 'Toast')}
      message={text('Message', 'Some message here')}
      width={number('Width', 300)}
      color={select('Color', COLOR_OPTIONS, 'primary')}
      position={select('Position', toastPositionOptions, 'bottom')}
      backgroundColor={color('Background', '#fff', 'Colors')}
      fontColor={color('Font', '#000', 'Colors')}
    />
  )
})
