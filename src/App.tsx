import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import DropdownItem from './components/atoms/DropdownItem/DropdownItem';
import Dropdown from './components/molecules/Dropdown/Dropdown';
import Button from './components/atoms/Button/Button';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';
import Input from './components/atoms/Input/Input';
import Modal from './components/molecules/Modal/Modal';
import CloseIcon from './common/icons/CloseIcon/CloseIcon';
import items from './common/mocks/breadcrumbsItems';
import { COLOR_RUBY } from './common/constants/colors';
import fontSizes from './common/constants/font_sizes';
import Tooltip from './components/atoms/Tooltip/Tooltip';
import Autocomplete from './components/organisms/Autocomplete/Autocomplete';
import './components/atoms/Breadcrumbs/Breadcrumbs.scss';
import Toast from './components/atoms/Toast/Toast';

const options = [
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple'
];

function App() {
  const [value, setValue] = useState('');
  const [progress, setProgress] = useState(0);
  const [showModal, handleShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    styleReorder();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress !== 100) {
        setProgress(progress + 10);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Input
          placeholder="test"
          value={value}
          showPlaceholderOnFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          hoverBackgroundColor="#EEE"
          focusBackgroundColor="#EEE"
          transitionEffect="mid"
          label="test12e"
          width={250}
        />
        <Modal
          isOpen={showModal}
          rootId="modal-root"
          showTransitionEffect
          ownCloseButtonIcon={<CloseIcon
            color={'error'}
            onClick={() => handleShowModal(false)}
            topPosition={0}
            rightPosition={0}
            visibility={showModal ? 'visible' : 'hidden'}
            height={`${fontSizes.fontSizeLarge}px`}
            iconColor={COLOR_RUBY}
          />}
          closeButtonOutside
          transitionEffect='mid'
          onClose={() => handleShowModal(false)}
        >
          <>
            Some modal here
          </>
        </Modal>
        <Breadcrumbs
          items={items}
          showOnlyBorderItems
          activeBreadcrumbClassName="active"
          firstBreadcrumbClassName="active"
          itemClassName="breadcrumbsItem"
          wrapperClassName="breadcrumbsWrapper"
          noBorder
          showBoxShadow
        />
        <ProgressBar color="success" maxValue={100} progressValue={progress} />
        <span id="tooltip_target">Hover me, I am a tooltip target</span>
        <Tooltip targetElementId="tooltip_target" tooltipText="tooltip" position="right" />
      </div>
      <Button
        buttonTitle="Show toast"
        onClick={() => {
          setShowToast(true);
        }}
      />
      {showToast && (
        <Toast
          message="Halvah jelly beans chocolate cake topping jelly-o tootsie roll toffee."
          title="Toast header"
          onClose={() => {
            setShowToast(false);
          }}
          color="secondary"
          onClick={() => {
            setShowToast(false);
          }}
        />
      )}
      <Dropdown title="Dropdown" margin={10} color="secondary">
        <DropdownItem heading disabled>
          item
        </DropdownItem>
        <DropdownItem divider dividerColor="black" />
        <DropdownItem
          onClick={() => {
            console.log('dropdown item clicked');
          }}
        >
          abc
        </DropdownItem>
      </Dropdown>
      <div style={{marginLeft: '150px', width: '400px'}}>
        <p>Autocomplete</p>
        <Autocomplete 
          options={options} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
