import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import DropdownItem from '../components/atoms/DropdownItem/DropdownItem';
import Dropdown from '../components/molecules/Dropdown/Dropdown';
import { COLOR_OPTIONS } from '../common/constants/storybook_options';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

const openOptions = {
  up: 'up',
  down: 'down',
};

stories.add('common', () => {
  return (
    <Dropdown
      title="Dropdown"
      color={select('Color', COLOR_OPTIONS, 'primary')}
      openingDirection={select('Opening direction', openOptions, 'down')}
      margin={160}
      disabled={boolean('Disabled', false)}
    >
      <DropdownItem heading disabled>header</DropdownItem>
      <DropdownItem>item 1</DropdownItem>
      <DropdownItem>item 2</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>item 3</DropdownItem>
    </Dropdown>
  );
});
