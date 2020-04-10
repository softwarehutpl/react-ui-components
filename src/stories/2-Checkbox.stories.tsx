import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Checkbox from '../components/atoms/Checkbox/Checkbox';
import { COLOR_OPTIONS } from '../common/colorOptions';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

stories
 .add('Checked', () => { 
		const [checked, setChecked] = React.useState(true);
		return (
			<Checkbox 
				checked={checked}
				color={select('Color',COLOR_OPTIONS , 'primary')}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
			/>
 		);
	})
  .add('Unchecked', () => { 
		const [checked, setChecked] = React.useState(false);
		return (
			<Checkbox 
				checked={checked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
			/>
		);
	})
	.add('Disabled', () => {
		const [checked, setChecked] = React.useState(false);
		return (
			<Checkbox 
				checked={checked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
				disabled={boolean('Disabled', true)}
			/>
		);
	})
	.add('Required', () => { 
		const [checked, setChecked] = React.useState(false);
		return (
			<Checkbox 
				checked={checked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
				required
			/>
		);
	});
	