import React from 'react';
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
 .add('Casual', () => { 
		return (
			<Input 
				placeholder='Test input'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target)}
        color={select('Color', colorOpions, 'info')}
        transitionEffect={select('transitionEffect', transitionEffectOptions, 'slow')}
			/>
 		);
	})
	.add('ShowPlaceholderOnFocus', () => {
		return (
			<Input
        placeholder='Test input'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target)}
				showPlaceholderOnFocus={boolean('ShowPlaceholderOnFocus', true)}
			/>
		);
	})