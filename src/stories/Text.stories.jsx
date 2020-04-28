import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, color, number } from '@storybook/addon-knobs';
import Text from '../components/atoms/Text/Text';
import {
  COLOR_OPTIONS,
  TEXT_ALIGNMENT_OPTIONS,
  FONT_WEIGHT_OPTIONS,
} from '../common/constants/consts';
import longText from '../common/mocks/longText';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <Text
      color={select('Color', COLOR_OPTIONS, COLOR_OPTIONS.primary)}
      textAlign={select('Text alignment', TEXT_ALIGNMENT_OPTIONS, 'justify')}
      fontWeight={select('Font weight', FONT_WEIGHT_OPTIONS, 'normal')}
      fontSize={number('Font size', 16, { min: 1 })}
      lineHeight={number('Line height', 1.5, { step: 0.1, min: 0 })}
    >
      {text('Text', longText)}
    </Text>
  );
});
