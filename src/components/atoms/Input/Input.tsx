import React from 'react';
import styled from 'styled-components';
import './input.scss';

interface InputContainerProps {
  width?: number;
  direction?: string;
};

interface InputLabelProps {
  margin?: number;
  padding?: number;
  width?: number;
  direction?: string;
  labelPosition?: string;
};

interface InputProps extends InputContainerProps, InputLabelProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  value: string;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  disabled?: boolean;
  fontColor?: string;
  noBorder?: boolean;
  borderColor?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  focusBackgroundColor?: string;
  transitionEffect?: string;
  showPlaceholderOnFocus?: boolean;
  margin?: number;
  padding?: number;
  label?: string;
  direction?: string;
  width?: number;
  labelPosition?: string;
};

export const InputField = styled.input<InputProps>`
  background-color: ${({ backgroundColor, theme, color }) => {
    return backgroundColor || (color && theme.colors[color].light);
  }};
  color: ${({ fontColor, theme, color }) => fontColor || (color && theme.colors[color].dark)};
  border: ${({ noBorder }) => noBorder ? 'none' : 'solid'};
  border-color: ${({ borderColor, theme, color }) => borderColor || (color && theme.colors[color].dark) };
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  margin: ${({ margin }) => `${margin}px`};
  padding: ${({ padding }) => `${padding}px`};
  width: ${({ width }) => `${width}px`};
  outline: none;
  transition: ${({ transitionEffect, theme }) => transitionEffect ? theme.transitions.all[transitionEffect] : 'none'};
  :hover {
    border-color: ${({ hoverBorderColor, focusBorderColor, color, theme }) => hoverBorderColor || focusBorderColor || (color && theme.colors[color].dark)};
    background-color: ${({ hoverBackgroundColor, focusBackgroundColor, color, theme }) => hoverBackgroundColor || focusBackgroundColor || (color && theme.colors[color].light)};
  };
  :focus {
    border-color: ${({ focusBorderColor, color, theme }) => focusBorderColor || (color && theme.colors[color].dark)};
    background-color: ${({ focusBackgroundColor, color, theme }) => focusBackgroundColor || (color && theme.colors[color].light)};
  };
  ${({ showPlaceholderOnFocus, theme, transitionEffect }) => showPlaceholderOnFocus && `:focus::-webkit-input-placeholder {
    font-size: .75em;
    display: none;
    position: relative;
    top: -15px;
    transition: ${transitionEffect ? theme.transitions.all[transitionEffect] : '0.2s ease-out'}; 
  };
  `}
  ${({ showPlaceholderOnFocus, theme, transitionEffect }) => showPlaceholderOnFocus && `::-webkit-input-placeholder {
    transition: ${transitionEffect ? theme.transitions.all[transitionEffect] : '0.2s ease-out'};
  }`};
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => 'column' && direction};
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ width }) => `${width}px`};
`;

export const InputLabel = styled.label<InputLabelProps>`
  margin-bottom: 10px;
  width: ${({ width }) => `${width}px`};
  text-align: ${({ labelPosition }) => labelPosition};
  font-weight: bold;
`;

const Input = (props: InputProps) => (
  <InputContainer width={props.width} direction={props.direction}>
    {props.label && (<InputLabel
      labelPosition={props.labelPosition}
      className={props.labelClassName}
      width={props.width}>{props.label}
    </InputLabel>)}
    <InputField
      {...props}
    />
  </InputContainer>
);

const defaultProps = {
  color: 'primary',
  fontColor: '#000',
  noBorder: false,
  disabled: false,
  className: '',
  borderWidth: 1,
  margin: 0,
  padding: 15,
  borderRadius: 5,
  borderColor: '#000',
  showPlaceholderOnFocus: false,
  width: 200,
  direction: 'column',
  labelPosition: 'left',
};

Input.defaultProps = defaultProps;

export default Input;

// export default styled(Input)`${({ 

// }) => ({
//   'background-color': backgroundColor || theme.colors[color].light,
//   'color': fontColor || theme.colors[color].dark,
//   'border': noBorder ? 'none' : 'solid',
//   'border-color': borderColor || theme.colors[color].dark,
//   'border-width': `${borderWidth}px`,
//   'border-radius': `${borderRadius}px`,
//   'margin': `${margin}px`,
//   'padding': `${padding}px`,
//   'width': '100%',
//   
//   
//   
//   'outline': 'none',
//   'transition': transitionEffect ? theme.transitions.all[transitionEffect] : 'none',
//   
// })}`
