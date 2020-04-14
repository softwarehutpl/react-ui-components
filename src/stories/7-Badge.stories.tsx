import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import Badge from '../components/atoms/Badge/Badge'
import { COLOR_OPTIONS } from '../common/constants/storybook_options';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);

const POSITION = {
  vertical: {
    top: 'top',
    bottom: 'bottom'
  },
  horizontal: {
    left: 'left',
    right: 'right'
  },
};

stories
.add('Common', () => (
  <>
    <Badge 
      badgeContent={9} 
      color={select('Colors', COLOR_OPTIONS, 'primary')}
      position={{
        horizontal: select('Horizontal', POSITION.horizontal, 'right'),
        vertical: select('Vertical', POSITION.vertical, 'top')
      }}
    >
      Messages
    </Badge>
    <Badge 
      badgeContent={44} 
      color={select('Colors', COLOR_OPTIONS, 'primary')}
      position={{
        horizontal: select('Horizontal', POSITION.horizontal, 'right'),
        vertical: select('Vertical', POSITION.vertical, 'top')
      }}
    >
      Messages
    </Badge>
    <Badge 
      badgeContent="Fill" 
      color={select('Colors', COLOR_OPTIONS, 'primary')}
      position={{
        horizontal: select('Horizontal', POSITION.horizontal, 'right'),
        vertical: select('Vertical', POSITION.vertical, 'top')
      }}
    >
      Messages
    </Badge>
  </>
))
.add('With max value', () => (
  <Badge 
    badgeContent= {number('BadgeConent', 100, {}, 'Basic')}
    max={number('Max', 99, {}, 'Basic')}
    color={select('Colors', COLOR_OPTIONS, 'primary')}
  >
    Messages
  </Badge>
));
