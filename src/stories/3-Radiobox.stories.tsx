import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import RadioBox from '../components/atoms/RadioBox/RadioBox';
import Label from '../components/atoms/Label/Label';
import { COLOR_OPTIONS } from '../common/colorOptions';

const stories = storiesOf('Radio', module);
stories.addDecorator(withKnobs);

const RADIOBOXES = [
  {
  name: 'test 1',
  label: 'Duis aute irure dolor',
  },
  {
    name: 'test 1',
    label: 'Duis aute irure dolor',
  },
  {
    name: 'test 1',
    label: 'Duis aute irure dolor',
  },
];

const DISPLAY = {
  horizontal: 'row',
  vertical: 'column'
};

stories.add('Default', () => {
  const [value, setValue] = React.useState('');
  return (
    <RadioBox 
      name="test" 
      onChange={() => setValue('test')}
      checked={value === "test"}
      color={select('Color',COLOR_OPTIONS , 'primary')}
    />
  );
})
.add('With label', () => {
  return (
    <RadioBox 
      name="test" 
      checked
      color={select('Color',COLOR_OPTIONS , 'primary')}
    >
      Duis aute irure dolor
    </RadioBox>
  );
})
.add('Radioboxgroup', () => {
  const [value, setValue] = React.useState('');
  return (
    <div style={{display: 'flex',flexDirection: select('Display', DISPLAY, 'column')}}>
      {RADIOBOXES.map(({ name, label }) => ( 
        <RadioBox 
          name={name}
          checked={name === value}
          onChange={() => setValue(name)}
          color="info"
        >
          {label}
        </RadioBox>
      ))}
    </div>
  );
});
