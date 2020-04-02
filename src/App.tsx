import React, {useEffect} from 'react';
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
      <div className="App">
        <Button
          buttonTitle="some button"
          onClick={() => {console.log('clicked!')}}
          // color="secondary"
          // className='test-class'
        />
        <Input
          placeholder="test"
          onChange={() => console.log('some-change')}
          borderRadius={7}
          // color="secondary"
          // className='test-class'
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
