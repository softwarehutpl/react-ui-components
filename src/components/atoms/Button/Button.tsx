import React from 'react';
import styled from 'styled-components';
import './button.scss';

type Props = {
  buttonTitle: string,
  onClick: () => void,
  color: string,
  className: string,
  disabled: boolean,
  fontColor?: string,
  noBorder: boolean,
  borderColor?: string,
  borderWidth: number,
  backgroundColor?: string,
}

const Button = (
  {
    buttonTitle,
    onClick,
    className,
    disabled,
  }: Props
) => (
  <button
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    { buttonTitle }
  </button>
);

const defaultProps = {
  color: 'primary',
  noBorder: false,
  disabled: false,
  className: '',
  borderWidth: 2,
};

Button.defaultProps = defaultProps;

export default styled(Button)`${({ 
  theme,
  color = defaultProps.color,
  backgroundColor,
  fontColor,
  noBorder = defaultProps.noBorder,
  borderColor,
  borderWidth = defaultProps.borderWidth,
}) => ({
  'background-color': backgroundColor || theme.colors[color].base,
  'color': fontColor || theme.colors[color].dark,
  'border': noBorder ? 'none' : 'solid',
  'border-color': borderColor || theme.colors[color].dark,
  'border-width': borderWidth + 'px',
  'border-radius': '10px',
  'outline': 'none',
  'padding': '15px',
  'text-transform': 'uppercase',
  'font-weight': 'bold',
  '&:hover': {
    'cursor': 'pointer',
    'background-color': theme.colors[color].light,
  },
  '&[disabled]': {
    'background-color': theme.colors.disabled.base,
    'border-color': theme.colors.disabled.dark,
    'color': '#a6a6a6',
    '&:hover': {
      'cursor': 'auto',
    }
  }
})}`
