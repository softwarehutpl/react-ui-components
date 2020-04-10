import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import { TRANSITION_EFFECT_OPTIONS } from '../common/constants/storybook_options';
import Modal from '../components/molecules/Modal/Modal';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

stories
 .add('Common', () => {
   const [ showModal, handleShowModal ] = useState(false);
		return (
      <>
        <Modal
          isOpen={showModal}
          rootId='modal-root'
          classicCloseButton={boolean('Clasic close button', true)}
          closeButtonOutside={boolean('Close button outside', true)}
          buttonFontColor={text('Button font color', 'grey')}
          transitionEffect={select('Transition effect', TRANSITION_EFFECT_OPTIONS, 'mid')}
          onClose={() => handleShowModal(!showModal)}
          showTransitionEffect={boolean('Show Transition Effect', true)}
          topButtonPosition={number('Top Button Position', 0)}
          rightButtonPosition={number('Right Button Position', 0)}
          contentWidth={300}
          contentHeight={300}
        > <>Some modal</>
        </Modal>
        <button onClick={() => handleShowModal(!showModal)}>Show Modal</button>
        <div id="modal-root"></div>
      </>
 		);
  })
  // .add('Only border items and no border', () => {
	// 	return (
	// 		<Modal
  //       items={breadcrumbsItems}
  //       showOnlyBorderItems
  //       noBorder={boolean('No border', true)}
	// 		/>
 	// 	);
  // })
  // .add('Own classnames for items', () => {
	// 	return (
	// 		<Modal
  //       items={breadcrumbsItems}
  //       activeBreadcrumbClassName='active'
  //       firstBreadcrumbClassName='active'
  //       itemClassName='breadcrumbsItem'
	// 		/>
 	// 	);
  // })
  // .add('Box shadow effects', () => {
	// 	return (
  //     <Breadcrumbs 
  //       items={breadcrumbsItems}
  //       boxShadowEffect={select('Box Shadow Effect', BOX_SHADOW_OPTIONS, 'roundedShadow')}
  //       noBorder
	// 		/>
 	// 	);
  // })
  // .add('Own separator', () => {
	// 	return (
  //     <Breadcrumbs 
  //       items={breadcrumbsItems}
  //       separator={text('Separator', '/')}
	// 		/>
 	// 	);
  // })