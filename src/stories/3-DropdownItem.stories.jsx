import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import DropdownItem from '../components/atoms/DropdownItem/DropdownItem';
import { COLOR_OPTIONS, TEXT_ALIGNMENT_OPTIONS } from '../constants/storybook_options';

const stories = storiesOf('DropdownItem', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <div style={{ width: '250px', 'font-family': 'sans-serif' }}>
      <DropdownItem
        disabled={boolean('Disabled', false)}
        heading={boolean('Heading', false)}
        divider={boolean('Divider', false)}
        color={select('Color', COLOR_OPTIONS, 'primary')}
        textAlignment={select('Text alignment', TEXT_ALIGNMENT_OPTIONS, 'left')}
      >
        {text('Label', 'Dropdown item')}
      </DropdownItem>
    </div>
  );
});
