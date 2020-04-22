import styled from 'styled-components';
import { defaultProps } from './Select';

export interface ISelectToggle {
  color?: string;
  backgroundColor?: string;
  fontColor?: string;
  padding?: number;
  disabled?: boolean;
}

export const SelectToggle = styled.div<ISelectToggle>`
  ${({
    theme,
    color = defaultProps.color,
    backgroundColor,
    fontColor,
    padding,
    disabled = defaultProps.disabled,
  }) => ({
    'background-color': disabled
      ? theme.colors.disabled.base
      : backgroundColor || theme.colors[color].base,
    color: fontColor || theme.colors[color].light,
    width: '100%',
    padding: `${padding}px`,
    display: 'flex',
    'justify-content': 'space-between',
  })}
`;
