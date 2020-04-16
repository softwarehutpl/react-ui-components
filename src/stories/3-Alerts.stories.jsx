import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import Alerts from '../components/atoms/Alerts/Alerts';

const stories = storiesOf('Alerts', module);
stories.addDecorator(withKnobs);

const types = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

const title = {
  error: 'Error',
  warning: 'Warning',
  info: 'Info',
  success: 'Success',
};

stories.add('Default', () => (
  <Alerts 
    type={select('Type', types, 'success')}
    onClose={action('close')}
    title={select('Title', title, 'Success')}
    message='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
    isOpen={true}
  />
))
