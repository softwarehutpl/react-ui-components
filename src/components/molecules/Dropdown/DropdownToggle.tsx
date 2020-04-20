import styled from 'styled-components';
import { defaultProps } from './Dropdown';

export interface IDropdownToggle {
  color?: string;
  disabled?: boolean;
  backgroundColor?: string;
  padding?: number;
  fontColor?: string;
}

export const DropdownToggle = styled.div<IDropdownToggle>`
  ${({
    theme,
    color = defaultProps.color,
    backgroundColor,
    padding = defaultProps.padding,
    fontColor,
    disabled = defaultProps.disabled,
  }) => {
    let dropdownColor = color;
    if (disabled) {
      dropdownColor = 'disabled';
    }
    return {
      width: '100%',
      'background-color': backgroundColor || theme.colors[dropdownColor].base,
      padding: `${padding}px`,
      color: fontColor || theme.colors[dropdownColor].light,
      'font-weight': 'bold',
      'box-sizing': 'border-box',
      '&:hover': {
        cursor: disabled ? 'default' : 'pointer',
      },
      'text-align': 'left',
    };
  }}
`;
