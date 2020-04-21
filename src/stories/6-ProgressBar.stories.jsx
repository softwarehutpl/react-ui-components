import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';
import ProgressBar from '../components/atoms/ProgressBar/ProgressBar';
import { COLOR_OPTIONS } from '../common/constants/consts';

const stories = storiesOf('ProgressBar', module);
stories.addDecorator(withKnobs);

const barLabelPositionOptions = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
  right: 'right',
};

const barLabelTypeOptions = {
  percentage: 'percentage',
  progressValue: 'progressValue',
};

stories.add('default', () => {
  return (
    <ProgressBar
      maxValue={100}
      progressValue={50}
      margin="30px"
      color={select('Color', COLOR_OPTIONS, 'primary')}
    />
  );
});

stories.add('custom', () => {
  return (
    <ProgressBar
      maxValue={100}
      progressValue={70}
      margin="30px"
      color={select('Color', COLOR_OPTIONS, 'primary', 'Basic')}
      labelPosition={select('Label position', barLabelPositionOptions, 'top', 'Label')}
      noBorder={boolean('No-border', false, 'Basic')}
      noLabel={boolean('No-label', false, 'Label')}
      labelType={select('Label type', barLabelTypeOptions, 'percentage', 'Label')}
      width={number('Width', 250, {}, 'Basic')}
      height={number('Height', 15, {}, 'Basic')}
    />
  );
})
