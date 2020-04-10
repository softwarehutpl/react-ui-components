import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import DropdownItem from './components/atoms/DropdownItem/DropdownItem';
import { Dropdown } from './components/molecules/Dropdown/Dropdown';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';
import Modal from './components/molecules/Modal/Modal';
import CloseIcon from './common/icons/CloseIcon/CloseIcon';
// import closeIcon from './common/mocks/icons/close-iconn.svg';

function App() {
  const [value, setValue] = useState('');
  const [showModal, handleShowModal] = useState(false);

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
      <div className="App">
        <Button
          buttonTitle="Show modal"
          onClick={() => {
            handleShowModal(!showModal);
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
        <Modal
          isOpen={showModal}
          rootId="modal-root"
          showTransitionEffect
          ownCloseButtonIcon={<CloseIcon
            color={'error'}
            onClick={() => handleShowModal(false)}
            topPosition={-70}
            rightPosition={0}
            iconColor='hotpink'
          />}
          closeButtonOutside
          classicCloseButton
          transitionEffect='mid'
          onClose={() => handleShowModal(false)}
        >
          <>
            Some modal here
          </>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
