import React from 'react';
import styled from 'styled-components';
import Checkmark, { CheckmarkProps } from './CheckMark';

export interface CheckboxContainerProps {
  margin?: number;
  padding?: number
}

export interface CheckboxProps  extends CheckboxContainerProps, CheckmarkProps { 
  className?: string;
  checked: boolean;
  label?: string;
  onChange: any;
  inputRef?: any;
  name?: string;
}

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  display: inline-block;
  margin: ${({ margin }) => margin + 'px'};
  padding: ${({ padding }) => padding + 'px'};
`

export const StyledLabel = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Checkbox: React.StatelessComponent<CheckboxProps> = ({ 
  className,
  checked,
  onChange,
  inputRef,
  name,
  color,
  margin,
  padding,
  noBorder,
  borderColor,
  borderRadius,
  borderWidth,
  disabled,
  required,
}) => (
  <CheckboxContainer
    margin={margin}
    padding={padding}
  >
    <StyledLabel>
      <HiddenCheckbox     
        type="checkbox" 
        checked={checked}
        onChange={onChange}
        name={name}
        ref={inputRef}
      />
      <Checkmark
        className={className}
        checked={checked} 
        color={color}
        noBorder={noBorder}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        disabled={disabled}
        required={required}
      >
      </Checkmark>
    </StyledLabel>
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  className: '',
  checked: false, 
  disabled: false,
  required: false,
  color: 'primary',
  margin: 0,
  padding: 15,
  noBorder: false,
  borderRadius: 4,
  borderWidth: 1
};

export default Checkbox;
