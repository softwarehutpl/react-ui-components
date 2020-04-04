import React, { useEffect } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';

function App() {
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
          showPlaceholderOnFocus
          onChange={() => console.log('some-change')}
          hoverBackgroundColor='#EEE'
          focusBackgroundColor='#EEE'
          transitionEffect='mid'
          label='test12e'
          width={250}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
