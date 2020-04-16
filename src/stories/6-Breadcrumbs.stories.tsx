import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import breadcrumbsItems from '../common/mocks/breadcrumbsItems';
import Breadcrumbs from '../components/atoms/Breadcrumbs/Breadcrumbs';
import { BOX_SHADOW_OPTIONS } from '../common/constants/storybook_options';
import './styles.scss';

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator(withKnobs);

stories
 .add('Default', () => {
    return (
      <Breadcrumbs
        items={breadcrumbsItems}
      />
     );
  })
  .add('Only border items and no border', () => {
    return (
      <Breadcrumbs 
        items={breadcrumbsItems}
        showOnlyBorderItems
        noBorder={boolean('No border', true)}
      />
     );
  })
  .add('Own classnames for items', () => {
    return (
      <Breadcrumbs 
        items={breadcrumbsItems}
        activeBreadcrumbClassName='active'
        firstBreadcrumbClassName='active'
        itemClassName='breadcrumbsItem'
      />
     );
  })
  .add('Box shadow effects', () => {
    return (
      <Breadcrumbs 
        items={breadcrumbsItems}
        boxShadowEffect={select('Box Shadow Effect', BOX_SHADOW_OPTIONS, 'roundedShadow')}
        noBorder
      />
     );
  })
  .add('Own separator', () => {
    return (
      <Breadcrumbs 
        items={breadcrumbsItems}
        separator={text('Separator', '/')}
      />
     );
  })
