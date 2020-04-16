import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import Accordion from '../components/molecules/Accordion/Accordion';
import { COLOR_OPTIONS } from '../constants/storybook_options';
import accordionItems from '../common/mocks/accordionItems';

const stories = storiesOf('Accordion', module);
stories.addDecorator(withKnobs);

stories.add('common', () => {
  return (
    <Accordion
      items={accordionItems}
      noBorder={boolean('No border', true)}
      titleBackgroundColor={text('Title background color', 'transparent')}
      titleColor={text('Title color', '#919191')}
      titleBorderColor={text('Title border color', '#919191')}
      width={number('Width', 300)}
      itemBackgroundColor={text('Item background color', 'transparent')}
      // titleBorderColor: '#919191',
      // descriptionBackgroundColor: '#fefefe',
      // borderWidth: '1px',
      // noBorder: true,
      // bottomBorder: true,
      // showIcon: true,
    />
  );
});
