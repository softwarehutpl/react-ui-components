import React from 'react';
import './App.scss';
import { ThemeProvider } from 'emotion-theming';
import Button from './components/atoms/Button/Button';
import { theme } from './common/theme';

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
