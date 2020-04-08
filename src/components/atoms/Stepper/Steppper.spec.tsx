import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Stepper, { StepperContainer }from './Stepper';;
import Step from './Step/Step';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';

describe('<Stepper', () => {
  let component: any;
  it('should render corectly', () => {
    component = create(
      <ThemeProvider theme={theme}>
        <Stepper  items={[{title: 'test'}]}  color="primary"  activeIndex={0}/>
      </ThemeProvider>
      );
    expect(component).toMatchSnapshot();
  });
});
