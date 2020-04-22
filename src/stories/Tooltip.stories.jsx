import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Tooltip from '../components/atoms/Tooltip/Tooltip';
import { COLOR_OPTIONS } from '../common/constants/consts';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

const tooltipPositionOptions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
};

stories.add('default', () => {
  return (
    <div style={{ margin: '100px 30%' }}>
      <span id="target_el">Hover me</span>
      <Tooltip
        targetElementId="target_el"
        tooltipText="tooltip"
        color={select('Color', COLOR_OPTIONS, 'primary')}
        position={select('Position', tooltipPositionOptions, 'top')}
      />
    </div>
  );
});
