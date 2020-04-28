import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { isNotEmptyArray } from './common/helpers/helpers';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import DropdownItem from './components/atoms/DropdownItem/DropdownItem';
import { Dropdown } from './components/molecules/Dropdown/Dropdown';
import Button from './components/atoms/Button/Button';
import ProgressBar from './components/atoms/ProgressBar/ProgressBar';
import Input from './components/atoms/Input/Input';
import Modal from './components/molecules/Modal/Modal';
import Pagination, { PaginationItem } from './components/molecules/Pagination/Pagination';
import CloseIcon from './common/icons/CloseIcon/CloseIcon';
import items from './common/mocks/breadcrumbsItems';
import { COLOR_RUBY } from './common/constants/colors';
import fontSizes from './common/constants/font_sizes';
import Tooltip from './components/atoms/Tooltip/Tooltip';
import './components/atoms/Breadcrumbs/Breadcrumbs.scss';

const getMovies = () => fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

function App() {
  const [value, setValue] = useState('');
  const [progress, setProgress] = useState(0);
  const [showModal, handleShowModal] = useState(false);
  const [data, setCurrentData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsInCart, handleAddToCart] = useState(['0']);

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
        {isNotEmptyArray(data) && <Pagination
          goToFirstPage={console.log}
          goToLastPage={() => console.log()}
          changePage={setActivePage}
          buttonPageBackground="grey"
          buttonPageColor="black"
          items={data}
          itemsInCart={itemsInCart}
          showAddToCartIcon
          onAddToCart={onHandleAddToCart}
          descriptionAlignment='left'
          itemInCartIconColor='hotpink'
          itemNotInCartIconColor='white'
          buttonBorderColor='#585858'
          itemBorder="#ddd"
          noCardItemShadow
          cardBorderRadius={5}
          pagesNumber={8}>
          </Pagination>}
      </div>
    </ThemeProvider>
  );
}

export default App;
