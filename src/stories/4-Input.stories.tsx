import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Input from '../components/atoms/Input/Input';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

const colorOpions = {
	primary: 'primary',
	secondary: 'secondary',
	error: 'error',
	warning: 'warning',
	info: 'info',
	success: 'success',
	disabled: 'disabled'
};

const transitionEffectOptions = {
  fast: 'fast',
  mid: 'mid',
  slow: 'slow',
};

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
         color={select('Color', colorOpions, 'primary')}
         value={value}
         transitionEffect={select('transitionEffect', transitionEffectOptions, 'slow')}
       />
      );
   })
   .add('Error input with own background on focus', () => {
    const [value, setValue] = useState('');
     return (
       <Input 
         placeholder='Warn input'
         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
         color={select('Color', colorOpions, 'error')}
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
				showPlaceholderOnFocus={boolean('showPlaceholderOnFocus', true)}
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
