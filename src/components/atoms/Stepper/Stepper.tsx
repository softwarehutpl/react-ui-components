import React from 'react';
import styled from 'styled-components';
import Step, { StepProps } from './Step/Step';

export interface StepperProps {
  wrapperClassName?: string;
  items: StepProps[];
  activeIndex: number;
  color?: any;
};
 
const StepperContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const Stepper: React.StatelessComponent<StepperProps> = ({
  wrapperClassName,
  items,
  activeIndex,
  color,
}) => (
  <StepperContainer
    className={wrapperClassName}
  >
    {items.map((item, index) => (
      <Step 
        image={item.image}
        title={item.title}
        isActive={index === activeIndex}
        key={item.title}
        color={color}
      />
    ))}
  </StepperContainer>
);

export default Stepper;
