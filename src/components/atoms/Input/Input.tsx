import React from 'react';
import styled from 'styled-components';
import './input.scss';

type Props = {
  buttonTitle?: string;
  onChange: () => void;
  color?: string;
  className?: string;
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
  margin?: number;
  padding?: number;
}

const Input = (
  {
    onChange,
    className,
    placeholder,
    disabled,
  }: Props
) => (
  <input
    className={className}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
  />
);

const defaultProps = {
  color: 'primary',
  noBorder: false,
  disabled: false,
  className: '',
  borderWidth: 2,
  margin: 0,
  padding: 15,
  borderRadius: 10,
};

Input.defaultProps = defaultProps;

export default styled(Input)`${({ 
  theme,
  color = defaultProps.color,
  backgroundColor,
  fontColor,
  noBorder = defaultProps.noBorder,
  borderColor,
  borderWidth = defaultProps.borderWidth,
  borderRadius = defaultProps.borderRadius,
  margin = defaultProps.margin,
  padding = defaultProps.padding,
  hoverBackgroundColor,
  hoverBorderColor,
  focusBackgroundColor,
  focusBorderColor,
  transitionEffect,
}) => ({
  'background-color': backgroundColor || theme.colors[color].base,
  'color': fontColor || theme.colors[color].dark,
  'border': noBorder ? 'none' : 'solid',
  'border-color': borderColor || theme.colors[color].dark,
  'border-width': `${borderWidth}px`,
  'border-radius': `${borderRadius}px`,
  'margin': `${margin}px`,
  'padding': `${padding}px`,
  '&:hover': {
    'cursor': 'pointer',
    'background-color': hoverBackgroundColor || focusBackgroundColor || theme.colors[color].light,
    'border-color': hoverBorderColor || focusBorderColor,
  },
  'transition': transitionEffect || 'none',
  '&:focus': {
    'cursor': 'pointer',
    'background-color': focusBackgroundColor || theme.colors[color].light,
    'border-color': focusBorderColor,
  },
  'outline': 'none',
  '&[disabled]': {
    'background-color': theme.colors.disabled.base,
    'border-color': theme.colors.disabled.dark,
    'color': '#a6a6a6',
    '&:hover': {
      'cursor': 'auto',
    }
  }
})}`
