import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import DropdownItem from '../components/atoms/DropdownItem/DropdownItem';

const stories = storiesOf('DropdownItem', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <div style={{ width: '250px' }}>
      <DropdownItem
        disabled={boolean('Disabled', false)}
        heading={boolean('Heading', false)}
        divider={boolean('Divider', false)}
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
        textAlignment={select(
          'Text alignment',
          {
            left: 'left',
            right: 'right',
            center: 'center',
          },
          'left'
        )}
      >
        {text('Label', 'Dropdown item')}
      </DropdownItem>
    </div>
  );
});
