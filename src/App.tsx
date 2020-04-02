import React, { useEffect } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import DropdownItem from './components/atoms/DropdownItem/DropdownItem';
import { Dropdown } from './components/molecules/Dropdown/Dropdown';

function App() {
  useEffect(() => {
    styleReorder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <DropdownItem heading disabled>item</DropdownItem>
        <DropdownItem divider dividerColor="blue" />
        <DropdownItem
          onClick={() => {
            console.log('dropdown item clicked');
          }}
        >
          abc
        </DropdownItem>
      </Dropdown>
    </ThemeProvider>
  );
}

export default App;
