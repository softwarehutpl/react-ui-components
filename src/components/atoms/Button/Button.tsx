import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  buttonTitle: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

interface IButtonStyleProps {
  color?: string;
  fontColor?: string;
  noBorder?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  margin?: number;
  padding?: string;
}

const Button = ({ buttonTitle, onClick, className, disabled }: IButtonProps) => (
  <button type="button" className={className} onClick={onClick} disabled={disabled}>
    {buttonTitle}
  </button>
);

const defaultProps = {
  color: 'primary',
  noBorder: true,
  disabled: false,
  className: '',
  borderWidth: 2,
  margin: 0,
  padding: '10px 20px',
  borderRadius: 4,
};

Button.defaultProps = defaultProps;

export default styled(Button)<IButtonStyleProps>`
  ${({
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
  }) => ({
    'background-color': backgroundColor || theme.colors[color].base,
    color: fontColor || theme.colors[color].light,
    border: noBorder ? 'none' : 'solid',
    'border-color': borderColor || theme.colors[color].light,
    'border-width': `${borderWidth}px`,
    'border-radius': `${borderRadius}px`,
    margin: `${margin}px`,
    padding,
    'font-weight': 'bold',
    '&:hover': {
      cursor: 'pointer',
      color: theme.colors[color].dark,
    },
    outline: 'none',
    '&[disabled]': {
      'background-color': theme.colors.disabled.base,
      'border-color': theme.colors.disabled.dark,
      color: theme.colors.disabled.light,
      '&:hover': {
        cursor: 'auto',
      },
    },
  })}
`;
