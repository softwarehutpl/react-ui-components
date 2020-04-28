import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Stepper from '../components/atoms/Stepper/Stepper';
import Button from '../components/atoms/Button/Button';
import image from '../assets/register.svg';

const stories = storiesOf('Stepper', module);
stories.addDecorator(withKnobs);

const colorOpions = {
	primary: 'primary',
	secondary: 'secondary',
	error: 'error',
	warning: 'warning',
	info: 'info',
	success: 'success',
	disabled: 'disabled',
};

const items = [ 
  { image, title: 'Step 1'},
  { image, title: 'Step 2' },
  { image, title: 'Step 3'},
  { image,title: 'Step 4'},
];

 stories
 .add('Common', () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
      <div style={{width: '60%', margin: 'auto'}}>
        <Stepper 
          items={items}
          activeIndex={activeStep}
          color={select('Colors', colorOpions, 'primary')}
        />
        <div className="buttonsWrapper">
          <Button
            buttonTitle="Prev"
            onClick={handlePrev}
            disabled={activeStep === 0}
            margin={10}
          />
          <Button
            buttonTitle="Next"
            onClick={handleNext}
            disabled={activeStep === items.length - 1}
            margin={10}
          />
        </div>
      </div>
    );
 });
