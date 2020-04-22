import styled from 'styled-components';
import { defaultProps } from './Select';

export interface ISelectOption {
  padding?: number;
  color?: string;
  optionsBackgroundColor?: string;
  optionsFontColor?: string;
  isSelected: boolean;
  selectedOptionBackgroundColor?: string;
}

export const SelectOption = styled.div<ISelectOption>`
  ${({
    theme,
    color = defaultProps.color,
    padding = defaultProps.padding,
    optionsBackgroundColor,
    optionsFontColor,
    isSelected,
    selectedOptionBackgroundColor,
  }) => ({
    width: '100%',
    padding: `${padding / 2}px ${padding}px`,
    'background-color': isSelected
      ? selectedOptionBackgroundColor || theme.colors[color].dark
      : optionsBackgroundColor || theme.colors[color].light,
    color: optionsFontColor || theme.colors[color].base,
    'font-weight': isSelected ? '600' : '400',
    '&:hover': {
      'background-color': theme.colors[color].dark,
    },
  })}
`;
