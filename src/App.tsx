import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';

const items = [{
  name: 'some name 1', link: 'link',
  }, {
    name: 'some name 2', link: 'link-2',
  }, {
    name: 'some name 3', link: 'link-3',
  }];

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    styleReorder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Button
          buttonTitle='some button'
          onClick={() => {
            console.log('clicked!');
          }}
        />
        <Input
          placeholder='test'
          value={value}
          showPlaceholderOnFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          hoverBackgroundColor='#EEE'
          focusBackgroundColor='#EEE'
          transitionEffect='mid'
          label='test12e'
          width={250}
        />
        <Breadcrumbs items={items} showOnlyBorderItems />
      </div>
    </ThemeProvider>
  );
}

export default App;
