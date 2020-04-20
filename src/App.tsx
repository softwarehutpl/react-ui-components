import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import DropdownItem from './components/atoms/DropdownItem/DropdownItem';
import { Dropdown } from './components/molecules/Dropdown/Dropdown';
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

  useEffect(() => {
    styleReorder();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress !== 100) {
        setProgress(progress + 10);
      }
    }, 500);
    return () => {clearInterval(interval)};
  }, [progress])

  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <DropdownItem heading disabled>
          item
        </DropdownItem>
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
          itemClassName='breadcrumbsItem'
          wrapperClassName='breadcrumbsWrapper'
          noBorder
          showBoxShadow
        />
        <ProgressBar color="success" maxValue={100} progressValue={progress} />
        <span id="tooltip_target">Hover me, I am a tooltip target</span>
        <Tooltip
          targetElementId="tooltip_target"
          tooltipText="tooltip"
          position="right"
        />
      </div>
      <div style={{marginLeft: '150px'}}>
        <p>Autocomplete</p>
        <Autocomplete 
          options={options} 
          placeholder="Search"
        />
      </div>

    </ThemeProvider>
  );
}

export default App;
