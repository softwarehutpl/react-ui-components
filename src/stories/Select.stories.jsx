import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, color } from '@storybook/addon-knobs';
import Select from '../components/atoms/Select/Select';
import selectItems from '../common/mocks/selectItems';
import { COLOR_OPTIONS } from '../common/constants/consts';
import theme from '../common/theme';

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

stories.add('single', () => {
  const [selectedOption, setSelectedOption] = useState();
  const selectedColor = select('Color', COLOR_OPTIONS, 'primary');
  return (
    <Select
      options={selectItems}
      value={selectedOption}
      onChange={(option) => {
        setSelectedOption(option);
      }}
      color={selectedColor}
      placeholder={text('Placeholder', 'select value')}
      disabled={boolean('Disabled', false)}
    />
  );
});

stories.add('multiple', () => {
  const [multipleSelectOptions, setMultipleSelectOption] = useState();
  return (
    <Select
      options={selectItems}
      multiple
      multipleValue={multipleSelectOptions}
      margin={10}
      onChange={(option) => {
        setMultipleSelectOption(option);
      }}
      color={select('Color', COLOR_OPTIONS, 'primary')}
    />
  );
});
