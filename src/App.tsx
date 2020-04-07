import React, { useEffect, useState } from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './common/theme';
import { styleReorder } from './helpers/styleReorder';
import Breadcrumbs from './components/atoms/Breadcrumbs/Breadcrumbs';
import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input/Input';

const items = [{
  name: 'Home', link: 'link',
  }, {
    name: 'Products', link: 'link-2',
  }, {
    name: 'Collection', link: 'link-3',
  }, {
    name: 'Product Details', link: 'link-4',
  }];

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    styleReorder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Button
          buttonTitle='some button'
          onClick={() => {
            console.log('clicked!');
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
      </div>
    </ThemeProvider>
  );
}

export default App;
