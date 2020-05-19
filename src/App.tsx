import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { isNotEmptyArray } from './helpers/helpers';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import Button from './components/atoms/Button/Button';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';
import Input from './components/atoms/Input/Input';
import Accordion from './components/molecules/Accordion/Accordion';
import accordionItems from './common/mocks/accordionItems';
import Modal from './components/molecules/Modal/Modal';
import Pagination from './components/molecules/Pagination/Pagination';
import CloseIcon from './common/icons/CloseIcon/CloseIcon';
import items from './common/mocks/breadcrumbsItems';
import { COLOR_RUBY } from './common/constants/colors';
import fontSizes from './common/constants/font_sizes';
import Tooltip from './components/atoms/Tooltip/Tooltip';
import './components/atoms/Breadcrumbs/Breadcrumbs.scss';
import Toast from './components/atoms/Toast/Toast';
import Select from './components/atoms/Select/Select';
import selectItems from './common/mocks/selectItems';

function App() {
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState();
  const [multipleSelectOptions, setMultipleSelectOption] = useState();
  const [progress, setProgress] = useState(0);
  const [showModal, handleShowModal] = useState(false);
  const [data, setCurrentData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsInCart, handleAddToCart] = useState(['0']);
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
    return () => {clearInterval(interval)};
  }, [progress]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://5ea6988884f6290016ba6e36.mockapi.io/blogs?page=${activePage}&limit=${9}`);
        setCurrentData(result.data);
      } catch (error) {
      }
    };
    fetchData();
  }, [activePage])

  const onHandleAddToCart = (itemId: any) => {
    const items = [...itemsInCart, itemId];
    // user should do here some action: send to api, state, anything
    handleAddToCart(items);
  }

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
          ownCloseButtonIcon={
            <CloseIcon
              color="error"
              onClick={() => handleShowModal(false)}
              topPosition={0}
              rightPosition={0}
              visibility={showModal ? 'visible' : 'hidden'}
              height={`${fontSizes.fontSizeLarge}px`}
              iconColor={COLOR_RUBY}
            />
          }
          closeButtonOutside
          transitionEffect="mid"
          onClose={() => handleShowModal(false)}
        >
          <>Some modal here</>
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
        <Accordion items={accordionItems} width={500} />
        <span id="tooltip_target">Hover me, I am a tooltip target</span>
        <Tooltip
          targetElementId="tooltip_target"
          tooltipText="tooltip"
          position="right"
        />
        {isNotEmptyArray(data) && <Pagination
          changePage={setActivePage}
          activePage={activePage}
          buttonPageNumberBackground='#fff'
          buttonPageNumberColor='#000'
          buttonPageNumberHoverColor='#fff'
          buttonPageNumberHoverBackground='#000'
          items={data}
          itemsInCart={itemsInCart}
          showAddToCartIcon
          transitionEffect="mid"
          onAddToCart={onHandleAddToCart}
          descriptionAlignment='left'
          itemInCartIconColor='hotpink'
          itemNotInCartIconColor='white'
          buttonBorderColor='#585858'
          itemBorder="#000"
          noCardItemShadow
          cardBorderRadius={0}
          pagesNumber={8} />}
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
      <Select
        options={selectItems}
        value={selectedOption}
        margin={10}
        onChange={(option: any) => {
          setSelectedOption(option);
        }}
        className="firstSelect"
      />
      <Select
        options={selectItems}
        multiple
        multipleValue={multipleSelectOptions}
        margin={10}
        onChange={(option: any) => {
          setMultipleSelectOption(option);
        }}
      />
    </ThemeProvider>
  );
}

export default App;
