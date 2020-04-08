import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { COLOR_OPTIONS, TRANSITION_EFFECT_OPTIONS } from '../common/constants/storybook_options';
import Input from '../components/atoms/Input/Input';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories
 .add('Custom', () => {
   const [value, setValue] = useState('');
		return (
			<Input 
				placeholder='Custom input'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        value={value}
			/>
 		);
  })
  .add('Casual', () => {
    const [value, setValue] = useState('');
    return (
      <Input 
        placeholder='Casual input'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        color={select('Color', COLOR_OPTIONS, 'primary')}
        value={value}
        transitionEffect={select('Transition effect', TRANSITION_EFFECT_OPTIONS, 'slow')}
      />
    );
  })
  .add('Error input with own background on focus', () => {
    const [value, setValue] = useState('');
    return (
      <Input 
        placeholder='Warn input'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        color={select('Color', COLOR_OPTIONS, 'error')}
        focusBackgroundColor='white'
        value={value}
      />
      );
    })
	.add('Placeholder On Focus', () => {
    const [value, setValue] = useState('');
		return (
			<Input
        placeholder='Test input'
        value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
				showPlaceholderOnFocus={boolean('Show placeholder on focus', true)}
			/>
		);
  })
  .add('Show label', () => {
    const [value, setValue] = useState('');
		return (
			<Input
        placeholder='Test input'
        value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
				label='label'
			/>
		);
  })
