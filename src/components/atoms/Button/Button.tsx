import React from 'react';
import styled from 'styled-components';
import './button.scss';

type Props = {
  buttonTitle: string,
  onClick: () => void,
  color: string,
  className: string,
  disabled: boolean,
  fontColor: string,
  noBorder: boolean,
  border: string,
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
  fontColor: 'black',
  noBorder: false,
  border: '2px solid black',
  disabled: false,
  className: '',
};

Button.defaultProps = defaultProps;

export default styled(Button)`
  border: ${({ noBorder = defaultProps.noBorder, border = defaultProps.border }) => noBorder ? 'none' : border};
  border-radius: 10px;
  outline: none;
  padding: 15px;
  background-color: ${({ color = defaultProps.color, theme }) => theme.colors[color]};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ fontColor = defaultProps.fontColor }) => fontColor};
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.disabled };
    border-color: ${ ({ theme }) => theme.colors.disabled };
    color: #a6a6a6;
    &:hover {
      cursor: auto;
    }
  }
`
