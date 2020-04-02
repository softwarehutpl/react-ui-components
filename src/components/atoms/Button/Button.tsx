import React from 'react';
import styled from 'styled-components';
import './button.scss';

type Props = {
  buttonTitle: string;
  onClick: () => void;
  color?: string;
  className?: string;
  disabled?: boolean;
  fontColor?: string;
  noBorder?: boolean;
  borderColor?: string;
  hoverBorderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  margin?: number;
  padding?: number;
};

const Button = ({ buttonTitle, onClick, className, disabled }: Props) => (
  <button type="button" className={className} onClick={onClick} disabled={disabled}>
    {buttonTitle}
  </button>
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

Button.defaultProps = defaultProps;

export default styled(Button)`
  ${({
    theme,
    color = defaultProps.color,
    backgroundColor,
    hoverBackgroundColor,
    fontColor,
    noBorder = defaultProps.noBorder,
    borderColor,
    hoverBorderColor,
    borderWidth = defaultProps.borderWidth,
    borderRadius = defaultProps.borderRadius,
    margin = defaultProps.margin,
    padding = defaultProps.padding,
  }) => ({
    'background-color': backgroundColor || theme.colors[color].base,
    color: fontColor || theme.colors[color].dark,
    border: noBorder ? 'none' : 'solid',
    'border-color': borderColor || theme.colors[color].dark,
    'border-width': `${borderWidth}px`,
    'border-radius': `${borderRadius}px`,
    margin: `${margin}px`,
    padding: `${padding}px`,
    'text-transform': 'uppercase',
    'font-weight': 'bold',
    '&:hover': {
      cursor: 'pointer',
      'background-color': hoverBackgroundColor || theme.colors[color].light,
      'border-color': hoverBorderColor,
    },
    outline: 'none',
    '&[disabled]': {
      'background-color': theme.colors.disabled.base,
      'border-color': theme.colors.disabled.dark,
      color: '#a6a6a6',
      '&:hover': {
        cursor: 'auto',
      },
    },
  })}
`;
