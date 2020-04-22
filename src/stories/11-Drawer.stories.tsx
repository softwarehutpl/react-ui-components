import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Drawer from '../components/molecules/Drawer/Drawer';
import Button from '../components/atoms/Button/Button';
import { COLOR_OPTIONS } from '../common/constants/consts';
import './styles.scss';

const stories = storiesOf('Drawer', module);
stories.addDecorator(withKnobs);

const sizes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
} as any;

stories.add('Common', () => {
  const [opened, setOpen] = useState<any>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => {
    setOpen({...opened,  [anchor]: open});
  };

  return (
    <div className='drawerWrapper'>
      {['left', 'right', 'top', 'bottom'].map(anchor => (
        <div key={anchor}>
          <Button
            onClick={() => toggleDrawer(anchor, true)}
            buttonTitle={anchor}
            margin={10}
            className="drawerButton"

          />
          <Drawer
            isOpen={opened[anchor]}
            placement={anchor}
            onClose={() => toggleDrawer(anchor, false)}
            withIcon={boolean('withIcon', true)}
            transitionDuration={number('TransitionDuration', 0.2 )}
            size={select('Size', sizes, 'medium')}
            withButtons={boolean('withButtons', true)}
            color={select('Color', COLOR_OPTIONS, 'secondary')}
            confirmCallback={action('confirm-button-click')}
          >
            <div style={{width: '100%', marginLeft: '10px'}}>
              <p>Drawer title</p>
              <p style={{width: '90%', height: '10px', marginTop: '10px', backgroundColor: '#f2f2f5'}} />
              <p style={{width: '35%', height: '10px', marginTop: '20px', backgroundColor: '#f2f2f5'}} />
              <p style={{width: '51%', height: '10px', marginTop: '20px', backgroundColor: '#f2f2f5'}} />
              <p style={{width: '90%', height: '10px', marginTop: '20px', backgroundColor: '#f2f2f5'}} />
            </div>
          </Drawer>
       </div>
      ))}
    </div>
  );
});
