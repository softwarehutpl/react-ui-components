import React, { useEffect } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Button from './components/atoms/Button/Button';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';

function App() {
  useEffect(() => {
    styleReorder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button
          buttonTitle="some button"
          onClick={() => {
            console.log('clicked!');
          }}
          // color="secondary"
          // className='test-class'
        />
        <ProgressBar color="success" maxValue={100} progressValue={50} labelPosition="right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
