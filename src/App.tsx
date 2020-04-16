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
import Accordion from './components/molecules/Accordion/Accordion';
import accordionItems from './common/mocks/accordionItems';
import Tooltip from './components/atoms/Tooltip/Tooltip';
import './components/atoms/Breadcrumbs/Breadcrumbs.scss';

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
  const [progress, setProgress] = useState(0);

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
          buttonTitle="some button"
          onClick={() => {
            console.log('clicked!');
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
        <Accordion
          items={accordionItems}
          width={500}
        />
        <span id="tooltip_target">Hover me, I am a tooltip target</span>
        <Tooltip
          targetElementId="tooltip_target"
          tooltipText="tooltip"
          position="right"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
