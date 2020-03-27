import React from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/theme';
import Button from './components/atoms/Button/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button
          buttonTitle="some button"
          onClick={() => {console.log('clicked!')}}
          color="secondary"
          className='test-class'
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
