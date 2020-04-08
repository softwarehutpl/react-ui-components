import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Label from '../../atoms/Label/Label';

export interface WrapperProps {
  margin?: number;
  color?: any;
  disabled?: boolean;
  withLabel?: boolean;
};

export interface MarkProps {
  borderWidth?: number;
  borderColor?: string;
  color?: any;
  checked?: boolean;
  name?: string;
  children?: any;
  disabled?: boolean;
};

export interface RadioBoxProps extends WrapperProps, MarkProps {
  className?: string;
  checked?: boolean;
  onChange?: () => void;
};

export const RadioWrapper = styled.div<WrapperProps>`
  display: inline-block;
  margin: ${({ margin }) => margin + 'px'};
  padding: 5px 10px;

  ${({ disabled, color, withLabel }) => 
   (!disabled && withLabel) &&
     css`
      &:hover  {
        background-color: ${({ theme }) => lighten(0.28,(theme.colors[color].light))};
        border-radius: 24px;
      }
  `
  }
`;

export const Mark = styled.span<MarkProps>`
  position: relative;
  border: solid;
  border-width: ${({ borderWidth }) => (`${borderWidth}px`)};
  border-color: ${({ theme }) => (theme.colors.disabled.dark)};
  width: 24px;
  height: 24px;
  left: 0;
  border-radius: 50%;
  margin-right: 9px;
  vertical-align: middle;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffff;
    transform: scale(1);
    transition: all 110ms ease-out;
  }

  ${RadioWrapper}:hover &  {
    border-width: ${({ borderWidth, disabled }) => (!disabled && `${borderWidth}px`)};
    border-color: ${({ theme, color, disabled }) => (!disabled && theme.colors[color].base)};
  }

  ${({ checked, color, disabled }) =>
    checked && 
      css`
        border-color: ${({ theme }) => (theme.colors[color].base)};
        background-color: ${({ theme }) => ( !disabled && theme.colors[color].base)};
    `
  }
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      transform: scale(0.5);
    }
  }
`;

const RadioBox: React.StatelessComponent<RadioBoxProps> = ({
  className,
  checked,
  onChange,
  name,
  borderWidth,
  borderColor,
  color,
  children,
  margin,
  disabled,
}) => (
  <RadioWrapper
    className={className}
    margin={margin}
    disabled={disabled}
    color={color}
    withLabel={children}
  >
    <Label disabled={disabled}>
     <Input 
      type="radio"
      onChange={onChange}
      name={name}
    />
    <Mark 
      borderColor={borderColor}
      borderWidth={borderWidth}
      color={color}
      checked={checked}
      disabled={disabled}
    />
    {children}
    </Label> 
  </RadioWrapper>
);

RadioBox.defaultProps = {
  className: '',
  color: 'primary',
  borderWidth: 1,
  margin: 15,
  disabled: false,
}

export default RadioBox;
