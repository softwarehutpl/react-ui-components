import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../components/atoms/Button/Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <Button
      buttonTitle={text('Button title', 'Button')}
      disabled={boolean('Disabled', false)}
      color={select(
        'Color',
        {
          primary: 'primary',
          secondary: 'secondary',
          error: 'error',
          warning: 'warning',
          info: 'info',
          success: 'success',
        },
        'primary'
      )}
    />
  );
});
