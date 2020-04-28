import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../components/atoms/Button/Button';
import { COLOR_OPTIONS } from '../common/constants/consts';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <Button
      buttonTitle={text('Button title', 'Button')}
      disabled={boolean('Disabled', false)}
      onClick={() => {}}
      color={select('Color', COLOR_OPTIONS, 'primary')}
    />
  );
});
