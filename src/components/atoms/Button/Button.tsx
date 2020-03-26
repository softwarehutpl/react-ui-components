import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../common/theme'
import './button.scss';

type Props = {
  buttonTitle: string,
  onClick: () => void,
  color?: string,
  className?: string,
}

const Button = (
  {
    buttonTitle,
    onClick,
    className,
  }: Props
) => (
  <button
    className={className}
    onClick={onClick}
  >
    { buttonTitle }
  </button>
);

export default styled(Button)`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ color = "primary" }) => theme.colors[color]};
`
