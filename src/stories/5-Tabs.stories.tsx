import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Tabs from '../components/molecules/Tabs/Tabs';
import Tab  from '../components/atoms/Tab/Tab';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import { ORIENTATION } from '../common/consts/consts'

const tabs = [
  {
    label: 'Tab 1', 
    value: '1'
  },
  {
    label: 'Tab 2', 
    value: '2'
  },
  {
    label: 'Tab 3', 
    value: '3'
  },
  {
    label: 'Tab 4', 
    value: '4'
  },
];
  
const content = [
  {
    text: '1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in vous reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in reprehenderit.'
  },
  {
    text: '2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in vous reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in reprehenderit.'
  },
  {
    text: ' 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in vous reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in reprehenderit.'
  },
  {
    text: ' 4 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in vous reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. Duis aute irure dolor in reprehenderit.'
  },
];

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{width: '600px'}}>
    <Tabs 
      orientation={select('Orientation', ORIENTATION , 'horizontal')}
      tabs={
        tabs.map((item, index: number) => (
          <Tab 
            label={item.label}
            onClick={(value) => setValue(value)}
            isSelected={value === index}
            key={index}
            value={index}
            orientation={select('Orientation', ORIENTATION , 'horizontal')}
          />
        ))}
        content={content.map((item, index) => value === index
          && <div key={index} style={{ padding: '50px' }}>{item.text}</div>)}
    />
  </div>
  );
})

.add('with icon', () => {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ width: '600px' }}>
    <Tabs 
      orientation={select('Orientation', ORIENTATION , 'horizontal')}
      tabs={
        tabs.map((item, index:number) => (
          <Tab 
            label={item.label}
            onClick={(value) => setValue(value)}
            isSelected={value === index}
            key={index}
            value={index}
            icon={<Heart />}
            orientation={select('Orientation', ORIENTATION , 'horizontal')}
          />
        ))}
        content={content.map((item, index) => value === index
          && <div key={index} style={{ padding: '50px' }}>{item.text}</div>)}
    />
  </div>
  );
});
